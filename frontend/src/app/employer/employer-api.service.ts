import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployerApiService {
apiUrl:any=('http://localhost:3000/api')
  constructor(private http:HttpClient) { }
  addJob(data:any){
    return this.http.post(`${this.apiUrl}/verifiedjobs/postjob`,data)
  }
  getJob(){
    return this.http.get(`${this.apiUrl}/verifiedjobs/getempjobs`)
  }
  getSingleJob(id:any){
    return this.http.get(`${this.apiUrl}/verifiedjobs/getOneJob/${id}`)
  }
  getsingleemp(id:any){
    return this.http.get(`${this.apiUrl}/employeuv/singleemp/${id}`)
  }
  updatejob(data:any,id:any){
    return this.http.put(`${this.apiUrl}/verifiedjobs/editJob`,{data,id})
  }
  applicationforjob(id:any){
    return this.http.get(`http://localhost:3000/api/applicationsuv/applicationdatas/${id}`)
  }
  getsinglealumnidata(id:any){
    return this.http.get(`http://localhost:3000/api/alumniuv/alumni/${id}`)
  }
download(id:any){
  return this.http.get(`http://localhost:3000/api/applicationsuv/download/${id}`)
}
getappliedjobs(){
  return this.http.get('http://localhost:3000/api/verifiedjobs/getjob')
}
getalumnilength(){
  return this.http.get(`${this.apiUrl}/alumniuv/aluminiVer`)
}
getapplicationlength(){
  return this.http.get(`${this.apiUrl}/applicationsuv/Apps`)
}
}
