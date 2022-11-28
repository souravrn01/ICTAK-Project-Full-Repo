import { Component, OnInit } from '@angular/core';
import { AlumniApiService } from '../alumni-api.service';

@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css']
})
export class ViewjobsComponent implements OnInit {

  constructor(private apiService: AlumniApiService) { }

  jobs:any=[]
  ngOnInit(): void {
  }

 getjob(){
  this.apiService.getJob().subscribe(res=>{
    this.jobs=res
  })
 }
}
