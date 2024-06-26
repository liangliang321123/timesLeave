import { Component, EventEmitter, Output } from '@angular/core';
import { LeaveService } from '../../../../services/leave.service';
import { NgForm } from '@angular/forms';
import leave from '../../../models/leave';

@Component({
  selector: 'app-leave-add',
  templateUrl: './leave-add.component.html',
  styleUrl: './leave-add.component.css',
})
export class LeaveAddComponent {
  @Output() leaveAdded = new EventEmitter<leave[]>();
  @Output() closePopUp = new EventEmitter<void>();

  constructor(private leaveService: LeaveService) {}

  handleAddLeave(form: NgForm) {
    this.leaveService.postLeave(form.value).subscribe((result: leave[]) => {
      this.leaveAdded.emit(result);
      form.reset();
    });
  }

  handleClosePopUp() {
    this.closePopUp.emit();
  }
}
