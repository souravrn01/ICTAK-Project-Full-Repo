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
    resume_file_upload:new FormControl(null),
    profile_link:new FormControl(null)
  })
  fileName = '';
  jobs:any=[]
  ngOnInit(): void {
    this.getjob()
    
  }
  fileselect(e: any) {
    this.form.fileupload = e.target.files[0].name;

  }
 getjob(){
  this.apiService.getJob().subscribe(res=>{
    this.jobs=res
  })
 }

onSubmit(){
  this.apiService.addjobapplication(this.form.value).subscribe({
    complete:()=>{
      
      this.router.navigate(['/alumniviewjobs'])
    }
  })
}
}