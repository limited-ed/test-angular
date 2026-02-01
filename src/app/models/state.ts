import { Movie } from "./movie";

export type ApplicationState = 'idle' | 'loading' | 'error' | 'success';

export interface State {
    movies: Movie[]
    state: ApplicationState
    filterString: string
}