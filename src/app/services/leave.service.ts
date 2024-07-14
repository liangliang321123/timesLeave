import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import leave from '../components/models/leave';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  constructor(private http: HttpClient) {}

  public getLeave(): Observable<leave[]> {
    return this.http.get<leave[]>(`${environment.apiHost}/api/Leave/Leave`);
  }

  public postLeave(leaveObj: Partial<leave>): Observable<leave> {
    return this.http.post<leave>(
      `${environment.apiHost}/api/Leave/Leave`,
      leaveObj
    );
  }

  public deleteLeave(id: number) {
    return this.http.delete(`${environment.apiHost}/api/Leave/Leave/${id}`);
  }
}
