import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})

export class MovieService {

  httpClient=inject(HttpClient);

  public get(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>("http://localhost:3000/movies").pipe(delay(500)); //добавена эмуляция задержки загрузки по сети
  }

}
