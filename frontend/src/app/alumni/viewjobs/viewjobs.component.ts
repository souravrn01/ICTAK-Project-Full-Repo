import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css'],
})
export class ViewjobsComponent implements OnInit {
  constructor(private apiService: AlumniApiService, private router: Router) {}

  form: any = new FormGroup({
    link: new FormControl(null),
    id: new FormControl(null)
  });



  jobs: any = []; 
  selectedFile!: File;
  storeID: any
  ngOnInit(): void {
    this.getjob();
  }

  getjob() {
    this.apiService.getJob().subscribe((res) => {
      this.jobs = res;
    });
  }

  storeid(id:any){
    this.storeID = id
  }

  fileselect(event: any) {
    this.selectedFile = event.target.files[0];
  }

   onSubmit() {
    this.form.value.id = this.storeID
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

  back(){
    history.back()
  }
  
}
