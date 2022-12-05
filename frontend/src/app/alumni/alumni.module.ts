import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';


@NgModule({
  declarations: [
    ProfileComponent,
    GeneralInformationComponent,
    ExperienceComponent,
    EducationComponent,
    DashboardComponent,
    FooterComponent,
    ViewjobsComponent,
    ApplyjobsComponent,
  
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
    HttpClientModule,
    ReactiveFormsModule,
    
  ]
})
export class AlumniModule { }
