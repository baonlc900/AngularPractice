import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from '../model/OrderModel';
import { UrlQuery } from '../model/UrlQuery';
import { CustomerService } from '../services/customer.service';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  model: OrderModel = new OrderModel();
  urlQuery:UrlQuery = new UrlQuery();
  customers: any[] = [];
  products: any[] = [];
  listCus: any[] = [];
  customerName: string = "";
  productName: string = "";

  constructor(
    private router: Router,
    private orderService: OrderService,
    private customerService: CustomerService,
    private productService: ProductService
  ) {
    var resultCustomer : any;
    var resultProduct : any;
    this.customerService.getList(this.urlQuery).subscribe(data => {
      resultCustomer = data
      Object.assign(this.customers, resultCustomer.data);
    }, error => { console.log('Error while get customer data.'); });
    this.productService.getList(this.urlQuery).subscribe(data => {
      resultProduct = data
      Object.assign(this.products, resultProduct.data);
    }, error => { console.log('Error while get product data.'); });
  }

  ngOnInit(): void {
  }
  
  onChangeCus($event){
    this.customerName = $event.target.options[$event.target.options.selectedIndex].text;
    console.log('text', this.customerName);
  }
  onChangePro($event){
    this.productName = $event.target.options[$event.target.options.selectedIndex].text;
    console.log('text', this.productName);
  }

  submitData() {
    
    //check validate
    if (this.model.formGroup.valid) {
      var result: any;

      this.orderService.add({
        productId: this.model.productId,
        customerId: this.model.customerId,
        customerName: this.customerName,
        productName: this.productName,
      }).subscribe((res) => {
        result = res;
      }, err => {
        alert('Thêm danh mục không thành công');
      }, () => {
        //console.log(result)
        alert('Thêm danh mục thành công');
        this.model.productId = 0;
        this.model.customerId = 0;
        this.router.navigateByUrl('/home/order');
      })
    }
  }

}
