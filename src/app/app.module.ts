import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './service/authService';
import { Routes, RouterModule } from '@angular/router';
import {UserService} from './service/userService';
import { FourOhFourErrorComponent } from './four-oh-four-error/four-oh-four-error.component';
import { AllBooksComponent } from './all-books/all-books.component';
import {BookService} from './service/bookService';

const appRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'all-books', component: AllBooksComponent},
  {path: 'error-404', component: FourOhFourErrorComponent},
  {path: '**', redirectTo: '/error-404'}
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FourOhFourErrorComponent,
    AllBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    UserService,
    BookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
