import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail-component';
import { movie, movies } from '../../services/movies-mock';
import { computed, inputBinding, signal } from '@angular/core';
import { Store } from '../../store/store';
import { Movie } from '../../models/movie';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { MovieService } from '../../services/movie-service';


const movieServiseMock = {
  get: () => of(movies)
}

const id = 'tt0111161';
const fields: { [key: string]: string } = {
  movie_title: "title",
  movie_year: "year",
  movie_runtime: "runtime",
  movie_director: "director",
  movie_genre: "genre",
  movie_country: "country",
  movie_awards: "awards",
  movie_plot: "plot"
}


describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailComponent],
      providers: [{ provide: MovieService, useValue: movieServiseMock }, provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent, { bindings: [inputBinding('id', () => id)] });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('test component', () => {
    fixture.whenStable();
    Object.keys(fields).forEach(key => {
      const value = fields[key] as string;
      if (!fixture.nativeElement.querySelector('.' + key)) console.log(key)
      expect(fixture.nativeElement.querySelector('.' + key).textContent).toBe(movies[0][value as keyof Movie])
    });
    var writers = Array.from(fixture.nativeElement.querySelectorAll("#writers")).map(m => (m as HTMLElement).textContent).join(",");
    expect(writers).toBe(movies[0].writer.replace(" ", ""));
    var writers = Array.from(fixture.nativeElement.querySelectorAll("#actors")).map(m => (m as HTMLElement).textContent).join(",");
    expect(writers).toBe(movies[0].actors.replace(" ", ""));
  });
});
