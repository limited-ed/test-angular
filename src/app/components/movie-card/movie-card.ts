import { Component, inject, input } from '@angular/core';
import { Movie } from '../../models/movie';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { Router, RouterLink } from '@angular/router';
import { Configuration } from '../../../environment/environment';


@Component({
  selector: 'app-movie-card',
  imports: [ScrollAnimateDirective, RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {

  movie = input.required<Movie>();

  router = inject(Router);

  srv = Configuration.apiServer;
}
