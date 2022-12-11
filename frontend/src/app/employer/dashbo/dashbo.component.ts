import { Component, OnInit } from '@angular/core';
import { EmployerApiService } from '../employer-api.service';

@Component({
  selector: 'app-dashbo',
  templateUrl: './dashbo.component.html',
  styleUrls: ['./dashbo.component.css']
})
export class DashboComponent implements OnInit {
  jobs:any=[];
  user:any=[];
  JOB:any=[];
  application:any=[];
  constructor(private api:EmployerApiService) { }

  ngOnInit(): void {
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