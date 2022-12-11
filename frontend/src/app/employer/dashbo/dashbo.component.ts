import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerApiService } from '../employer-api.service';


@Component({
  selector: 'app-dashbo',
  templateUrl: './dashbo.component.html',
  styleUrls: ['./dashbo.component.css']
})
export class DashboComponent implements OnInit {
  jobs:any=[]

  constructor(private api:EmployerApiService, private actroute: ActivatedRoute) { }
 
  ngOnInit(): void {
   console.log( this.actroute.snapshot.paramMap.get('id'));
   
    this.getjob()
  }

getjob(){
  this.api.getappliedjobs().subscribe(res=>{
    this.jobs=res
  })
}
job:number=0;
jobstop:any=setInterval(()=>{
  this.job++;
  if(this.job==2870){
    clearInterval(this.jobstop)
  }
},500)
Company:number=0;
Companystop:any=setInterval(()=>{
  this.Company++;
  if(this.Companystop==2870){
    clearInterval(this.Companystop)
  }
},1000)
users:number=0;
usersstop:any=setInterval(()=>{
  this.users++;
  if(this.usersstop==2870){
    clearInterval(this.usersstop)
  }
},1500)
}
