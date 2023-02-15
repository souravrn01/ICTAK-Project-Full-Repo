import { Component, OnInit } from '@angular/core';
import { AlumniApiService } from '../alumni-api.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-applyjobs',
  templateUrl: './applyjobs.component.html',
  styleUrls: ['./applyjobs.component.css']
})
export class ApplyjobsComponent implements OnInit {

  constructor(private apiService: AlumniApiService, private router: Router) { }

  jobs:any=[] 
  form:any=new FormGroup({
    resume_file_upload:new FormControl(null),
    profile_link:new FormControl(null)
  })


  ngOnInit(): void {
    this.apiService.getappliedjobs().subscribe(res=>{
      this.jobs=res
    })
  }
  fileselect(event: any) {
    const file:File = event.target.files[0]
    const formData = new FormData();
    formData.append("resume", file)
    const upload$ = this.apiService
  }

  
  onSubmit(){
    console.log('hii');
  }

}
