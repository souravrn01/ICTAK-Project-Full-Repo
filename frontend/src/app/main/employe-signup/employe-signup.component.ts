import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-employe-signup',
  templateUrl: './employe-signup.component.html',
  styleUrls: ['./employe-signup.component.css']
})
export class EmployeSignupComponent implements OnInit {
  employeeForm:any=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.pattern('^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$')]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$')]),
    company:new FormControl(null,Validators.required),
    designation:new FormControl(null,Validators.required),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)])
  })
  constructor(private signup:SignUpService,private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
  
  this.signup.addEmploye(this.employeeForm.value).subscribe((res)=>{
    
    if(res.message){
      alert(res.message)
        this.router.navigate(['/employesignup'])
    }
    else{
      alert('registerd successfully')
      this.router.navigate(['/employelogin'])

    }
  })
}
get Name():FormControl{
  return this.employeeForm.get("name") as FormControl;
}
get Email():FormControl{
  return this.employeeForm.get("email") as FormControl;
}
get Phone():FormControl{
  return this.employeeForm.get("phone") as FormControl;
}
get Designation():FormControl{
  return this.employeeForm.get("designation") as FormControl;
}
get Company_Name():FormControl{
  return this.employeeForm.get("company") as FormControl;
}
get Password():FormControl{
  return this.employeeForm.get("password") as FormControl;
}
}
