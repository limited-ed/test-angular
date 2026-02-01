import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar-component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Input "The"', async () => {
    fixture.nativeElement.querySelector('input').value = 'The';
    fixture.nativeElement.querySelector('input').dispatchEvent(new Event('input'));
    await fixture.whenStable();
    setTimeout(() => {
      var items = Array.from(fixture.nativeElement.querySelectorAll('.dropdown-item'));
      expect(Array.isArray(items)).toBe(true);
      expect(items.length).toBe(3);
    }, 1000);
  });

  it('Input for not found', async () => {
    fixture.nativeElement.querySelector('input').value = 'Hello';
    fixture.nativeElement.querySelector('input').dispatchEvent(new Event('input'));
    await fixture.whenStable();
    setTimeout(() => {
      var items = Array.from(fixture.nativeElement.querySelectorAll('.dropdown-item'));
      expect(Array.isArray(items)).toBe(true);
      expect(items.length).toBe(1);
      expect((items[0] as HTMLElement).textContent).toBe('Нет результатов');
    }, 1000);
  });


});

