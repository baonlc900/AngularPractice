import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  model: Customer = new Customer();

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

  submitData() {
    //check validate
    if (this.model.formGroup.valid) {
      var result: any;

      this.customerService.add({
        name: this.model.name,
        gender: this.model.gender,
        date_of_birth: this.model.date_of_birth,
        address: this.model.address,
        phone: this.model.phone,
        info: this.model.info
      }).subscribe((res) => {
        result = res;
      }, err => {
        alert('Thêm danh mục không thành công');
      }, () => {
        //console.log(result)
        alert('Thêm danh mục thành công');
        this.model.name = "";
        this.model.gender = "";
        this.model.date_of_birth = "";
        this.model.address = "";
        this.model.phone = 0;
        this.model.info = "";
        this.router.navigateByUrl('/home/customer');
      })
    }
  }

}
