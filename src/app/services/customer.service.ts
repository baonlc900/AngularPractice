import { Injectable } from '@angular/core';
import { UrlQuery } from '../model/UrlQuery';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private api: API
  ) { }

  getList(urlQuery:UrlQuery){
    // let url = `/api/Category/list-by-user/?PageNumber=${urlQuery.pageNumber}&PageSize=${urlQuery.pageSize}&Keyword=${urlQuery.keyword}`;
    let url = `/api/votinh900/resource/customer/?PageNumber=${urlQuery.pageNumber}&PageSize=${urlQuery.pageSize}&Keyword=${urlQuery.keyword}`;
    return this.api.get(url);
  }

  add(data:any){
    let url = `/api/votinh900/resource/customer`;
    console.log('test', data);
    return this.api.post(url, data);
  }

  edit(data:any){
    let url = `/api/votinh900/resource/customer/${data.id}`;
    return this.api.put(url, data);
  }

  delete(id:number){
    let url = `/api/votinh900/resource/customer/${id}`;
    return this.api.delete(url);
  }

  get(id:number){
    let url = `/api/votinh900/resource/customer/${id}`;
    return this.api.get(url);
  }
}
