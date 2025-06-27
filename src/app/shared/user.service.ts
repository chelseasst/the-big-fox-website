import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { handleToken } from '../utilis/token-check';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<{ userName: string } | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    //getting the user from localStorage on page reload
    this.restoreUser(); 
  }
  private restoreUser(): void {
    const userName = localStorage.getItem("userName");
    const userToken = localStorage.getItem("userToken");

    if (userName && userToken) {
      this.userSubject.next({ userName });
    }
  }
  hasUser() {
    const userName = localStorage.getItem("userName");
    const userToken = localStorage.getItem("userToken");

    if (userName && userToken) {
      return { firstName: userName, token: userToken };
    } else {
      return null;
    }
  }
  async isAdmin() {
    const token = await handleToken();
    if (!token) { return false}
    try {
      const response = await fetch(`${environment.apiUrl}/user/check-admin`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` } 
      });
      if (!response.ok) { return false }
      const data = await response.json() // {isAdmin: true/false}
      return data.isAdmin // true/false
    } catch (error) {
      return false
    }
  }
  async login(data: { email: string, password: string }) {
    if (!data) { return 'Missing data' }
    try {
      const response = await fetch(`${environment.apiUrl}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return errorData.message;
      }
      const user = response.status === 200 ? await response.json() : null;
      if (user?.userToken && user?.firstName) {
        this.setUser(user.firstName, user.userToken);
        return user.message;
      } else {
        return "Missing user data!"
      }
    } catch (error) {
      return 'Server error'
    }
  }
  async register(data: { firstName: string, email: string, password: string, rePassword: string }) {
    if (!data) { return 'Missing data' }
    try {
      const response = await fetch(`${environment.apiUrl}/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return errorData.message
      }

      const user = response.status === 201 ? await response.json() : null;
      //const user = { token: 'userTokenHereIAm', firstName: 'Izabel', message: 'Success' };
      if (user?.userToken && user?.firstName) {
        this.setUser(user.firstName, user.userToken);
        return user.message;
      } else {
        return "Missing user data!"
      }
    } catch (error) {
      return 'Server error'
    }
  }
  setUser(userName: string, userToken: string): void {
    if (!userName || !userToken) { return }
    localStorage.setItem("userName", userName);
    localStorage.setItem("userToken", userToken);
    this.userSubject.next({ userName: userName });
  }
  logout() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    this.userSubject.next(null);
  }

}