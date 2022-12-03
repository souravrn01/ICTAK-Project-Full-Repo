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
  })
  ngOnInit() {  
  
  }

login(){
    for(var data of this.alumnidata){
      if(data.email===this.loginForm.value.email && data.password===this.loginForm.value.password){
        this.router.navigate(['/alumnidashboard'])
      }
    }
}
    onsubmit(data:any){
      this.SignUpService.getalumnilogin(this.loginForm.value).subscribe((res)=>{
        this.alumnidata=res
        console.log()
        this.router.navigateByUrl(`/alumnidashboard`,data)
      })
    }
    
}


