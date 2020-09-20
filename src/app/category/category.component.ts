import { Component, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { UrlQuery } from '../model/UrlQuery';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = [];
  total = 0;
  urlQuery:UrlQuery = new UrlQuery();
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    var result : any;
    this.categoryService.getList(this.urlQuery).subscribe((res) =>{
      result = res
    },
    (err)=>{
      console.log(err)
    },
    () => {
      console.log(result);
      console.log("test" ,result.data);
      this.categories = result.data;
      this.total = result.total;
    })
  }

  delete(id:number){
    this.categoryService.delete(id).subscribe((res) =>{
      console.log(res)
    },
    (err)=>{
      console.log(err)
      alert('xóa không thành công');
    },
    () => {
      alert('xóa thành công');
      this.getList();
    })
  }

}
