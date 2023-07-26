import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';

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
