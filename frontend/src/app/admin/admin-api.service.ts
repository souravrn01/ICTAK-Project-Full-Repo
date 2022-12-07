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

  postmail(data:any){
    return this.http.post('http://localhost:3000/api/nodemailer/alumnimail', data)
  }

  getalumni(){
    return this.http.get('http://localhost:3000/api/alumniuv/aluminiuv')
  }
postalumni(){
  return this.http.get('http://localhost:3000/api/alumniuv/aluminisignup')
}
}
