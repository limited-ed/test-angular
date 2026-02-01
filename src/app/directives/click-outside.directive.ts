import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true // Use standalone if your project uses them
})
export class ClickOutsideDirective {
  @Output() clickOutside: EventEmitter<void> = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: PointerEvent | null): void {
    let eventTarget = event?.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(eventTarget);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}