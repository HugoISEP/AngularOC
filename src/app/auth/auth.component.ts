import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../service/authService';
import {User} from '../service/userService';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const user: User = {email: form.form.value.email, password: form.form.value.password};
    this.authStatus = this.authService.signIn(user);
  }

  disconnect(): void {
    this.authService.signOut();
    this.authStatus = false;
  }

}
