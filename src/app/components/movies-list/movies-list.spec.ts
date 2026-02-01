import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesList } from './movies-list';
import { movies } from '../../services/movies-mock';
import { provideRouter } from '@angular/router';
import { computed, PLATFORM_ID } from '@angular/core';
import { Store } from '../../store/store';
import { routes } from '../../app.routes';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { of } from 'rxjs';
import { MovieService } from '../../services/movie-service';

const movieServiseMock = {
  get: ()=> of(movies)
}

describe('MoviesList', () => {
  let component: MoviesList;
  let fixture: ComponentFixture<MoviesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesList, ScrollAnimateDirective],
      providers: [{ provide: MovieService, useValue: movieServiseMock }, provideRouter(routes), { provide: PLATFORM_ID, useValue: 'server' }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MoviesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  it('items signal test', async() => {
    await fixture.whenStable();
    let items = fixture.componentInstance.items()
    expect(items.length).toBe(3)
  })

  it('cards created', async () => {
    await fixture.whenStable();
    let items = Array.from(fixture.nativeElement.querySelectorAll('app-movie-card'));
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBe(3);
  });
});
