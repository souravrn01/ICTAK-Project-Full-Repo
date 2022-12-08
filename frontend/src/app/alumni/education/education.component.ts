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

  id:any =''
  data:any=[]
  holder={
    qualification:'',
    completion_status:'',
    main_stream:'',
    specialization:'',
    university:'',
    percentage:'',
    year_of_pass:''
  }                                                    
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.alumniApi.getsinglealumnidata(this.id).subscribe((res:any)=>{
      this.data=res.education
      console.log(this.data)
    })
  }

  onsubmit(){
      this.data.push(this.holder)
      console.log(this.data);
      this.alumniApi.alumnieducation(this.data, this.id).subscribe(res=>{
      console.log(res)
      this.data=res
      alert("Data updated successfully")
      this.ngOnInit()
      this.router.navigate([`alumnidashboard/${this.id}`])
    })
  }
 
  back(){
    history.back()
  }
}
