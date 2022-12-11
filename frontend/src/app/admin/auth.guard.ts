import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpService } from '../main/sign-up.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private signupService:SignUpService,private router:Router){}

  canActivate():boolean{
    if(this.signupService.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/adminlogin'])
      return false
    }


  
  }
  
}
