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
postalumni(){
  return this.http.get('http://localhost:3000/api/alumniuv/aluminisignup')
}

  approvealumni(data:any){
    return this.http.put(`http://localhost:3000/api/alumniuv/onealumni`,data)
    
  }

  deletealumni(id:any){
    return this.http.delete(`http://localhost:3000/api/alumniuv/deletealumni/${id}`)
  }

  getEmp(){
    return this.http.get('http://localhost:3000/api/employeuv/employers')
  }

  deleteemp(id:any){
    return this.http.delete(`http://localhost:3000/api/employeuv/deleteemployer/${id}`)
  }

  approveemp(data:any){
    return this.http.put(`http://localhost:3000/api/employeuv/verifyemp`, data)
  }

  getappliedjobs(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getjob')
  }

  applicationforjob(id:any){
    return this.http.get(`http://localhost:3000/api/applicationsuv/applicationdata/${id}`)
  }
  getsinglealumnidata(id:any){
    return this.http.get(`http://localhost:3000/api/alumniuv/alumni/${id}`)
  }
deleteApplication(id:any){
  return this.http.delete(`http://localhost:3000/api/applicationsuv/delete/${id}`)
}

verifyApplication(id:any){
  return this.http.put('http://localhost:3000/api/applicationsuv/verify/', {id})
}
  

}
