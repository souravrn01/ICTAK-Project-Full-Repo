import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { EmployerApiService } from '../employer-api.service';
import {EmpLoginComponent} from '../../main/emp-login/emp-login.component'

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {
  @ViewChild(EmpLoginComponent)
  child!: EmpLoginComponent;

  routerID:any=''
  Jobs:any=[];
  data:any;
  condition:String ="" 
  jobs:any=''
  applications:any=''
  profile:any=''
  constructor(private api:EmployerApiService,private router:Router, public emp:EmpLoginComponent, private actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actroute.snapshot.paramMap.get('id');
    console.log(this.routerID )
    this.getjob()
    
    this.api.getappliedjobs().subscribe(async res=>{
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
      console.log(res)
      this.profile = res
      console.log(this.profile.name, this.profile.education.qualification);
      
    })
  }

  search(){
    for ( var job of this.jobs){
        let find = job.postedBy;
        console.log(find);
    }
  }

}
