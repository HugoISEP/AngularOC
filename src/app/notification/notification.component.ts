import { Component, OnInit } from '@angular/core';
import {Notification, NotificationService} from '../service/notificationService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  message: Notification;
  messageSubscription: Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.messageSubscription = this.notificationService.messageSubject.subscribe(
      (message: Notification ) => {
        this.message = message;
      }
    );
    this.notificationService.emitMessageSubject();
  }

  onClose(): void {
    this.message.text = '';
  }

}
