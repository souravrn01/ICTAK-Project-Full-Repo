import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { EmployerApiService } from '../employer-api.service';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {
  Jobs:any=[];
  data:any;
  condition:String ="" 
  jobs:any=''
  applications:any=''
  profile:any=''
  constructor(private api:EmployerApiService,private router:Router) { }

  ngOnInit(): void {
    this.getjob()
    this.api.getappliedjobs().subscribe(res=>{
      this.jobs = res
    })
  }
  getjob(){
    this.api.getJob().subscribe(res=>{
      this.Jobs=res
    })
  }
  getSingleJob(id:any){
  this.router.navigate([`/edit/${id}`])
  
  }
  view(id:any){
    this.api.applicationforjob(id).subscribe(res=>{
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
    this.api.getsinglealumnidata(id).subscribe(res=>{
      this.profile = res
      console.log(this.profile.name, this.profile.education.qualification);
      
    })
  }


}
