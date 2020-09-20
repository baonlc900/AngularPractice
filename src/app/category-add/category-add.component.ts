import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from '../model/CategoryModel';
import { Router } from '@angular/router';
import { ProductModel } from '../model/ProductModel';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  model: ProductModel = new ProductModel();

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  submitData() {
    //check validate
    if (this.model.formGroup.valid) {
      var result: any;

      this.categoryService.add({
        productName: this.model.productName,
        price: this.model.price,
        amount: this.model.amount
      }).subscribe((res) => {
        result = res;
      }, err => {
        alert('Thêm danh mục không thành công');
      }, () => {
        //console.log(result)
        alert('Thêm danh mục thành công');
        this.model.productName = "";
        this.router.navigateByUrl('/home/category');
      })
    }
  }

}
