import { Customer } from "../model/Customer";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlQuery } from '../model/UrlQuery';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  categories = [];
  total = 0;
  urlQuery:UrlQuery = new UrlQuery();
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    var result : any;
    this.customerService.getList(this.urlQuery).subscribe((res) =>{
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
    this.customerService.delete(id).subscribe((res) =>{
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
