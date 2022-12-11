import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployerApiService } from './employer/employer-api.service';
import { SignUpService } from './main/sign-up.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate { 

  constructor(private signupService:SignUpService,private router:Router){}

  canActivate():boolean{
    if(this.signupService.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/employelogin'])
      return false
    }


  
  }


  
}

