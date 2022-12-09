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
    console.log(this.alumnidata._id);
    localStorage.setItem('token',res.token)
if(res.message){
  alert('admin didnot verified yet')
  this.router.navigate(['/alumnilogin'])
}
 else{
  alert('Successfully Login')
  this.router.navigateByUrl(`/alumnidashboard/${this.alumnidata._id}`)
 } 

   
    })
    
}
// openSnackBar(message:any,action:any){
//   this.snackBar.open(message,action)
// }
}


