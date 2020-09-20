import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../model/CategoryModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ProductModel } from '../model/ProductModel';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryId: number = 0;
  model: ProductModel = new ProductModel();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    var result: any;

    this.activeRoute.params.subscribe((params) => {
      this.categoryId = params.id;
    });
    console.log(this.categoryId)

    this.categoryService.get(this.categoryId).subscribe((res) => {
      result = res;
    }, err => {
      console.log(err)
    }, () => {
      console.log(result)
      this.model.productName = result.productName;
      this.model.price = result.price;
      this.model.amount = result.amount;
    });
  }

  submitData() {
    if (this.model.formGroup.valid) {
      this.categoryService.edit({
        "id": this.categoryId,
        "productName": this.model.productName,
        "price": this.model.price,
        "amount": this.model.amount
      }).subscribe((res) => {
        console.log(res);
      }, err => {
        alert('Cập nhật không thành công');
      }, () => {
        alert('Cập nhật thành công');
        this.router.navigateByUrl('/home/category');
      })
    }

  }

}
