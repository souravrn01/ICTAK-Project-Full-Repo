import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  experienceForm:any = new FormGroup({
    qualification:new FormControl(null,Validators.required),
    role:new FormControl(null,Validators.required),
    status:new FormControl(null,Validators.required),
    starting_date:new FormControl(null,Validators.required),
    ending_date:new FormControl(null,Validators.required),
    salary:new FormControl(null,Validators.required),
    notice_period:new FormControl(null,Validators.required)
  })
   
   
    
  ngOnInit(): void {
  }

}
