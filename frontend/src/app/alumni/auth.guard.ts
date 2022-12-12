import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumniApiService } from './alumni-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private alumniService:AlumniApiService,private router:Router){}

  canActivate():boolean{
    if(this.alumniService.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/alumnilogin'])
      return false
    }

  }
  
  }