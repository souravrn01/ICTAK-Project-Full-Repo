import { Component, OnInit } from '@angular/core';
import { AlumniApiService } from '../alumni-api.service';

@Component({
  selector: 'app-applyjobs',
  templateUrl: './applyjobs.component.html',
  styleUrls: ['./applyjobs.component.css']
})
export class ApplyjobsComponent implements OnInit {

  job={
    jobTitle: '',
    qualification: '',
    experience: '',
    jobSector: '',
    companyName: '',
    location: '',
    closingDate: '',
    skills: '',
    description:'',
    salaryRange: '',
  }
  constructor(private apiService: AlumniApiService) { }
  ngOnInit(): void {
  
  }


}
