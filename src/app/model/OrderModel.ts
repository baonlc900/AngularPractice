import {NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms'

export class OrderModel{
    customerId:number = 0
    productId:number = 0
    customerName:string = ""
    productName:string = ""

    formGroup:FormGroup = null

    constructor(){
        var fb = new FormBuilder();
        this.formGroup = fb.group({});
        this.formGroup.addControl('customerId', new FormControl(null));
        this.formGroup.addControl('productId', new FormControl(null));
        this.formGroup.addControl('customerName', new FormControl(""));
        this.formGroup.addControl('productName', new FormControl(""));

        //hoặc dùng mảng các validate
        // var validationcollection = [];
        // validationcollection.push(Validators.required);
        // validationcollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        // this.formGroup.addControl('CustomerCodeControl', new
        //     FormControl('', Validators.compose(validationcollection)));

    }
}