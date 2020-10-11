export type User = {
  email: string;
  password: string;
};

export class UserService {
  users: User[] = [
    {email: 'h@gmail.com', password: 'test'},
    {email: 'jchemillier@gmail.com', password: 'test2'},
  ];
  getUser(): User[] {
    return this.users;
  }
}
