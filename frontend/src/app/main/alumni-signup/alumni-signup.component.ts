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
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.pattern('^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$')]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$')]),
    highest_qualification:new FormControl(null,Validators.required),
    course_started_at_ictak:new FormControl(null,Validators.required),
    batch_details:new FormControl(null,Validators.required),
    placement_status:new FormControl(null,Validators.required),
    company_name:new FormControl(null),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")])
  })
  constructor(private signup:SignUpService,private router:Router) { }

  ngOnInit(): void {
  }
  sign(){
  this.signup.addData(this.alumniSignup.value).subscribe((res)=>{
    // console.log(this.alumniSignup.value)
    //   this.router.navigate(['/home'])
    if(res.message){
      alert(res.message)
        
    }
    else{
      alert('registerd successfully')
      this.router.navigate(['/home'])

    }
 }
  )
}
get Name():FormControl{
  return this.alumniSignup.get("name") as FormControl;
}
get Email():FormControl{
  return this.alumniSignup.get("email") as FormControl;
}
get Phone():FormControl{
  return this.alumniSignup.get("phone") as FormControl;
}
get Highest_Qualification():FormControl{
  return this.alumniSignup.get("highest_qualification") as FormControl;
}
get Course_Studied_at_ICTAK():FormControl{
  return this.alumniSignup.get("course_started_at_ictak") as FormControl;
}
get Batch_Details():FormControl{
  return this.alumniSignup.get("batch_details") as FormControl;
}
get Placement_Status():FormControl{
  return this.alumniSignup.get("placement_status") as FormControl;
}

get Password():FormControl{
  return this.alumniSignup.get("password") as FormControl;
}

}
