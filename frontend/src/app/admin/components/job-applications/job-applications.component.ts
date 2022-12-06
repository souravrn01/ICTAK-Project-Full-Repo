import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {

  constructor(private adminApi: AdminApiService) { }

  condition:String =""
  jobs:any=''
  applications:any=''
  profile:any=''
  ngOnInit(): void {
    this.adminApi.getappliedjobs().subscribe(res=>{
      this.jobs = res
    })
  }
  view(id:any){
    this.adminApi.applicationforjob(id).subscribe(res=>{
      this.applications = res
      if(this.applications.length > 0){
        this.condition = `Number of Applications: ${this.applications.length}`
      }else{
        this.condition = "No Applicants yet!"
      }
      console.log(this.applications.length);
      console.log(this.applications);
    })
  }

  getprofile(id:any){
    this.adminApi.getsinglealumnidata(id).subscribe(res=>{
      this.profile = res
      console.log(this.profile.name, this.profile.education.qualification);
      
    })
  }
}
