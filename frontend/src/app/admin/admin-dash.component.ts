import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdminApiService } from'./admin-api.service';
@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  
  data:any=[]
  emp:any=[]
  job:any=[]
  jobUV:any=[]
  alumniV:any=[]
  empUV:any=[]
  constructor(
    private api:AdminApiService) {}

  ngOnInit(): void {
    this.getAlumni(),
    this.getjobverfied(),
    this.getemp(),
    this.getjobUV(),
    this.getempUV(),
    this.getalumnV()
    
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
  customOptions1: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      30: {
        items: 1
      },

      940: {
        items: 2
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

getemp(){
  this.api.getEmpV().subscribe(data=>{
    this.emp=JSON.parse(JSON.stringify(data));
    console.log(this.emp);
    console.log(this.emp.length)
   })
}
getjobverfied(){
  this.api.applicationVjob().subscribe(data=>{
    this.job=JSON.parse(JSON.stringify(data));
    console.log(this.job);
    console.log(this.job.length)
   })
}

getjobUV(){
  this.api.applicationUVjob().subscribe(data=>{
    this.jobUV = JSON.parse(JSON.stringify(data));
    console.log(this.jobUV);
    console.log(this.jobUV.length)
   })

  }
  getalumnV(){
    this.api.getalumniV().subscribe(data=>{
      this.alumniV = JSON.parse(JSON.stringify(data));
      console.log(this.alumniV);
      console.log(this.alumniV.length)
     })
  
    }
    getempUV(){
      this.api.getEmp().subscribe(data=>{
        this.empUV = JSON.parse(JSON.stringify(data));
        console.log(this.empUV);
        console.log(this.empUV.length)
       })
    
      }

}
