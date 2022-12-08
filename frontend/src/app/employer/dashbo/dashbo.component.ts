import { Component, OnInit } from '@angular/core';
import { EmployerApiService } from '../employer-api.service';

@Component({
  selector: 'app-dashbo',
  templateUrl: './dashbo.component.html',
  styleUrls: ['./dashbo.component.css']
})
export class DashboComponent implements OnInit {
  jobs:any=[]

  constructor(private api:EmployerApiService) { }

  ngOnInit(): void {
    this.getjob()
  }

getjob(){
  this.api.getappliedjobs().subscribe(res=>{
    this.jobs=res
  })
}
}
