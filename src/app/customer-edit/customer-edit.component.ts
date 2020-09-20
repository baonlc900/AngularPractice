import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/Customer';
import { CategoryService } from '../services/category.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerId: number = 0;
  model: Customer = new Customer();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    var result: any;

    this.activeRoute.params.subscribe((params) => {
      this.customerId = params.id;
    });
    console.log(this.customerId)

    this.customerService.get(this.customerId).subscribe((res) => {
      result = res;
    }, err => {
      console.log(err)
    }, () => {
      console.log(result)
      this.model.name = result.name;
      this.model.gender = result.gender;
      this.model.date_of_birth = result.date_of_birth;
      this.model.address = result.address;
      this.model.phone = result.phone;
      this.model.info = result.info;
    });
  }

  submitData() {
    if (this.model.formGroup.valid) {
      this.customerService.edit({
        "id": this.customerId,
        "gender": this.model.gender,
        "name": this.model.name,
        "date_of_birth": this.model.date_of_birth,
        "address": this.model.address,
        "phone": this.model.phone,
        "info": this.model.info,
      }).subscribe((res) => {
        console.log(res);
      }, err => {
        alert('Cập nhật không thành công');
      }, () => {
        alert('Cập nhật thành công');
        this.router.navigateByUrl('/home/customer');
      })
    }

  }

}
