import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AlumniApiService } from '../alumni-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private alumniApi:AlumniApiService,private router:Router,
    private route:ActivatedRoute) { }

  id:any
  data:any=[]
  formData = {
    qualification: this.data.education.qualification,
    completion_status:this.data.education.completion_status,
    main_stream: this.data.education.main_stream,
    specialization: this.data.education.specialization,
    university: this.data.education.university,
    percentage: this.data.education.percentage,
    year_of_pass: this.data.education.year_of_pass,
    id: this.data._id
  }                              
                                                       
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.alumniApi.getsinglealumnidata(this.id).subscribe((res:any)=>{
      this.data=res
      console.log(this.data)
    })
  }

  onsubmit(){
    this.alumniApi.alumnieducation(this.formData).subscribe(res=>{
      console.log(res)
      this.data=res
      alert("Data updated successfully")
        //this.router.navigate(['/dashboard'])
    })
  }
 
  back(){
    history.back()
  }
}
