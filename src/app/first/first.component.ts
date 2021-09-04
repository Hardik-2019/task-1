import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  fname
  lname
  email
  pass

  constructor(public http: HttpClient,public route: ActivatedRoute, private router:Router) { 
    
   }

  ngOnInit(): void {
  }

  submit(){
    let body = {
      firstName:this.fname,
      lastName: this.lname,
      email: this.email,
      password: this.pass
    }
    console.log(body);
    this.http.post('https://jsonplaceholder.typicode.com/users',body).subscribe(res=>{
      console.log("sent via post request") 
      this.router.navigate(['users'])
    })
  }

}
