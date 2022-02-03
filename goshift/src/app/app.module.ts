import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowempComponent } from './employee/showemp/showemp.component';
import { EditempComponent } from './employee/editemp/editemp.component';
import { AddempComponent } from './employee/addemp/addemp.component';
import { ShiftComponent } from './shift/shift.component';
import { EditshiftComponent } from './shift/editshift/editshift.component';
import { AddshiftComponent } from './shift/addshift/addshift.component';
import { ViewshiftComponent } from './shift/viewshift/viewshift.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { ViewempshiftComponent } from './employee/viewempshift/viewempshift.component';
import { AloginComponent } from './alogin/alogin.component';
import { EloginComponent } from './elogin/elogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RegisterComponent,
    DashboardComponent,
    EmployeeComponent,
    ShowempComponent,
    EditempComponent,
    AddempComponent,
    ShiftComponent,
    EditshiftComponent,
    AddshiftComponent,
    ViewshiftComponent,
    EmpdashboardComponent,
    ViewempshiftComponent,
    AloginComponent,
    EloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
