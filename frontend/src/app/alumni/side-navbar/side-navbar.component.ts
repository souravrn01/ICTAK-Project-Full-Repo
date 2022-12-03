import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  constructor(private activaRoute:ActivatedRoute,private apiService: AlumniApiService) { }

  alumnidata:any = ""
  ngOnInit(): void {
  
  }

}
