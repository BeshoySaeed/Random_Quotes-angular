import { Component } from '@angular/core';
import { Quote } from 'src/app/interfaces/qoute';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  quotes: Quote[] = [];
  constructor(private http: MovieApiService) {}
  Random: string = 'no one lives forever';
  author: string = 'Bishoy Saeed';
  alertCondition: boolean = false;
  // Rqoute: string = this.qoutes[0].quote;
  // Rauth: string = this.qoutes[0].author;

  ngOnInit() {
    this.http
      .getAllQoutes()
      .subscribe((qoutes) => (this.quotes = qoutes.quotes));
  }

  prev() {
    this.Random =
      this.quotes[Math.floor(Math.random() * this.quotes.length)].quote;

    this.author =
      this.quotes[Math.floor(Math.random() * this.quotes.length)].author;

    this.alertCondition = false;
  }

  save(quote: string, auth: string) {
    if (localStorage.getItem('userId')) {
      this.http.saveQuote(quote, auth);
      console.log(this.http.userQuotes);
      this.alertCondition = true;
    } else {
      alert('please sign in first');
    }
  }
}
