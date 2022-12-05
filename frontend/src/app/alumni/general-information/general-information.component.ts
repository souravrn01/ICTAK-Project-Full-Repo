import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumniApiService } from '../alumni-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  constructor(private alumniApi:AlumniApiService,private router:Router,
    private route:ActivatedRoute) { }

    id:any
  personalForm: any = new FormGroup({
    name:new FormControl(null,Validators.required),
    email:new FormControl(null,Validators.required),
    phone:new FormControl(null,Validators.required),
    gender:new FormControl(null,Validators.required),
    martial_status:new FormControl(null,Validators.required),
    address:new FormControl(null,Validators.required),
    alternate_number:new FormControl(null,Validators.required),
    pincode:new FormControl(null,Validators.required),
    district:new FormControl(null,Validators.required),
    state:new FormControl(null,Validators.required),
    country:new FormControl(null,Validators.required)
  })
  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    this.alumniApi.getsinglealumnidata(this.id).subscribe((res:any)=>{
      this.personalForm=res
    })
   
  }
onsubmit(){
  this.alumniApi.alumnigeneraldata(this.personalForm).subscribe(res=>{
    console.log(res)
    this.personalForm=res
    alert("Data updated successfully")
      this.router.navigate(['/profile'])
  })
}

  opened=false;
}
