import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobPostFormComponent } from './components/jobPostForm/job-post-form.component';
import { AdminDashComponent } from './admin-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import { AlumniUVComponent } from './components/alumni-uv/alumni-uv.component';
import { VerifyEmpComponent } from './components/verify-emp/verify-emp.component';
import { JobApplicationsComponent } from './components/job-applications/job-applications.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [NavbarComponent,  JobPostFormComponent, AdminDashComponent, AlumniUVComponent, VerifyEmpComponent, JobApplicationsComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule,CarouselModule,MatCardModule,MatExpansionModule,MatButtonModule],
})
export class AdminModule {}
