import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

alumnidata:any = ""
  constructor(private activaRoute:ActivatedRoute,private apiService: AlumniApiService) { }

  ngOnInit(): void {
    // this.id= this.activaRoute.snapshot.paramMap.get('id')
    // this.apiService.getsinglealumnidata(this.id)
    console.log(this.activaRoute.snapshot.params)
    this.alumnidata=this.activaRoute.snapshot.paramMap.get('id')
  } 
  opened=false;
}
