import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/api/v1/books";
  constructor(private httpClient: HttpClient) { }
  getBooks(categoryId: number): Observable<Book[]> {
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${categoryId}`;
    if (categoryId === 0)
      return this.httpClient.get<getResponseBooks>(this.baseUrl).pipe(
        map(response => response._embedded.books)
      );
    else
      return this.httpClient.get<getResponseBooks>(searchUrl).pipe(
        map(response => response._embedded.books)
      );
  }
}

interface getResponseBooks {
  _embedded: {
    books: Book[];
  }
}
