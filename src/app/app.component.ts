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
		// const jsonObject = this.fetchJsonFile('../assets/json/books.json');
	}

	getBooks() {
		this.bookService.getBooks().subscribe({
			next: (books) => {
				this.books = books;
			},
			error: (error) => {
				console.log('Error fetching books:', error);
			}
		});
	}
}
