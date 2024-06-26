import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { LoginService } from '../../services/login.service';
import employee from '../models/employee';
import { UserService } from '../../services/user.service';
// import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  employeeObj?: employee;

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private UserService: UserService
  ) {}

  ngOnInit(): void {}

  onLoginButtonClicked(form: NgForm) {
    this.LoginService.login(form.value.userid, form.value.password).subscribe(
      (res: employee) => {
        this.employeeObj = res;
        this.UserService.setUser(res); // set the user
        console.log(this.employeeObj);
        this.router.navigate(['Main']);
      },
      (error) => {
        console.log('wrong pass dude');
        window.alert('Wrong User ID or password');
      }
    );
  }
}
