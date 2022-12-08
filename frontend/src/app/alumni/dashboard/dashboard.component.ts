import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';

@Component({ 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private activaRoute:ActivatedRoute,private apiService: AlumniApiService,private router:Router) { }
  
  alumni_id:any=''
  alumnidata:any=''
  educations:any=''
  experiences:any=''
  ngOnInit(): void {
    let id= this.activaRoute.snapshot.paramMap.get('id')
     console.log(id)
     this.apiService.getsinglealumnidata(id).subscribe(res=>{
      this.alumnidata=res
      this.alumni_id=this.alumnidata._id
      this.educations=this.alumnidata.education
      this.experiences=this.alumnidata.experience
      console.log(this.educations)
      console.log(this.experiences)
      console.log(this.alumnidata);
     })
  } 
  navigatetogeneraldata(id:any){
    this.router.navigate([`/general-information/${id}`])
  }
  navigatetoeducation(id:any){
    this.router.navigate([`/education/${id}`])
  }
  navigatetoexperience(id:any){
    this.router.navigate([`/experiences/${id}`])
  }
  tojobs(id:any){
    this.router.navigateByUrl(`/alumniviewjobs/${id}`)
  }
  deleteexperience(id:any){
    this.apiService.alumniexperienceremove(id).subscribe(res=>{
      
    })
  }
// deleteeducation(id:any){
//   this.apiService.alumnieducationremove(id).subscribe(res=>{
//   console.log(id)
  
//   })
// }
 
}
