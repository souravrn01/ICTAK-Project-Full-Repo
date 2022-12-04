import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { EmployerApiService } from '../employer-api.service';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {
  jobs:any=[];
  data:any;
  constructor(private api:EmployerApiService,private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.getjob()
  }
  getjob(){
    this.api.getJob().subscribe(res=>{
      this.jobs=res
    })
  }
  getSingleJob(id:any){
  this.router.navigate([`/edit/${id}`])
  
  }

}
