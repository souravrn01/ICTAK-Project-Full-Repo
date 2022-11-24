import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AlumniModule } from './alumni/alumni.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerModule } from './employer/employer.module';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AdminModule,
    EmployerModule,
    AlumniModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
