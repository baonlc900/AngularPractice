import {NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms'

export class ProductModel{
    productName:string = ""
    amount: number = 0
    price: number = 0

    formGroup:FormGroup = null

    constructor(){
        var fb = new FormBuilder();
        this.formGroup = fb.group({});
        this.formGroup.addControl('productName', new FormControl('', Validators.required));
        this.formGroup.addControl('price', new FormControl(0, Validators.required));
        this.formGroup.addControl('amount', new FormControl(0, Validators.required));

        //hoặc dùng mảng các validate
        // var validationcollection = [];
        // validationcollection.push(Validators.required);
        // validationcollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        // this.formGroup.addControl('CustomerCodeControl', new
        //     FormControl('', Validators.compose(validationcollection)));

    }
}