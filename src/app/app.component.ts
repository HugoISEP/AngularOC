import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/authService';
import {NotificationService} from './service/notificationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hasNotificationMessage = '';
  authStatus = false;
  constructor(private authService: AuthService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }


}
