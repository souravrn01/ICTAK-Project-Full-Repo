import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  educationForm:any = new FormGroup({
    qualification:new FormControl(null,Validators.required),
    status:new FormControl(null,Validators.required),
    stream:new FormControl(null,Validators.required),
    specialization:new FormControl(null,Validators.required),
    college:new FormControl(null,Validators.required),
    percentage:new FormControl(null,Validators.required),
    year:new FormControl(null,Validators.required)
  })

  ngOnInit(): void {
  }

}
