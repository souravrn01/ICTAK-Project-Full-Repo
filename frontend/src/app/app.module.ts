import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AlumniModule } from './alumni/alumni.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerModule } from './employer/employer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AlumniSignupComponent,
    EmployeSignupComponent,
    EmpLoginComponent,
      
   
  ],
  imports: [
    BrowserModule,
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
    HttpClientModule
  ],
  providers: [SignUpService],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
