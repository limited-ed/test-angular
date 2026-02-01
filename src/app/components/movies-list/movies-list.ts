import { Component, computed, inject } from '@angular/core';
import { Store } from '../../store/store';
import { Movie } from '../../models/movie';
import { MovieCard } from '../movie-card/movie-card';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';


@Component({
  selector: 'app-movies-list',
  imports: [MovieCard, LoadingSpinner],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss',
})
export class MoviesList {

  store = inject(Store);

  items = computed(() => this.store.movies())


  
}
