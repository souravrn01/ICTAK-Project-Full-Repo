import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
apiURL:any='http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  addData(data:any){
    return this.http.post<any>(`${this.apiURL}/Alumniuv/aluminisignup`,data)
  }
  addEmploye(data:any){
    return this.http.post<any>(`${this.apiURL}/employeuv/employesignup`,data)
  }
  emplogin(data:any){
    return this.http.post<any>(`${this.apiURL}/employeuv/emplogin`,data)
  }
  getalumnilogin(data:any){
    return this.http.post<any>(`http://localhost:3000/api/alumniuv/singlealumni`,data)
  }
  getsingleemplogin(data:any){
    return this.http.get<any>(`${this.apiURL}/employeuv/singleemp`,data)
  }
  getemployeelogin(){
    return this.http.get<any>(`${this.apiURL}/employeuv/employelist`)
  }
  getJob(){
    return this.http.get<any>('http://localhost:3000/api/verifiedjobs/getjob')
  }
  singleemploye(data:any){
    return this.http.post<any>(`${this.apiURL}/employeuv/employe`,data)
  }
  loginadmin(data:any){
    return this.http.post<any>('http://localhost:3000/api/login/loginadmin',data)
  }
  getToken(){
    return localStorage.getItem('token');
   }
   loggedIn(){
    return !!localStorage.getItem('token');
   }
   loggedOut(){
    return localStorage.removeItem('token');
   }
}
