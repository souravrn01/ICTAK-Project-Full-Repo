import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminApiService } from './admin/admin-api.service';
import { AlumniApiService } from './alumni/alumni-api.service';
import { EmployerApiService } from './employer/employer-api.service';
import { SignUpService } from './main/sign-up.service';

@Injectable({
  providedIn: 'root' 
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private SignupService:SignUpService,private alumniService:AlumniApiService,
    private adminService:AdminApiService,private employeService:EmployerApiService
    ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token= this.SignupService.getToken() 
    if(token){
      req = req.clone({

        setHeaders: { Authorization: `Beard ${token}` }
      })
    }
    return next.handle(req);
  }
}
