import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Book } from './interfaces/book';
import { BookService } from './services/book.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [DialogService, DynamicDialogRef]
})
export class AppComponent implements OnInit {
	books: Book[] = [];
	categories: string[] = [];

	constructor(
		private translate: TranslateService,
		private bookService: BookService
	) {
		translate.addLangs(['es']);
		translate.setDefaultLang('es');
		translate.use('es');
	}

	ngOnInit(): void {
		this.getBooks();
	}

	getBooks() {
		// Obtener todos los libros
		this.bookService.getBooks().subscribe({
			next: (books) => {
				this.books = books;

				// Una vez obtenidos todos los libros vamos a recoger las categorias
				this.getCategories();
			},
			error: (error) => {
				console.log('Error fetching books:', error);
			}
		});
	}

	getCategories() {
		// Obtener todas las categorías de los libros sin repetición
		this.categories = this.books.reduce((result: string[], book: Book) => {
			book.categories.forEach((category) => {
				if (!result.includes(category)) {
					result.push(category);
				}
			});

			return result;
		}, []);

		this.categories.push('All');
		this.categories.sort((a, b) => {
			// Compara las cadenas de forma insensible a mayúsculas y minúsculas (orden alfabético)
			return a.localeCompare(b, undefined, { sensitivity: 'base' });
		});
	}
}
