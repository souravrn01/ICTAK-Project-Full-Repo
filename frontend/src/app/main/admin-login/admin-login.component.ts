import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { SignUpService } from '../sign-up.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  empdata:any=[]
  constructor(private router:Router,
    private SignUpService:SignUpService) { }

  loginForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })
  ngOnInit(): void {
  }
  login(){
    this.SignUpService.login(this.loginForm).subscribe(res=>{

    if (res.email == "admin123@gmail.com" && res.password =="Admin123" ){
      localStorage.setItem('token',res.token)

      alert("Admin has successfully logged in")
      this.router.navigate(['/admin'])

     }
    })
}
onsubmit(data:any){
  
}
}