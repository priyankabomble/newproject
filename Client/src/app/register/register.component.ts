import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
emp:any;
  constructor(private service:DataService,
              private router:Router) { }

  ngOnInit() {

    
  }
  onRegister(myform)
  {
     this.emp= myform.form.value;
    console.log(myform);
     let observableResult=this.service.Insert(this.emp);
     observableResult.subscribe((result)=>{

     });
  }
  gotoHome()
  {
    this.router.navigate(['/home']);
  }
}
