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
    return this.http.post(`${this.apiURL}/employeuv/employesignup`,data)
  }
  getalumnilogin(data:any){
    return this.http.get(`${this.apiURL}/Alumniuv/singlealumni`,data)
  }
  getemployeelogin(){
    return this.http.get(`${this.apiURL}/employeuv/employelist`)
  }
 
}
