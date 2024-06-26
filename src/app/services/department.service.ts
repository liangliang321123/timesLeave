import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import department from '../components/models/department';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  public getDepartment(): Observable<department[]> {
    return this.http.get<department[]>(
      `${environment.apiHost}/api/Leave/Department`
    );
  }
}
