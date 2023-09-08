import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Quote } from '../interfaces/qoute';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  userQuotes: Quote[] = [];
  id: number = 1;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getAllQoutes(): Observable<any> {
    return this.http
      .get<Quote>('https://dummyjson.com/quotes')
      .pipe(retry(2), catchError(this.handleError));
  }

  saveQuote(quote: string, ath: string) {
    this.userQuotes.push({
      quote: quote,
      author: ath,
      id: this.id,
    });
    this.id++;
  }
}
