import { Component, OnInit } from '@angular/core';
import {BookService, Book} from '../service/bookService';
import {Router} from '@angular/router';
import {AuthService} from '../service/authService';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  allBooks: Book[];
  constructor(private bookService: BookService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isAuth) {
      this.router.navigate(['/auth']);
    }
    this.allBooks = this.bookService.getAllBooks();
  }

  handleClick(book: Book): void {
    this.bookService.editAvailableStatus(book);
  }
  getBookStatus(book: Book): string {
    if (book.available) {
      return 'Available';
    } else {
      return 'Not available';
    }
  }
}
