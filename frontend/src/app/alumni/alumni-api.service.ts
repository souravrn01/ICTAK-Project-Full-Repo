import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniApiService {

  constructor(private http:HttpClient) { }
 
  getJob(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getjob')
  }
  getsinglealumnidata(data:any){
    return this.http.post(`http://localhost:3000/api/alumniuv/singlealumni`,data)
  }
  addjobapplication(data:any){
    return this.http.post('http://localhost:3000/api/applicationsuv/upload',data)
  }
  getappliedjobs(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/applicatiodata')
  }
  getalumnilogin(data:any){
    console.log(data)
    return this.http.post('http://localhost:3000/api/alumniuv/singlealumni',data)
  }
}

