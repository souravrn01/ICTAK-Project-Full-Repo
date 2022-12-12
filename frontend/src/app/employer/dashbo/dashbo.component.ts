import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerApiService } from '../employer-api.service';

@Component({
  selector: 'app-dashbo',
  templateUrl: './dashbo.component.html',
  template:`<app-viewjob [data]="empid"></app-viewjob>`,
  styleUrls: ['./dashbo.component.css']
})

export class DashboComponent implements OnInit {
@Input() empid:any

  constructor(private api:EmployerApiService, private actroute: ActivatedRoute) { }
 
  jobs:any=[];
  user:any=[];
  JOB:any=[];
  application:any=[];
id:any=''

  ngOnInit(): void {

    this.empid=this.actroute.snapshot.paramMap.get('id')
   console.log(this.empid);
    this.getjob()
    this.userlength()
    this.joblength()
   this.applicationlenth()
  }

getjob(){
  this.api.getappliedjobs().subscribe(res=>{
    this.jobs=res
  })
}



userlength(){
  this.api.getalumnilength().subscribe(res=>{
    this.user=res
    console.log(res)
    console.log('user:', this.user.length);
  })
}
joblength(){
  this.api.getJob().subscribe(res=>{
    this.JOB=res
    console.log(res)
    console.log('job:', this.JOB.length);
  })
}
applicationlenth(){
  this.api.getapplicationlength().subscribe(res=>{
    this.application=res
    console.log(res)
    console.log('Company:', this.application.length);
  })
}
}