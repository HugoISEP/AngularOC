import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './service/authService';
import { Routes, RouterModule } from '@angular/router';
import {UserService} from './service/userService';
import { FourOhFourErrorComponent } from './four-oh-four-error/four-oh-four-error.component';
import { AllBooksComponent } from './all-books/all-books.component';
import {BookService} from './service/bookService';
import { SingleBookComponent } from './single-book/single-book.component';
import { NewBookComponent } from './new-book/new-book.component';
import {NotificationService} from './service/notificationService';
import { NotificationComponent } from './notification/notification.component';
import {AuthGardService} from './service/authGardService';

const appRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'books', canActivate: [AuthGardService], component: AllBooksComponent},
  {path: 'new-book', canActivate: [AuthGardService], component: NewBookComponent},
  {path: 'books/:id', canActivate: [AuthGardService], component: SingleBookComponent},
  {path: 'error-404', component: FourOhFourErrorComponent},
  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  {path: '**', redirectTo: '/error-404'}
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FourOhFourErrorComponent,
    AllBooksComponent,
    SingleBookComponent,
    NewBookComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGardService,
    UserService,
    BookService,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
