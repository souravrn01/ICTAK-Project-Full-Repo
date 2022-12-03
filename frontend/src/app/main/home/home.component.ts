import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
//Animated Number Counter
registeredcount:number=0;
registeredcountstop:any=setInterval(()=>{
  this.registeredcount++;
  if(this.registeredcount==2870){
    clearInterval(this.registeredcountstop)
  }
})
trainers:number=0;
trainerscountstop:any=setInterval(()=>{
  this.trainers++;
  if(this.trainers==150){
    clearInterval(this.trainerscountstop)
  }
})
works:number=0;
workscountstop:any=setInterval(()=>{
  this.works++;
  if(this.works==800){
    clearInterval(this.workscountstop)
  }
})
seekers:number=0;
seekerscountstop:any=setInterval(()=>{
  this.seekers++;
  if(this.seekers==600){
    clearInterval(this.seekerscountstop)
  }
})
  ngOnInit(): void {
  }


}