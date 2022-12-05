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
  // formData = {
  //   qualification: `this.data.education.qualification`,
  //   completion_status:'',
  //   main_stream: '',
  //   specialization: '',
  //   university: '',
  //   percentage: '',
  //   year_of_pass: '',
  //   id:''
  // }                              
                                                       
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.alumniApi.getsinglealumnidata(this.id).subscribe((res:any)=>{
      this.data=res
      console.log(this.data)
    })
  }

  onsubmit(){
    
    console.log(this.data);
    this.alumniApi.alumnieducation(this.data).subscribe(res=>{
      console.log(res)
      this.data=res
      alert("Data updated successfully")
      this.router.navigate(['/dashboard'])
    })
  }
 
  back(){
    history.back()
  }
}
