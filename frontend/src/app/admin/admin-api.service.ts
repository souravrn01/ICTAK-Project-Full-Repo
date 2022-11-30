import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http:HttpClient) { }
  postJob(data:any){
    return this.http.post('http://localhost:3000/api/verifiedjobs/postjob', data)
  }

  postmail(data:any, email:any, name:any){
    return this.http.post('http://localhost:3000/api/nodemailer/alumnimail', {data, email, name})
  }

  getalumni(){
    return this.http.get('http://localhost:3000/api/alumniuv/aluminis')
  }

  getonealumni(data:any){
    return this.http.put(`http://localhost:3000/api/alumniuv/onealumni`,data)
    
  }

  deletealumni(id:any){
    return this.http.delete(`http://localhost:3000/api/alumniuv/deletealumni/${id}`)
  }
}
