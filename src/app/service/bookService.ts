type BookForm = {
  author: string;
  title: string;
  description: string;
  available: boolean;
};

export type Book = BookForm & {
  id: number;
};

export class BookService {
  allBooks: Book[] = [
    {id: 1, author: 'Victor Hugo', title: 'Les Misérables', description: 'Dans ce roman emblématique de la littérature française qui décrit la vie de pauvres gens dans Paris et la France provinciale du xixe siècle, l\'auteur s\'attache plus particulièrement au destin du bagnard Jean Valjean.', available: true},
    {id: 2, author: 'Guy de Maupassant', title: 'Bel-Ami', description: 'Le roman retrace l’ascension sociale de Georges Duroy (ou Georges Du Roy de Cantel), homme ambitieux et séducteur sans scrupules (arriviste et opportuniste), employé au bureau des chemins de fer du Nord, parvenu au sommet de la pyramide sociale parisienne grâce à ses maîtresses et à la collusion entre la finance, la presse et la politique.', available: true},
    {id: 3, author: 'Eugène Ionesco', title: 'Rhinocéros', description: 'Œuvre emblématique du théâtre de l\'absurde au même titre que La Cantatrice chauve, la pièce dépeint une épidémie imaginaire de « rhinocérite », maladie qui effraie tous les habitants d\'une ville et les transforme bientôt en rhinocéros. Métaphore de la montée des totalitarismes à l\'aube de la Seconde Guerre mondiale, elle aborde les thèmes du conformisme et de la résistance au pouvoir politique, a priori illégitime.', available: true},
  ];
  getAllBooks(): Book[] {
    return this.allBooks;
  }
  getBookById(id: number): Book {
    return this.allBooks.find(b => b.id === id);
  }
  editABook(book: Book): void {
    this.allBooks = this.allBooks.filter(b => b.id !== book.id);
    this.allBooks.push(book);
  }
  editAvailableStatus(book: Book): void {
    this.allBooks.find(b => b.id === book.id).available = !book.available;
  }
  createBook(book: BookForm): void {
    const newId = Math.max(...this.allBooks.map(b => b.id)) + 1;
    this.allBooks.push({id : newId, ...book});
  }
}
