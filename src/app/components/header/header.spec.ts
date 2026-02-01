import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { MovieService } from '../../services/movie-service';
import { mockMovieService, movies } from '../../services/movies-mock';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { computed, signal } from '@angular/core';
import { Store } from '../../store/store';
import { routes } from '../../app.routes';


const storeMock = {
  filterString: signal(''),
  moviesFiltered: computed(() => movies),
  state: computed(() => 'success'),
  setFilterString: (str: string) =>  {  }
}

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [{ provide: Store, useValue: storeMock },  provideRouter(routes)]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

