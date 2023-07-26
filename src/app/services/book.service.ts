import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
	providedIn: 'root'
})
export class BookService {
	private booksUrl = '../assets/json/books.json';

	constructor(private http: HttpClient) {}

	getBooks(): Observable<Book[]> {
		return this.http.get<Book[]>(this.booksUrl);
	}

	
}
