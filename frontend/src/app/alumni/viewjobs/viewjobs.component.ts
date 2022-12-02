import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';
import { FormGroup,FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css']
})
export class ViewjobsComponent implements OnInit {

  constructor(private apiService: AlumniApiService, private router: Router) { }

                                                      //? data collected from form
  form:any=new FormGroup({
    resume_file_upload:new FormControl(null),
    profile_link:new FormControl(null)
  })

  preview!: string;
  fileName = '';
  jobs:any=[]


  ngOnInit(): void {
    this.getjob()
  }



  fileselect(event: any) {
    const file:File = event.target.files[0]
    const formData = new FormData();
    formData.append("resume", file)
    const upload$ = this.apiService

  }











  
 getjob(){
  this.apiService.getJob().subscribe(res=>{
    this.jobs=res
  })
 }

onSubmit(){
  this.apiService.addjobapplication(this.form.value).subscribe({
    complete:()=>{
      alert("data saved");
     window.close();
    }
  })
}

}