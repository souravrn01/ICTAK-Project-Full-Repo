import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerApiService } from '../employer-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
 data:any=[]
  constructor(private route:ActivatedRoute,private api:EmployerApiService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.api.getSingleJob(this.id).subscribe((res:any)=>{
      this.data=res
      console.log(this.data)
    
    })
  }
  update(){
    console.log(this.data)
    this.api.updatejob(this.data,this.id).subscribe((res:any)=>{
    console.log(res)
    this.editForm=res
    alert('data updated')
    
    })
   
  }

 backfn(){
  this.router.navigate(['/empDash/dash'])
 }
  
