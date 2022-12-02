import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash.component';
import { AlumniUVComponent } from './components/alumni-uv/alumni-uv.component';
import { JobPostFormComponent } from './components/jobPostForm/job-post-form.component';
import { VerifyEmpComponent } from './components/verify-emp/verify-emp.component';


const routes: Routes = [
  {path:'adminDash', component:AdminDashComponent},
  {path:'jobpost', component:JobPostFormComponent},
  {path:'verifyalumni', component:AlumniUVComponent},
  {path:'verifyemp', component:VerifyEmpComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
