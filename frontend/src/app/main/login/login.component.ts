import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { SignUpService } from '../sign-up.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private SignUpService:SignUpService) { }

    database:any

  loginForm=new FormGroup({
    emailid:new FormControl(null,[Validators.required,Validators.email]),
    passwords:new FormControl(null,[Validators.required,Validators.minLength(8)])
  })
  ngOnInit() {

    this.SignUpService.getlogin().subscribe((res:any)=>{
      this.database=res
      console.log(res)
    })
  }
  condition:any=''
login(){

  for(var data of this.database){
    if(data.email===this.loginForm.value.emailid && data.password===this.loginForm.value.passwords){
      this.router.navigate(['alumnidashboard'])
    }
    else{
      this.condition='invalid username and password'
    }
  }
     
}

}
