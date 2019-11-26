import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp={
    "No":"",
    "Name":"",
    "Age":""
  };

  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let No=result.get("No");
      console.log(No);
      let obserableResult = this.service.SelectByNo(No);
      obserableResult.subscribe((records)=>{
        console.log(records[0]);
         this.emp=records[0];
      });
});
}
Update()
{
  console.log(this.emp);
  let observableResult = this.service.Update(this.emp);
  observableResult.subscribe((result)=>{
    console.log(result);
    this.router.navigate(['home']);
  });
}
  }

