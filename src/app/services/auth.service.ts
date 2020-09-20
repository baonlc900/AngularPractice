import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API } from "./api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private api: API) {
  }
  login(data) {
    return this.api.post('/api/Account/login', data);
  }

  setToken(token) {
    return localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
  }

  clearLocalStorage() {
    localStorage.removeItem('token');
  }
  getCurrentUser() {
    return this.api.get('/api/Account//api/Account/get-current');
  }

  logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }
}

