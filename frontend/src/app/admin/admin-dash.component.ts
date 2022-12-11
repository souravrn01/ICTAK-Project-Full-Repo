import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdminApiService } from'./admin-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  
  data:any=[]
  job:any=[]
  emp:any=[]
  jobverfied:any=[]
  constructor(
    private api:AdminApiService) {}

  ngOnInit(): void {
    this.getAlumni(),
    this.getjob(),
    this.getjobverfied(),
    this.getemp()
    
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  // getalumni(data:any){
  // this.api.getalumni().subscribe((res)=>{
  //   this.data=res
  //   console.log(res
      
  //     );
  // })

  getAlumni(){             
    this.api.getalumni().subscribe(data=>{
      this.data=JSON.parse(JSON.stringify(data));
      console.log(this.data);
      console.log(this.data.length)
      
    })
  }
  getjob(){
       this.api.getJob().subscribe(data=>{
        this.job=JSON.parse(JSON.stringify(data));
        console.log(this.job);
        console.log(this.job.length)
       })
  }
getemp(){
  this.api.getEmp().subscribe(data=>{
    this.emp=JSON.parse(JSON.stringify(data));
    console.log(this.emp);
    console.log(this.emp.length)
   })
}
getjobverfied(){
  this.api.getappliedjobs().subscribe(data=>{
    this.jobverfied=JSON.parse(JSON.stringify(data));
    console.log(this.jobverfied);
    console.log(this.jobverfied.length)
   })
}

  }

  
