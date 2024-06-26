import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import employee from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  employees: employee[] = [];
  isOpenPopUp: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployee();
  }

  fetchEmployee(): void {
    this.employeeService.getEmployees().subscribe((result: employee[]) => {
      this.employees = result;
      console.log(this.employees);
    });
  }

  handleDeleteEmployee(id: number): void {
    if (window.confirm('Are you sure to delete this employee ') == true) {
      this.employeeService.deleteEmployees(id).subscribe((result: any) => {
        this.fetchEmployee();
      });
    }
  }

  //pop up
  openPopUp(): void {
    this.isOpenPopUp = true;
  }

  closePopUp(): void {
    this.isOpenPopUp = false;
  }

  updateEmployeeList(): void {
    this.fetchEmployee();
    this.closePopUp();
  }
}
