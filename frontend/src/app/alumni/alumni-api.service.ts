import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniApiService {

  constructor(private http:HttpClient) { }
 
  getJob(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getjobs')
  }
  // getsinglealumnidata(data:any){
  //   return this.http.post(`http://localhost:3000/api/alumniuv/singlealumni`,data)
  // }
  addjobapplication(data:any){
    return this.http.post('http://localhost:3000/api/applicationsuv/upload',data)
  }
  getappliedjobs(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/applicatiodata')
  }

  // to fetch data of a single  
  getsinglealumnidata(id:any){
  return this.http.get(`http://localhost:3000/api/alumniuv/alumni/${id}`)
}
alumnigeneraldata(data:any,id:any){
  return this.http.put(`http://localhost:3000/api/alumniuv/generaldata`,{data,id})
  
}
alumnieducation(data:any, id:any){
  return this.http.put(`http://localhost:3000/api/alumniuv/alumnieducation`,{data,id})
}
alumniexperience(data:any, id:any){
  return this.http.put(`http://localhost:3000/api/alumniuv/alumniexperience`,{data,id})
}
alumniexperienceremove(id:any){
  return this.http.delete(`http://localhost:3000/api/alumniuv/deleteexperience/${id}`)
}
// alumnieducationremove(id:any){
//   return this.http.delete(`http://localhost:3000/api/alumniuv/deleteeducation/${id}`)
// }

}

