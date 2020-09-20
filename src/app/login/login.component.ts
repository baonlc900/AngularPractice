import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message = "";
  userId: string = "";
  password: string = "";
  state = true;
  isLogged = true;
  accessToken = "";
  username: string = "";
  submitted = false;
  loading = false;
  error = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '',
    }),
  };

  // headers = new Headers({ 'Content-Type': 'application/json' ,
  // 'Accept': 'application/json',
  // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
  // 'Authorization': 'Bearer 123'
  // });



  //   headers.append('Accept', 'application/json');
  // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
  // headers.append('Access-Control-Allow-Origin', 'http://localhost:4503');
  // headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  // navigationExtras: NavigationExtras = {
  //   state: {
  //     message: 'abbbbb',
  //     userId: 'test',
  //     password: '12333'
  //   }
  // };
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  signIn() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    var result: any;
    var param = {
      username: this.userId,
      password: this.password
    };
    this.authService.login(param).subscribe((res) => {
      result = res;
    }, err => {
      this.message = err.error.message;
      this.error = err;
      this.loading = false;

    }, () => {
      this.authService.setToken(result.object.accessToken);
    })
    // if (this.userId == "admin" && this.password == "admin") {

      this.router.navigateByUrl('/home/chart');
    // } else {
    //   this.message = "dang nhap ko hop le1";
    // }

  }
  signIn1() {
    this.submitted = true;
    console.log(this.userId + this.password);
    this.http.post('https://vnpt.fastlms.vn/api/Account/login', {
      'username': this.userId,
      'password': this.password

    }).subscribe(
      (data: any) => {
        console.log("noi dung duoc  1tra ve response", data);

        // this.router.navigateByUrl('/customer');
        // this.isLogged = true;
        // this.accessToken = data.object.accessToken;
        localStorage.setItem('tokenLogin', data.object.accessToken);
        this.message = "đăng nhập thành công";
        alert("Đăng nhập thành công mời bạn vào Dashboard");
        this.router.navigateByUrl('/home/chart');

      },
      (error: any) => {
        console.log("Loi mat khau", error.error);
        this.message = error.error.message;
      }
    )
  }
  // signIn2(){
  //   this.message = "Đang đăng nhập, vui lòng đợi ...";
  //   console.log("1. Chuan bi gui len server", this.userId, this.password);

  //   // Goi len server backend
  //   this.http.post('https://vnpt.fastlms.vn/api/Account/login', {
  //     'username': this.userId,
  //     'password': this.password
  //   }).subscribe(
  //     (data:any) => {
  //       console.log("2. Noi dung login response tra ve", data);
  //       if(data.hasOwnProperty('object')){
  //         this.message = "Xin chào bạn " + data.object.email  + " ( " +  data.object.userId + " ) , bạn đã đăng nhập thành công!";

  //         this.isLogged = true;
  //         localStorage.setItem('_accessToken', data.object.accessToken);
  //       }
  //     },
  //     (error:any) => {
  //       console.log("3. Noi dung login sai MK tra ve", error.error);
  //       this.message = error.error.message;
  //     }
  //   )
  // }


  checkUser() {

    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      'Bearer ' + localStorage.getItem('tokenLogin')
    );
    this.http.get('https://vnpt.fastlms.vn/api/Account/get-current', {
      headers: this.httpOptions.headers,
    }).subscribe(
      data => {
        console.log("check user", data);

        // this.router.navigateByUrl('/customer');
      },
      error => {
        console.log("chưa author", error);
      }
    )
  }
}
