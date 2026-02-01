import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from './store/store';
import { Header } from './components/header/header';
import { ErrorMessage } from './components/error-message/error-message';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ErrorMessage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [Store],
})
export class App {
  protected readonly title = signal('test-angular');

  store = inject(Store);

}
