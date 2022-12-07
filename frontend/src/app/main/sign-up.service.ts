import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
apiURL:any='http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  addData(data:any){
    return this.http.post(`${this.apiURL}/Alumniuv/aluminisignup`,data)
  }
  addEmploye(data:any){
    return this.http.post<any>(`${this.apiURL}/employeuv/employesignup`,data)
  }
  login(data:any){
    return this.http.post<any>(`${this.apiURL}/employeuv/emplogin`,data)
  }
  getalumnilogin(data:any){
    return this.http.post(`http://localhost:3000/api/alumniuv/singlealumni`,data)
  }
  getsingleemplogin(data:any){
    return this.http.get(`${this.apiURL}/employeuv/singleemp`,data)
  }
  getemployeelogin(){
    return this.http.get(`${this.apiURL}/employeuv/employelist`)
  }
  getJob(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getjob')
  }
  singleemploye(data:any){
    return this.http.post<any>(`${this.apiURL}/employeuv/employe`,data)
  }
 
}
