import { Component, OnInit } from '@angular/core';
import { UrlQuery } from '../model/UrlQuery';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  categories = [];
  total = 0;
  urlQuery:UrlQuery = new UrlQuery();
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    var result : any;
    this.productService.getList(this.urlQuery).subscribe((res) =>{
      result = res
    },
    (err)=>{
      console.log(err)
    },
    () => {
      console.log(result);
      console.log("test" ,result.data);
      this.categories = result.data;
      this.total = result.total;
    })
  }

  delete(id:number){
    this.productService.delete(id).subscribe((res) =>{
      console.log(res)
    },
    (err)=>{
      console.log(err)
      alert('xóa không thành công');
    },
    () => {
      alert('xóa thành công');
      this.getList();
    })
  }

}
