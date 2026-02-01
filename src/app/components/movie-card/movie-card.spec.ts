import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCard } from './movie-card';
import { inputBinding, PLATFORM_ID } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { movie } from "../../services/movies-mock";
import { provideRouter, } from '@angular/router';
import { routes } from '../../app.routes';


describe('MovieCard', () => {
  let component: MovieCard;
  let fixture: ComponentFixture<MovieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCard, ScrollAnimateDirective],
      providers: [ provideRouter(routes), { provide: PLATFORM_ID, useValue: 'server' }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCard, {bindings: [inputBinding('movie', ()=> movie)]});
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create and render', () => {
    var el = fixture.nativeElement;
    expect(el.querySelector('.card-title').textContent).toContain(movie.title);
    expect(el.querySelector('.card-year').textContent).toContain(movie.year);
    expect(el.querySelector('.card_poster').src).toContain(movie.poster);
  });
});
