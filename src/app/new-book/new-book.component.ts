import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../service/bookService';
import {Router} from '@angular/router';
import {AuthService} from '../service/authService';
import {NOTIFICATION_TYPE, NotificationService} from '../service/notificationService';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private router: Router, private authService: AuthService,  private bookService: BookService, private formBuilder: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit(): void {
    const {title, author, description, available} = this.bookForm.value;
    this.bookService.createBook({title, author, description, available});
    this.router.navigate(['/books']);
    this.notificationService.addANotification('Livre créé', NOTIFICATION_TYPE.success);
  }
  initForm(): void {
    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
      description: '',
      available: true,
    });
  }

}
