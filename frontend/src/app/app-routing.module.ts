import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniSignupComponent } from './alumni-signup/alumni-signup.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'employee', component:EmployerSignupComponent},
{ path: 'alumni', component:AlumniSignupComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
