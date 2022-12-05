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
    data:any={
      name:'',
      email:'',
      phone:'',
      gender:'',
      date_of_birth:'',
      martial_status:'',
      permanent_address:'',
      alternate_phone_number:'',
      pincode:'',
      district:'',
      state:'',
      country:'',
      _id:''
    }
  
  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.alumniApi.getsinglealumnidata(this.id).subscribe((res:any)=>{
      this.data=res

      
    })
   
  }
onsubmit(){
  this.alumniApi.alumnigeneraldata(this.data).subscribe(res=>{
    console.log(res)
    this.data=res
    alert("Data updated successfully")
      //this.router.navigate(['/dashboard'])
  })
}
back(){
  history.back()
}

  opened=false;
}
