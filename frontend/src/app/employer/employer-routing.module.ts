import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddjobComponent } from './addjob/addjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{path: 'empDash', component: DashboardComponent},
  {path: 'empDash', component: DashboardComponent,children: [{ path: 'job', component: AddjobComponent },
  { path: 'profile', component: ProfileComponent }]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
