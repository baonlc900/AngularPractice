import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../model/ProductModel';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  model: ProductModel = new ProductModel();

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  submitData() {
    //check validate
    if (this.model.formGroup.valid) {
      var result: any;

      this.productService.add({
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
        this.router.navigateByUrl('/home/product');
      })
    }
  }

}
