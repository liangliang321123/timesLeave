import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../services/leave.service';
import leave from '../../models/leave';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.css',
})
export class LeaveComponent implements OnInit {
  leaves: leave[] = [];
  isOpenPopUp: boolean = false;

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.fetchLeaves();
  }

  fetchLeaves(): void {
    this.leaveService.getLeave().subscribe((result: leave[]) => {
      this.leaves = result;
    });
  }

  handleDeleteLeave(id: number): void {
    if (window.confirm('Are you sure to delete this Leave ') == true) {
      this.leaveService.deleteLeave(id).subscribe((result: any) => {
        this.fetchLeaves();
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

  updateLeaveList(): void {
    this.fetchLeaves();
    this.closePopUp();
  }
}
