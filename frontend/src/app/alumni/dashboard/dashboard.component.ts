import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 alumni_id:any
alumnidata:any

  constructor(private activaRoute:ActivatedRoute,private apiService: AlumniApiService,private router:Router) { }

  ngOnInit(): void {
    let id= this.activaRoute.snapshot.paramMap.get('id')
     console.log(id)
     this.apiService.getsinglealumnidata(id).subscribe(res=>{
      this.alumnidata=res
      this.alumni_id=this.alumnidata._id
      console.log(this.alumnidata);
     })
  } 
  
  opened=false;
}
