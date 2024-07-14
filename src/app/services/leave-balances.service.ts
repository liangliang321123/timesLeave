import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import leaveBalances from '../components/models/leaveBalances';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaveBalancesService {
  constructor(private http: HttpClient) {}

  public getLeaveBalances(): Observable<leaveBalances[]> {
    return this.http.get<leaveBalances[]>(
      `${environment.apiHost}/api/Leave/LeaveBalances`
    );
  }
}
