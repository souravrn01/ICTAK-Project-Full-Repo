import { Component, OnInit } from '@angular/core';
import { AlumniApiService } from '../alumni-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private alumniApi:AlumniApiService,private router:Router,
    private route:ActivatedRoute) { }

  id:any
  data:any=[]
    
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.alumniApi.getsinglealumnidata(this.id).subscribe((res:any)=>{
      this.data=res.experience
      console.log(this.data)
    })
  }
  onsubmit(){
    console.log(this.data); 
    this.alumniApi.alumniexperience(this.data, this.id).subscribe(res=>{
    console.log(res)
    this.data=res
    alert("Data updated successfully")
    this.ngOnInit()
    this.router.navigate([`alumnidashboard/${this.id}`])
  })
  }

  back(){
    history.back()
  }
}
