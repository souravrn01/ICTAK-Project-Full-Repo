import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../admin-api.service';



@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent implements OnInit {

  constructor(private apiservice: AdminApiService) { }

  ngOnInit(): void {

    this.getAlumUV();
    this.getAlumniV();
    this.getAppUV();
    this.getAppV();
    this.getEmpV();
    this.getEmpUV();

  }

  empV:any=[];
  empUV:any=[];
  alumV:any=[];
  alumUV:any=[];;
  appV:any=[];
  appUV:any=[];


  getAlumniV(){
    this.apiservice.getalumniV().subscribe(res=>{
      this.alumV = res
      console.log('alumni V:', this.alumV.length)
    })
  }

  getAlumUV(){
    this.apiservice.getalumni().subscribe(res=>{
      this.alumUV = res
      console.log('alumni UV:', this.alumUV.length);
      
    })
  }

  getEmpV(){
    this.apiservice.getEmpV().subscribe(res=>{
      this.empV = res
      console.log('EMPloyer V', this.empV.length)
    })
  }

  getEmpUV(){
    this.apiservice.getEmp().subscribe(res=>{
      this.empUV = res
      console.log(" employer UV", this.empUV.length)
    })
  }

  getAppV(){
    this.apiservice.applicationVjob().subscribe(res=>{
      this.appV = res
      console.log("apps V", this.appV.length  );
      
    })
  }

  getAppUV(){
    this.apiservice.applicationUVjob().subscribe(res=>{
      this.appUV = res
      console.log("APPS UV", this.appUV.length);
      
    })
  }
  function(){
    localStorage.removeItem('token')
  }

}
