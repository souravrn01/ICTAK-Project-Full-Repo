import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-employer-applications',
  templateUrl: './employer-applications.component.html',
  styleUrls: ['./employer-applications.component.css']
})
export class EmployerApplicationsComponent implements OnInit {

  constructor(private adminApi: AdminApiService) { }
  condition:String =''
  jobs:any=''
  applications:any=''
  profile:any=''


  ngOnInit(): void {
    this.adminApi.getempappliedjobs().subscribe(res=>{
      this.jobs = res
      console.log(this.jobs)
    })
  }

  view(id:any){
    this.adminApi.applicationforjob(id).subscribe(res=>{ //gets all applications from database
      this.applications = res // saving the reponse
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
      console.log(res)
      this.profile = res
      console.log(this.profile.name, this.profile.education.qualification);
    })
  }
  delete(id:any){
   if(window.confirm("are you sure?")){
    this.adminApi.deleteApplication(id).subscribe(res=>{
      this.ngOnInit()
    })
   }
  }
  verify(id:any){
    this.adminApi.verifyApplication(id).subscribe(res=>{
      window.alert(" verified")
      this.ngOnInit()
    })
  }


}
 