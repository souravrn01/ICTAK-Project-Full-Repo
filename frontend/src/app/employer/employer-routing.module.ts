import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddjobComponent } from './addjob/addjob.component';
import { AuthGuard } from './auth.guard';
import { DashboComponent } from './dashbo/dashbo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ViewjobComponent } from './viewjob/viewjob.component';


const routes: Routes = [
  {path: 'empDash',canActivate:[AuthGuard], component: DashboardComponent,
  children: [{ path: 'dash/:id', component:DashboComponent },
  { path: 'job', component: AddjobComponent },
  { path: 'dash', component: DashboComponent },
  {path: 'viewjob', component: ViewjobComponent}]
},{path: 'edit/:id', component: EditComponent},{path: 'Home', component:DashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
