import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobPostFormComponent } from './components/jobPostForm/job-post-form.component';
import { AdminDashComponent } from './admin-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumniUVComponent } from './components/alumni-uv/alumni-uv.component';


@NgModule({
  declarations: [NavbarComponent,  JobPostFormComponent, AdminDashComponent, AlumniUVComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule],
})
export class AdminModule {}
