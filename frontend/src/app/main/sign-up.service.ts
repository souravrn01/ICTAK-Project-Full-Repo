import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
apiURL:any='http://localhost:3000/api/Alumniuv'
  constructor(private http:HttpClient) { }

  addData(data:any){
    return this.http.post(`${this.apiURL}/aluminisignup`,data)
  }
}
