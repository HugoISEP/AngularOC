import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  auth = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const email = form.form.value.email;
    const password = form.form.value.password;
  }

}
