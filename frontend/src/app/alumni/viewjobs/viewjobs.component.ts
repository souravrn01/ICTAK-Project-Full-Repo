import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css']
})
export class ViewjobsComponent implements OnInit {

  constructor(private apiService: AlumniApiService, private router: Router,private http: HttpClientModule) { }


  form:any=new FormGroup({
    name:new FormControl(null),
    email:new FormControl(null),
    phone:new FormControl(null),
    resume_file_upload:new FormControl(null),
    profile_link:new FormControl(null)
  })
  jobs:any=[]
  ngOnInit(): void {
    this.getjob()
    
  }

//  onFileSelect(event : Event){
//   const file = (event.target as HTMLInputElement);
//   this.form.patchValue({file:file,image:file})
//   const allowedFileTypes = ["file/pdf","file/doc","image/png","image/jpeg","image/jpg"];
//   if(file&&allowedFileTypes.includes(file.type)){
//     const reader = new FileReader();
//     reader.onload = () =>{
    
//     }
//   }
 
//  }

 getjob(){
  this.apiService.getJob().subscribe(res=>{
    this.jobs=res
  })
 }
 onSubmit(){}
}
