import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AlumniModule } from './alumni/alumni.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerModule } from './employer/employer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './main/header/header.component';
import { HomeComponent } from './main/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './main/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { AlumniSignupComponent } from './main/alumni-signup/alumni-signup.component';
import { EmployeSignupComponent } from './main/employe-signup/employe-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './main/sign-up.service';
import { ActivatedRoute } from '@angular/router';
import { EmpLoginComponent } from './main/emp-login/emp-login.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './main/footer/footer.component';
import { JobsComponent } from './main/jobs/jobs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AlumniSignupComponent,
    EmployeSignupComponent,
    EmpLoginComponent,
    FooterComponent,
    JobsComponent,
    AdminLoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AdminModule,
    EmployerModule,
    AlumniModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    CarouselModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [SignUpService],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
