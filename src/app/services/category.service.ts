import { Injectable } from '@angular/core';
import { API } from './api';
import { UrlQuery } from '../model/UrlQuery';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private api: API
  ) { }

  getList(urlQuery:UrlQuery){
    // let url = `/api/Category/list-by-user/?PageNumber=${urlQuery.pageNumber}&PageSize=${urlQuery.pageSize}&Keyword=${urlQuery.keyword}`;
    let url = `/api/votinh900/resource/product/?PageNumber=${urlQuery.pageNumber}&PageSize=${urlQuery.pageSize}&Keyword=${urlQuery.keyword}`;
    return this.api.get(url);
  }

  add(data:any){
    let url = `/api/votinh900/resource/product`;
    return this.api.post(url, data);
  }

  edit(data:any){
    let url = `/api/votinh900/resource/product/${data.id}`;
    return this.api.put(url, data);
  }

  delete(id:number){
    let url = `/api/votinh900/resource/product/${id}`;
    return this.api.delete(url);
  }

  get(id:number){
    let url = `/api/votinh900/resource/product/${id}`;
    return this.api.get(url);
  }
}
