import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  vals
  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res=>{
      this.vals = res;
      console.log(this.vals);
    })
  }
  back(){
    this.router.navigate([''])
  }

}
