import { Injectable } from '@angular/core';
import employee from '../components/models/employee';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: employee | null = null;

  setUser(user: employee): void {
    this.currentUser = user;
  }

  getUser(): employee | null {
    return this.currentUser;
  }
}
