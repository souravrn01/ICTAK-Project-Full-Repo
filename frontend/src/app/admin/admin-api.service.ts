import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http:HttpClient) { }
  postJob(data:any){
    return this.http.get('http://localhost:3000/api/verifiedjobs/postjob')
  }

  





}
