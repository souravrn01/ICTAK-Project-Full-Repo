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
  getsinglealumnidata(id:any){
    return this.http.get('http://localhost:3000/api/aluminisignup/:id',id)
  }
  addjobapplication(data:any){
    return this.http.post('http://localhost:3000/api/applicationsuv/upload',data)
  }
  
}

