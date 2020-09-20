import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../model/ProductModel';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId: number = 0;
  model: ProductModel = new ProductModel();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    var result: any;

    this.activeRoute.params.subscribe((params) => {
      this.productId = params.id;
    });
    console.log(this.productId)

    this.productService.get(this.productId).subscribe((res) => {
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
      this.productService.edit({
        "id": this.productId,
        "productName": this.model.productName,
        "price": this.model.price,
        "amount": this.model.amount
      }).subscribe((res) => {
        console.log(res);
      }, err => {
        alert('Cập nhật không thành công');
      }, () => {
        alert('Cập nhật thành công');
        this.router.navigateByUrl('/home/product');
      })
    }

  }

}
