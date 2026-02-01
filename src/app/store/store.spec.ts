import { TestBed } from '@angular/core/testing';


import { Observable, of } from 'rxjs';
import { movies } from '../services/movies-mock';
import { MovieService } from '../services/movie-service';
import { Store } from './store';
import { Movie } from '../models/movie';

const movieServiseMock = {
    get: () => of(movies)
}

describe('Store test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: MovieService, useValue: movieServiseMock }]
        });

    });

    it('Test service', () => {
        const store = TestBed.inject(Store);
        expect(store.movies().length).toBe(3);
    });

    it('Test service state loaded', () => {
        const store = TestBed.inject(Store);
        expect(store.state()).toBe('success');
    });

    it('Test filter', () => {
        const store = TestBed.inject(Store);
        store.setFilterString('Godfather');
        expect(store.moviesFiltered().length).toBe(1);
        expect(store.moviesFiltered()[0].title).toBe('The Godfather');
    });

});
