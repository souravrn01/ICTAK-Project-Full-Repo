import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { SignUpService } from '../sign-up.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private SignUpService:SignUpService, private snackBar:MatSnackBar) { }

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
    }else{
       console.log('data from backend',res)
       //localStorage.setItem('token',res.token)
       alert("Login Successfully")
       console.log(this.alumnidata[0]._id);
       this.router.navigateByUrl(`/alumnidashboard/${this.alumnidata[0]._id}`)
    }

  

   
    })
    
}
// openSnackBar(message:any,action:any){
//   this.snackBar.open(message,action)
// }
}


