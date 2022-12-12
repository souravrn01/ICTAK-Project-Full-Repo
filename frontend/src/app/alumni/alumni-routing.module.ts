import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'alumnidashboard/:id',canActivate:[AuthGuard],component:DashboardComponent},
  {path:'general-information/:id',canActivate:[AuthGuard],component:GeneralInformationComponent },
  {path:'education/:id',canActivate:[AuthGuard],component:EducationComponent},
  {path:'experiences/:id',canActivate:[AuthGuard],component:ExperienceComponent},
  {path:'alumniviewjobs/:id',canActivate:[AuthGuard],component:ViewjobsComponent},
  {path:'appliedjobs',canActivate:[AuthGuard],component:ApplyjobsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
