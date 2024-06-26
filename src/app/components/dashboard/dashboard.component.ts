import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import employee from '../models/employee';

// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  currentUser: employee | null = null;
  currentDate: Date;
  imagePath: string = 'assets/images/timeslogo.png';

  constructor(private UserService: UserService) {
    // this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.currentUser = this.UserService.getUser();

    console.log('Homepage' + this.currentUser?.employeeID);
  }
}
