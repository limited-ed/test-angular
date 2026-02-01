import { Component, computed, effect, inject, input } from '@angular/core';
import { Store } from '../../store/store';
import { Router } from '@angular/router';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { Configuration } from '../../../environment/environment';

@Component({
  selector: 'app-movie-detail-component',
  imports: [NotFoundPage],
  templateUrl: './movie-detail-component.html',
  styleUrl: './movie-detail-component.scss',
})
export class MovieDetailComponent {

  id = input.required<string>();

  store = inject(Store);

  movie = computed(() => this.store.movies().find(m => m.imdbId === this.id()));

  srv = Configuration.apiServer;

  getWidth(value: string): number {
    if (value.includes("%")) {
      return parseInt(value.replace("%", ""));
    }
    else {
      var num = value.split("/").map(n => parseInt(n))[0];
      num = num > 10 ? num : num * 10;
      return num;
    }
  }

  getColor(value: number): string {
    if (value >= 80) {
      return "var(--good-color)";
    }
    else if (value >= 40) {
      return "var(--average-color)";
    }
    else {
      return "var(--bad-color)";
    }
  }

}


