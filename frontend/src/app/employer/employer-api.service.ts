import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployerApiService {
apiUrl:any=('http://localhost:3000/api')
  constructor(private http:HttpClient) { }
  addJob(data:any){
    return this.http.post(`${this.apiUrl}/jobuv/job`,data)
  }
  getJob(){
    return this.http.get(`${this.apiUrl}/jobuv/joblist`)
  }
  getSingleJob(id:any){
    return this.http.get(`${this.apiUrl}/jobuv/job/${id}`)
  }
  updatejob(data:any){
    return this.http.put(`${this.apiUrl}/jobuv/job`,data)
  }
}
