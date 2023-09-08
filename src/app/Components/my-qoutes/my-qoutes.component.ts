import { Component } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Quote } from 'src/app/interfaces/qoute';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-my-qoutes',
  templateUrl: './my-qoutes.component.html',
  styleUrls: ['./my-qoutes.component.scss'],
})
export class MyQoutesComponent {
  myQuotes!: Quote[];

  constructor(private http: MovieApiService) {}

  ngOnInit() {
    this.myQuotes = this.http.userQuotes;
  }

  track(index: number, item: any): any {
    return item ? item.id : null;
  }
}
