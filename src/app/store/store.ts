import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { ApplicationState, State } from '../models/state';
import { Movie } from '../models/movie';
import { debounce, debounceTime, delay, of } from 'rxjs';
import { computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../services/movie-service';

var initilState: State = {
    movies: [],
    state: 'idle',
    filterString: ''
}

export const Store = signalStore(
    {providedIn: 'root'},
    withState<State>(initilState),
    withMethods((store) => ({
        setMovies(movies: Movie[]) {
            patchState(store, { movies: movies });
        },
        setState(state: ApplicationState) {
            patchState(store, { state: state });
        },
        setFilterString(filterString: string) {
            patchState(store, { filterString: filterString });
        }

    })),
    withComputed(store => ({
        moviesFiltered: computed(() => 
              store.movies().filter(movie => movie.title.toLowerCase().includes(store.filterString().toLowerCase())) ),
    })),
    withHooks({
        onInit(store) {
            const dataArray = Array<Movie>(100);
            store.setState('loading');
            const movieService = inject(MovieService);
            movieService.get().subscribe(
                {
                    next: (data: Movie[]) => {
                        store.setMovies(data);
                        store.setState('success');
                    },
                    error(err: any) {
                        store.setState('error');
                        console.log("Ошибка загрузки", err)
                    },
                }
            )
        },
    })
)