import { Component, OnInit,Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css'],
})

export class ViewjobsComponent implements OnInit {
  constructor(private apiService: AlumniApiService, private router: Router, private activeroute: ActivatedRoute) {}

  filterString:string=''
  form: any = new FormGroup({
    link: new FormControl(null),
    job_id: new FormControl(null),
    alum_id: new FormControl(null)
  });


  date:boolean = true
  jobs: any = []; 
  selectedFile!: File;
  jobID: any=''
  alumID: any=''
  ngOnInit(): void {
    
    this.getjob();
    this.alumID= this.activeroute.snapshot.paramMap.get('id')
  }

  getjob() {
    this.apiService.getJob().subscribe((res) => {
      this.jobs = res;
      console.log(this.jobs) 
    });
  }

storeid(id:any){
    this.jobID = id
  }

  fileselect(event: any) {
    this.selectedFile = event.target.files[0];
  }

   onSubmit() {
    this.form.value.job_id = this.jobID
    this.form.value.alum_id = this.alumID
    const data = new FormData();
        let link = this.form.value
        for (const prop in link) {
          data.append(prop, link[prop])
        }
     data.append('resume', this.selectedFile)
    console.log(data)
    this.apiService.addjobapplication(data).subscribe((res) => {
      console.log(res);
    });
  }

  datecheck(date:any){
    const today = new Date()
    const jobdate = new Date(date)
    console.log(today, jobdate);
    if(jobdate > today){
      this.date = true
      return true
    }else{
      this.date = false
      return false
    }
  }
   
}
