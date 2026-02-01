import { Component, computed, inject } from '@angular/core';
import { SearchBarComponent } from "../search-bar-component/search-bar-component";
import { Store } from '../../store/store';
import { SearchItem } from '../../models/search-item';

@Component({
  selector: 'app-header',
  imports: [SearchBarComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  store = inject(Store);

  items = computed(() => 
     this.store.moviesFiltered().map(movie => <SearchItem>{ title: movie.title, routerLink: `/movie/${movie.imdbId}` } ).slice(0,10));

  setSearchString($event: string) {
    this.store.setFilterString($event);
  }

}
