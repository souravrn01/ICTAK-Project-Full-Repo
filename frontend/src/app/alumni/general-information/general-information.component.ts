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
    
     this.alumniApi.alumnigeneraldata(this.personalForm).subscribe(res=>{
      this.personalForm=res
     })
   
  }
  opened=false;
}
