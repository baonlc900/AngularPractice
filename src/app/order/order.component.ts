import { Component, OnInit } from '@angular/core';
import { UrlQuery } from '../model/UrlQuery';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  categories = [];
  total = 0;
  urlQuery:UrlQuery = new UrlQuery();
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    var result : any;
    this.orderService.getList(this.urlQuery).subscribe((res) =>{
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
    this.orderService.delete(id).subscribe((res) =>{
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
