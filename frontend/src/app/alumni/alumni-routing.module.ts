import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ProfileComponent } from './profile/profile.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';

const routes: Routes = [
  {path:'alumnidashboard',component:DashboardComponent},
  {path:'general-information/:id',component:GeneralInformationComponent },
  {path:'education/:id',component:EducationComponent},
  {path:'experiences/:id',component:ExperienceComponent},
  {path:'side-navbar',component:SideNavbarComponent},
  {path:'alumniviewjobs',component:ViewjobsComponent},
  {path:'appliedjobs',component:ApplyjobsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
