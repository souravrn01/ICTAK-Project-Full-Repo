import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-alumni-uv',
  templateUrl: './alumni-uv.component.html',
  styleUrls: ['./alumni-uv.component.css']
})
export class AlumniUVComponent implements OnInit {


  feedbackForm:any = new FormGroup({
    'feedback' : new FormControl('')
  })

  constructor(private api: AdminApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.feedbackForm.value);
    this.api.postmail(this.feedbackForm.value).subscribe(res=>{
      console.log(res);
    })
  }

}

