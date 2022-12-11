import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash.component';
import { AuthGuard } from './auth.guard';
import { AlumniUVComponent } from './components/alumni-uv/alumni-uv.component';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { EmployerApplicationsComponent } from './components/employer-applications/employer-applications.component';
import { JobApplicationsComponent } from './components/job-applications/job-applications.component';
import { JobPostFormComponent } from './components/jobPostForm/job-post-form.component';
import { VerifyEmpComponent } from './components/verify-emp/verify-emp.component';

 
const routes: Routes = [
  {path:'adminDash', component:AdminDashComponent},
  {path:'jobpost',canActivate:[AuthGuard], component:JobPostFormComponent},
  {path:'verifyalumni',canActivate:[AuthGuard], component:AlumniUVComponent},
  {path:'verifyemp',canActivate:[AuthGuard], component:VerifyEmpComponent},
  {path:'adminjobsandapplies',canActivate:[AuthGuard], component:JobApplicationsComponent},
  {path:'empjobsandapplies',canActivate:[AuthGuard], component:EmployerApplicationsComponent},
  {path:'dashadmin',canActivate:[AuthGuard], component:DashAdminComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
