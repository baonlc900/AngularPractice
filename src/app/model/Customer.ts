import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class Customer{
    name : string = "";
    gender : string = "";
    date_of_birth : string = "";
    address : string = "";
    phone : number = 0;
    info : string = "";

    formGroup:FormGroup = null

    constructor(){
        var fb = new FormBuilder();
        this.formGroup = fb.group({});
        this.formGroup.addControl('name', new FormControl('', Validators.required));
        this.formGroup.addControl('gender', new FormControl(null));
        this.formGroup.addControl('date_of_birth', new FormControl(''));
        this.formGroup.addControl('address', new FormControl(''));
        this.formGroup.addControl('phone', new FormControl(0 ));
        this.formGroup.addControl('info', new FormControl(''));

        //hoặc dùng mảng các validate
        // var validationcollection = [];
        // validationcollection.push(Validators.required);
        // validationcollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        // this.formGroup.addControl('CustomerCodeControl', new
        //     FormControl('', Validators.compose(validationcollection)));

    }
}