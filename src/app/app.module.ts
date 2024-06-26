import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/sidebar/employee/employee.component';
import { LeaveComponent } from './components/sidebar/leave/leave.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeeAddComponent } from './components/sidebar/employee/employee-add/employee-add.component';
import { DepartmentComponent } from './components/sidebar/department/department.component';
import { LeaveAddComponent } from './components/sidebar/leave/leave-add/leave-add.component';

// const appRoute: Routes = [
//   { path: '', redirectTo: 'Login', pathMatch: 'full' }, // default
//   { path: 'Login', component: LoginComponent },
//   {
//     path: 'Main',
//     component: MainComponent,
//     children: [
//       { path: '', redirectTo: 'Employee', pathMatch: 'full' },
//       { path: 'Dashboard', component: DashboardComponent },
//       { path: 'Employee', component: EmployeeComponent },
//       { path: 'Leave', component: LeaveComponent },
//     ],
//   },
//   // { path: 'Dashboard', component: DashboardComponent },
//   // { path: 'Employee', component: EmployeeComponent },
//   // { path: 'Leave', component: LeaveComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    DashboardComponent,
    MainComponent,
    SidebarComponent,
    LeaveComponent,
    EmployeeAddComponent,
    DepartmentComponent,
    LeaveAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
