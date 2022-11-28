import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { AlumniRoutingModule } from './alumni-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavbarComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    GeneralInformationComponent,
    ExperienceComponent,
    EducationComponent,
    ViewjobsComponent,
  
  ], 
  imports: [
    CommonModule,
    AlumniRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule,
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AlumniModule{ }
