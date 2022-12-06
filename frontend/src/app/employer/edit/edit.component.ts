import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerApiService } from '../employer-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
 
  constructor(private route:ActivatedRoute,private api:EmployerApiService,private router:Router) { }
  editForm:any=new FormGroup({
    'jobTitle':new FormControl(''),
    'companyName':new FormControl(''),
    'qualification':new FormControl(''),
    'jobSector':new FormControl(''),
    'location':new FormControl(''),
    'skills':new FormControl(''),   
    'description':new FormControl(''),
    'salaryRange':new FormControl(''),
    'experience':new FormControl(''),
    'closingDate':new FormControl(''),
    'postedBy':new FormControl('employe')
  
  })
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.api.getSingleJob(this.id).subscribe((res:any)=>{
      this.editForm=new FormGroup({
        'jobTitle':new FormControl(res['jobTitle']),
    'companyName':new FormControl(res['companyName']),
    'qualification':new FormControl(res['qualification']),
    'jobSector':new FormControl(res['jobSector']),
    'location':new FormControl(res['location']),
    'skills':new FormControl(res['skills']),   
    'description':new FormControl(res['description']),
    'salaryRange':new FormControl(res['salaryRange']),
    'experience':new FormControl(res['experience']),
    'closingDate':new FormControl(res['closingDate']),
    'postedBy':new FormControl('employe')
      })
    })
  }
  update(){
    this.api.updatejob(this.editForm,this.id).subscribe((res:any)=>{
    console.log(res)
    this.editForm=res
    alert('data updated')
    // this.ngOnInit()
    })
   
  }

 backfn(){
  this.router.navigate(['/empDash'])
 }
  

}
