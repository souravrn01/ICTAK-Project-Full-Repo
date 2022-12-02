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

    
    alumnidata:any=[]

  loginForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    usertype:new FormControl(null,[Validators.required])
  })
  ngOnInit() {

    this.SignUpService.getalumnilogin().subscribe((res:any)=>{
      this.alumnidata=res
    })
 
  }
  condition:any=''
login(){

    for(var data of this.alumnidata){
    if(this.loginForm.value.usertype===data.usertype){
      if(data.email===this.loginForm.value.email && data.password===this.loginForm.value.password){
        this.router.navigate(['alumnidashboard'])
      }
    }
    }
    
  } 

}
