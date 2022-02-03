import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AloginComponent } from './alogin/alogin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EloginComponent } from './elogin/elogin.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { AddempComponent } from './employee/addemp/addemp.component';
import { EditempComponent } from './employee/editemp/editemp.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowempComponent } from './employee/showemp/showemp.component';
import { ViewempshiftComponent } from './employee/viewempshift/viewempshift.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddshiftComponent } from './shift/addshift/addshift.component';
import { EditshiftComponent } from './shift/editshift/editshift.component';
import { ShiftComponent } from './shift/shift.component';
import { ViewshiftComponent } from './shift/viewshift/viewshift.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "register", component: RegisterComponent },
  { path: "admindash", component: DashboardComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "shift", component: ShiftComponent },
  { path: "addemp", component: AddempComponent },
  { path: "viewemp", component: ShowempComponent },
  { path: "editemp/:rid", component: EditempComponent },
  { path: "addshift", component: AddshiftComponent },
  { path: "viewshift", component: ViewshiftComponent },
  { path: "editshift/:sid", component: EditshiftComponent },
  { path: "empdash", component: EmpdashboardComponent },
  { path: "viewempshift", component: ViewempshiftComponent },
  { path: "alog", component: AloginComponent },
  { path: "elog", component: EloginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
