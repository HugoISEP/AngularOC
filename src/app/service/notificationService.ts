import {Subject} from 'rxjs';

export enum NOTIFICATION_TYPE  {
  success= 'SUCCESS',
  danger = 'DANGER',
}

export type Notification = {
  text: string,
  type: NOTIFICATION_TYPE
};

export class NotificationService {
  messageSubject = new Subject<Notification>();
  messageType: NOTIFICATION_TYPE;
  private message = {text: '', type: NOTIFICATION_TYPE.success};

  emitMessageSubject(): void {
    this.messageSubject.next(this.message);
  }
  addANotification(text: string, type: NOTIFICATION_TYPE): void {
    this.message.text = text;
    this.message.type = type;
    this.emitMessageSubject();
    setTimeout(() => this.message.text = '', 5000);
    this.emitMessageSubject();
  }
}
