import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private apiService:SignUpService, private router:Router) { }
  
  filterString:string=''
  jobs:any=[]
  ngOnInit(): void {
    this.getjob()
  }
  getjob(){
    this.apiService.getJob().subscribe(res=>{
      this.jobs=res
    })
   }
   apply(){
    alert("Login/Signup to Apply for the job")
    this.router.navigate(['/alumnisignup'])
   }
}
