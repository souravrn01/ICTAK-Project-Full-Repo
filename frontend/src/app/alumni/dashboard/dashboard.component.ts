import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
id:any
alumnidata:any = ""
  constructor(private activaRoute:ActivatedRoute,private apiService: AlumniApiService,private router:Router) { }

  ngOnInit(): void {
     this.id= this.activaRoute.snapshot.params['id']
     this.apiService.getsinglealumnidata(this.alumnidata).subscribe(res=>{
      this.alumnidata=res
      console.log(res)
     })
  } 
  opened=false;
}
