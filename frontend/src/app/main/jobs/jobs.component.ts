import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private apiService:SignUpService) { }

  jobs:any=[]
  ngOnInit(): void {
    this.getjob()
  }
  getjob(){
    this.apiService.getJob().subscribe(res=>{
      this.jobs=res
    })
   }
}
