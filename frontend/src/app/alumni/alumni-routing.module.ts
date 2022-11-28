import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ProfileComponent } from './profile/profile.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';

const routes: Routes = [
  {path:'alumnidashboard',component:DashboardComponent},
  {path:'side-navbar',component:SideNavbarComponent},
  {path:'profile',component:ProfileComponent},
  {path:'general-information',component:GeneralInformationComponent},
  {path:'education',component:EducationComponent},
  {path:'experiences',component:ExperienceComponent},
  {path:'alumniviewjobs',component:ViewjobsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
