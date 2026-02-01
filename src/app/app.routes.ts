import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', loadComponent: () => import('./components/movies-list/movies-list').then(m => m.MoviesList), data: { reuse: true } },
    { path: 'movie/:id', loadComponent: () => import('./components/movie-detail-component/movie-detail-component').then(m => m.MovieDetailComponent) },
    { path: '**', loadComponent: ()=>import('./components/not-found-page/not-found-page').then(c=>c.NotFoundPage)}
];
