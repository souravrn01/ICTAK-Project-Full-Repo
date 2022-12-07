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

    alumnidata:any

  loginForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })

  ngOnInit() {  
  
  }

login(){
  
   this.SignUpService.getalumnilogin(this.loginForm.value).subscribe(res=>{
    this.alumnidata = res
    console.log(res)
    if(this.alumnidata === null){
      console.log("data not in database");
    }else{
      console.log(this.alumnidata[0]._id);
       this.router.navigateByUrl(`/alumnidashboard/${this.alumnidata[0]._id}`)
    }
   })
}
}


