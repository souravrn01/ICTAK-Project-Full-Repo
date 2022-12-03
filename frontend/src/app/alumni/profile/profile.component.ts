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
alumnidata=""
datas:any=[]
  constructor( private alumniApi:AlumniApiService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    // this.id= this.route.snapshot.paramMap.get('id')
    // this.alumniApi.getsinglealumnidata(this.id)
  }

  opened=false;

}
