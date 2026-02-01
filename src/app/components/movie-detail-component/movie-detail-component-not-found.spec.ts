import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail-component';
import { MovieService } from '../../services/movie-service';
import  { movies } from '../../services/movies-mock';
import { inputBinding } from '@angular/core';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';


const movieServiseMock = {
  get: ()=> of(movies)
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

    fixture = TestBed.createComponent(MovieDetailComponent, {bindings: [inputBinding('id', ()=> 'no111111')]});
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('test for non exists film', () => {
    var el=fixture.nativeElement.querySelector('#notfound');
    expect(component).toBeTruthy();
    var notfound =fixture.nativeElement.querySelector('h2');
    expect(notfound.textContent).toContain('Упс, ничего не найдено');
  });
});
