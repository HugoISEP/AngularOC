import {User, UserService} from './userService';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  isAuth = false;
  constructor(private userService: UserService) {
  }

  signIn(user: User): boolean {
    const allUser = this.userService.getUser();
    if (allUser.find(u => JSON.stringify(u) === JSON.stringify(user))){
      this.isAuth = true;
      return this.isAuth;
    } else {
      this.isAuth = false;
      return this.isAuth;
    }
  }

  signOut(): void {
    this.isAuth = false;
  }
}
