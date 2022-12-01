import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { EmployerRoutingModule } from './employer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddjobComponent } from './addjob/addjob.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule }  from'@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    DashboardComponent,
    AddjobComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EmployerModule { }
