import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniSignupComponent } from './main/alumni-signup/alumni-signup.component';
import { EmpLoginComponent } from './main/emp-login/emp-login.component';
import { EmployeSignupComponent } from './main/employe-signup/employe-signup.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'home/alumnisignup', component:AlumniSignupComponent},
{ path: 'home/employesignup', component:EmployeSignupComponent},
{path:'home/employelogin',component:EmpLoginComponent},
{path:'home/alumnilogin',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
