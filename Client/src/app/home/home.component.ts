import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
emps:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    let obserableResult=this.service.select();
    obserableResult.subscribe((result)=>{
      console.log(result);
      this.emps= result;
    });
  }

}
