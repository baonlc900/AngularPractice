import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from '../model/OrderModel';
import { UrlQuery } from '../model/UrlQuery';
import { CustomerService } from '../services/customer.service';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  orderId: number = 0;
  model: OrderModel = new OrderModel();
  customerName: string = "";
  productName: string = "";
  urlQuery:UrlQuery = new UrlQuery();
  customers: any[] = [];
  products: any[] = [];
  checkCus = false;
  checkPro = false;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
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
    this.getCategory();
  }

  getCategory() {
    var result: any;
    
    this.activeRoute.params.subscribe((params) => {
      this.orderId = params.id;
    });
    console.log(this.orderId)

    this.orderService.get(this.orderId).subscribe((res) => {
      result = res;
    }, err => {
      console.log(err)
    }, () => {
      this.model.customerId = result.customerId;
      this.model.productId = result.productId;
      this.model.productName = result.productName;
      this.model.customerName = result.customerName;
    });
  }

  onChangeCus($event){
    this.checkCus = true;
    this.customerName = $event.target.options[$event.target.options.selectedIndex].text;
  }
  onChangePro($event){
    this.checkPro = true;
    this.productName = $event.target.options[$event.target.options.selectedIndex].text;
  }

  submitData() {
    var custommerData: any;
    var proData: any;
    if (this.checkCus) {
      custommerData = this.customerName;
    } else {
      custommerData = this.model.customerName;
    }
    if (this.checkPro) {
      proData = this.productName;
    } else {
      proData = this.model.productName;
    }
    if (this.model.formGroup.valid) {
      this.orderService.edit({
        "id": this.orderId,
        "productId": this.model.productId,
        "productName": proData,
        "customerId": this.model.customerId,
        "customerName": custommerData,
      }).subscribe((res) => {
        console.log(res);
      }, err => {
        alert('Cập nhật không thành công');
      }, () => {
        alert('Cập nhật thành công');
        this.router.navigateByUrl('/home/order');
      })
    }

  }

}
