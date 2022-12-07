import { Component, OnInit,Input } from '@angular/core';
import { AlumniApiService } from '../alumni-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

id:any
alumnidata:any=[]
  constructor( private activaRoute:ActivatedRoute,private apiService: AlumniApiService,private router:Router) { }

  ngOnInit(): void {
    
  }

  

  opened=false;

}
