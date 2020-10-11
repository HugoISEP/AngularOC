export class AuthService {
  isAuth = false;

  signIn(): void {
    this.isAuth = true;
  }

  signOut(): void {
    this.isAuth = false;
  }
}
