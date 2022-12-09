import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { SignUpService } from '../sign-up.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

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
     this.SignUpService.singleemploye(this.loginForm.value).subscribe(res=>{
        if(res.message){
          alert(res.message)
          this.router.navigate(['/employelogin'])
        }
        else{
          console.log(res)
          alert("Successfully logged in")
          this.router.navigate(['/empDash/dash'])
        }    
      })
 
}
onsubmit(data:any){
  // this.SignUpService. getsingleemplogin(this.loginForm.value).subscribe((res)=>{
  //   this.empdata=res
  //   console.log(res)
    // this.router.navigateByUrl(`/empDash`,data)
  // })
}


}
