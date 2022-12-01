import { Component, OnInit } from '@angular/core';
import { EmployerApiService } from '../employer-api.service';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {
  jobs:any=[]
  constructor(private api:EmployerApiService) { }

  ngOnInit(): void {
    this.getjob()
  }
  getjob(){
    this.api.getJob().subscribe(res=>{
      this.jobs=res
    })
  }

}
