import {NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms'

export class CategoryModel{
    categoryName:string = ""

    formGroup:FormGroup = null

    constructor(){
        var fb = new FormBuilder();
        this.formGroup = fb.group({});
        this.formGroup.addControl('categoryName', new FormControl('', Validators.required));

        //hoặc dùng mảng các validate
        // var validationcollection = [];
        // validationcollection.push(Validators.required);
        // validationcollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        // this.formGroup.addControl('CustomerCodeControl', new
        //     FormControl('', Validators.compose(validationcollection)));

    }
}