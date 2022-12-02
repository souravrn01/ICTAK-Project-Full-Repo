import { Component, OnInit } from '@angular/core';
import { AlumniApiService } from '../alumni-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

id:any
data:any
  constructor( private alumniApi:AlumniApiService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.alumniApi.getsinglealumnidata(this.id).subscribe(res=>{
      this.data=res
    })
  }



}
