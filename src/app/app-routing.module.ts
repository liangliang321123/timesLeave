import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/sidebar/employee/employee.component';
import { LeaveComponent } from './components/sidebar/leave/leave.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeeAddComponent } from './components/sidebar/employee/employee-add/employee-add.component';
import { DepartmentComponent } from './components/sidebar/department/department.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' }, // default
  { path: 'Login', component: LoginComponent },
  {
    path: 'Main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'Employee', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Employee', component: EmployeeComponent },
      { path: 'Leave', component: LeaveComponent },
      { path: 'Department', component: DepartmentComponent },
    ],
  },
  // { path: 'Dashboard', component: DashboardComponent },
  // { path: 'Employee', component: EmployeeComponent },
  // { path: 'Leave', component: LeaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
