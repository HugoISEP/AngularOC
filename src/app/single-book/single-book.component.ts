import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book, BookService} from '../service/bookService';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NOTIFICATION_TYPE, NotificationService} from '../service/notificationService';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  bookForm: FormGroup;
  book: Book;
  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService, private formBuilder: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.book = this.bookService.getBookById(+this.route.snapshot.paramMap.get('id'));
    this.initForm();
  }
  onSubmit(): void {
    const {title, author, description, available} = this.bookForm.value;
    const editedBook: Book = {id: this.book.id, title, author, description, available};
    this.bookService.editABook(editedBook);
    this.router.navigate(['/books']);
    this.notificationService.addANotification('Livre modifié', NOTIFICATION_TYPE.success);
  }
  deleteABook(): void{
    this.bookService.deleteABook(+this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['/books']);
    this.notificationService.addANotification('Livre supprimé', NOTIFICATION_TYPE.danger);
  }
  initForm(): void {
    this.bookForm = this.formBuilder.group({
      title: this.book.title,
      author: this.book.author,
      description: this.book.description,
      available: this.book.available,
    });
  }

}
