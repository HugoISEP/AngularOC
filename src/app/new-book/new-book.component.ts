import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Book, BookService} from '../service/bookService';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/authService';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private router: Router, private authService: AuthService,  private bookService: BookService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (!this.authService.isAuth) {
      this.router.navigate(['/books']);
    }
    this.initForm();
  }
  onSubmit(): void {
    const {title, author, description, available} = this.bookForm.value;
    this.bookService.createBook({title, author, description, available});
    this.router.navigate(['/books']);
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
