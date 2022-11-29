import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-job-post-form',
  templateUrl: './job-post-form.component.html',
  styleUrls: ['./job-post-form.component.css']
})
export class JobPostFormComponent implements OnInit {

  jobForm:any = new FormGroup({
    'jobTitle':new FormControl(''),
    'companyName':new FormControl(''),
    'qualification':new FormControl(''),
    'jobSector':new FormControl(''),
    'location':new FormControl(''),
    'skills':new FormControl(''),   
    'description':new FormControl(''),
    'salaryRange':new FormControl(''),
    'postedBy':new FormControl('admin'),
    'experience':new FormControl(''),
    'closingDate':new FormControl(''),
  

  })
  constructor(private api:AdminApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.jobForm.value);
    
    this.api.postJob(this.jobForm.value).subscribe(res=>{
      console.log(res);
    })
  }

}
