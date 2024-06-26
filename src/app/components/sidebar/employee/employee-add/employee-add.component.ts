import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DepartmentService } from '../../../../services/department.service';
import department from '../../../models/department';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../../../services/employee.service';
import employee from '../../../models/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
})
export class EmployeeAddComponent implements OnInit {
  @Output() employeeAdded = new EventEmitter<employee[]>();
  @Output() closePopUp = new EventEmitter<void>();

  defaultRole = 'user';
  departments: department[] = [];
  defaultDepartmentID?: number;

  constructor(
    private departmentService: DepartmentService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.fetchDepartment();
  }

  fetchDepartment(): void {
    this.departmentService.getDepartment().subscribe((result: department[]) => {
      this.departments = result;
      if (this.departments.length > 0) {
        this.defaultDepartmentID = this.departments[0].departmentID;
      }
    });
  }

  //add Employee
  handleAddEmployee(form: NgForm) {
    // const newEmployee: Partial<employee> = {
    //   loginUsername: form.value.loginUsername,
    //   password: form.value.password,
    //   firstName: form.value.firstName,
    //   lastName: form.value.lastName,
    //   email: form.value.email,
    //   role: form.value.role,
    //   departmentID: form.value.departmentID,
    //   joinDate: form.value.joinDate,
    // };
    this.employeeService
      .postEmployees(form.value)
      .subscribe((result: employee[]) => {
        this.employeeAdded.emit(result);
        console.log(form.value);
        form.reset();
      });
  }

  handleClosePopUp() {
    this.closePopUp.emit();
  }
}
