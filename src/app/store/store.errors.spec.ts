import { TestBed } from '@angular/core/testing';


import { throwError } from 'rxjs';
import { MovieService } from '../services/movie-service';
import { Store } from './store';

const movieServiseMock = {
  get: () => throwError(() => new Error('Error loading'))
}

describe('Store test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: MovieService, useValue: movieServiseMock }]
        });

    });

    it('Test service error state', () => {
        const store = TestBed.inject(Store);
        expect(store.state()).toBe('error');
    });
    
});
