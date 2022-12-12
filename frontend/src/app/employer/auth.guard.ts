import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpService } from '../main/sign-up.service';
import { EmployerApiService } from './employer-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private employeService:EmployerApiService,private router:Router){}

  canActivate():boolean{
    if(this.employeService.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/employelogin'])
      return false
    }


  
  }


  
}
