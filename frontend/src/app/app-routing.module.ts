import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniSignupComponent } from './main/alumni-signup/alumni-signup.component';
import { EmployeSignupComponent } from './main/employe-signup/employe-signup.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'home/alumnisignup', component:AlumniSignupComponent},
{ path: 'home/employee', component:EmployeSignupComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
