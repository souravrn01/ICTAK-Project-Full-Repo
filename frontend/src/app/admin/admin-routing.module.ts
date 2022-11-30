import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash.component';
import { AlumniUVComponent } from './components/alumni-uv/alumni-uv.component';
import { JobPostFormComponent } from './components/jobPostForm/job-post-form.component';


const routes: Routes = [
  {path:'adminDash', component:AdminDashComponent},
  {path:'jobpost', component:JobPostFormComponent},
  {path:'alumniverify', component:AlumniUVComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
