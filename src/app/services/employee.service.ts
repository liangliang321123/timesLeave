import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import employee from '../components/models/employee';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(
      `${environment.apiHost}/api/Leave/Employee`
    );
  }

  public postEmployees(employeeObj: Partial<employee>): Observable<employee[]> {
    return this.http.post<employee[]>(
      `${environment.apiHost}/api/Leave/Employee`,
      employeeObj
    );
  }

  public deleteEmployees(id: number) {
    return this.http.delete(`${environment.apiHost}/api/Leave/Employee/${id}`);
  }
}
