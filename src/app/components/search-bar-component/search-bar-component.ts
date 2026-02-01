import { AfterViewInit, Component, Host, HostListener, input, OnInit, output, signal, Signal, viewChild, ViewChild } from '@angular/core';
import { SearchItem } from '../../models/search-item';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-search-bar-component',
  imports: [RouterLink,ReactiveFormsModule, ClickOutsideDirective],
  templateUrl: './search-bar-component.html',
  styleUrl: './search-bar-component.scss',
})
export class SearchBarComponent implements OnInit {

  showDropdown = signal<boolean>(false);

  items = input<SearchItem[]>();

  searchString = output<string>();

  searchControl = new FormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((value) => {
      this.searchString.emit(value || '');
    })
  }

  

}
