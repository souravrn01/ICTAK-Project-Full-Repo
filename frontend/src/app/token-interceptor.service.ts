import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpService } from './main/sign-up.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private SignupService:SignUpService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token= this.SignupService.getToken()
    if(token){
      req = req.clone({

        setHeaders: { Authorization: `${token}` }
      })
    }
    return next.handle(req);
  }
}
