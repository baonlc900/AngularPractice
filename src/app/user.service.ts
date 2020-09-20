import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


    register(user: User) {
        return this.http.post('https://vnpt.fastlms.vn/api/Account/register', user);
    }

}
