import { Component, OnInit } from '@angular/core';
import { AlumniApiService } from '../alumni-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private alumniApi:AlumniApiService,private router:Router,
    private route:ActivatedRoute) { }

  id:any
  data:any={
    company:'',
    Designation:'',
    presently_working:'',
    starting_date:'',
    ending_date:'',
    current_monthly_salary:'',
    notice_period:'',
    _id:''
    
  }
    
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.alumniApi.getsinglealumnidata(this.id).subscribe((res:any)=>{
      this.data=res
      console.log(this.data)
    })
  }
  onsubmit(){
    this.alumniApi.alumniexperience(this.data).subscribe(res=>{
      console.log(res)
      this.data=res
      alert("Data updated successfully")
        //this.router.navigate(['/dashboard'])
    })
  }

  back(){
    history.back()
  }
}
