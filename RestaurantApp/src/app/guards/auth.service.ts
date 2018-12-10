import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  private isLoggedIn: boolean = false;
  constructor() { }


  loggin(email: string, password: string): boolean {
    if (email === 'erick@gmail.com' && password === '123') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  logout(): boolean {
    return this.isLoggedIn = false;
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }
}
