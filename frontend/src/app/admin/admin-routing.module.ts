import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash.component';
import { JobPostFormComponent } from './components/jobPostForm/job-post-form.component';


const routes: Routes = [
  {path:'adminDash', component:AdminDashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
