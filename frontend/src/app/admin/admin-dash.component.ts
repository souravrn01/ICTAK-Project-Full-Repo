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
  alumniData:any=[]
  data:any=[]
  id:any=[]
  constructor(
    private route:ActivatedRoute,
    private api:AdminApiService) {}

  ngOnInit(): void {
    this.getAlumni()

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

  getAlumni(){              // fetch alumni data
    this.api.getalumni().subscribe(data=>{
      this.data=JSON.parse(JSON.stringify(data));
      console.log(this.data);
      
    })
  }
  }

  
