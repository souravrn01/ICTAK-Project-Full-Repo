import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {

  constructor(private adminApi: AdminApiService) { }

  jobs:any 
   applications:any
  nothing:boolean = true
  ngOnInit(): void {
    this.adminApi.getappliedjobs().subscribe(res=>{
      this.jobs = res
    })
  }
  view(id:any){
    this.adminApi.applicationforjob(id).subscribe(res=>{
      this.applications = res
      console.log(this.applications.length);
      console.log(this.applications);
      
    })
  }

}
