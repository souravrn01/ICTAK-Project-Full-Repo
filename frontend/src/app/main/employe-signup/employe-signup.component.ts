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
    name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.pattern('^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$')]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$')]),
    company:new FormControl(null,Validators.required),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)])
  })
  constructor(private signup:SignUpService,private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
  // console.log(this.employeeForm.value)
  // console.log(this.employeeForm.status)
  // let status=this.employeeForm.status
  this.signup.addEmploye(this.employeeForm.value).subscribe((res)=>{
    console.log(this.employeeForm.value)
    this.router.navigate(['/empDash'])
  })
}
}
