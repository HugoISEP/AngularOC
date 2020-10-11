import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authStatus = false;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }


}
