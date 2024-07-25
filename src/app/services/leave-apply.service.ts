import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import leaveApply from '../components/models/leaveApply';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import leaveDeduct from '../components/models/leaveDeduct';

@Injectable({
  providedIn: 'root',
})
export class LeaveApplyService {
  leaveApplySuccess: EventEmitter<leaveApply> = new EventEmitter();
  constructor(private http: HttpClient) {}

  public postLeaveApply(
    leaveApplyObj: Partial<leaveApply>
  ): Observable<leaveApply> {
    return this.http.post<leaveApply>(
      `${environment.apiHost}/api/Leave/ApplyLeave`,
      leaveApplyObj
    );
  }

  public postLeaveDeduct(
    employeeID: number,
    leaveID: number,
    daysToDeduct: number
  ): Observable<leaveDeduct> {
    return this.http.post<leaveDeduct>(
      `${environment.apiHost}/api/Leave/DeductLeave?employeeID=${employeeID}&leaveID=${leaveID}&daysToDeduct=${daysToDeduct}`,
      {}
    );
  }
}
// leaveDeduct
