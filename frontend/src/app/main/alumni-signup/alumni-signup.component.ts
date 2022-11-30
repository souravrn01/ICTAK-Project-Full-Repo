import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alumni-signup',
  templateUrl: './alumni-signup.component.html',
  styleUrls: ['./alumni-signup.component.css']
})
export class AlumniSignupComponent implements OnInit {
  alumniSignup:any=new FormGroup({
    name:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.pattern('^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$')]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$')]),
    highest_qualification:new FormControl(null,Validators.required),
    course_started_at_ictak:new FormControl(null,Validators.required),
    batch_details:new FormControl(null,Validators.required),
    placement_status:new FormControl(null,Validators.required),
    company_name:new FormControl(null),
    password:new FormControl(null)
  })
  constructor(private signup:SignUpService,private router:Router) { }

  ngOnInit(): void {
  }
  sign(){
  this.signup.addData(this.alumniSignup.value).subscribe((res)=>{
    console.log(this.alumniSignup.value)
    console.log(this.alumniSignup.status)
    let status=this.alumniSignup.status
    if(status=='VALID'){
      this.router.navigate(['/alumnidashboard'])
    }
  
 }
  )
}
}
