import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnInit, Renderer2, Input, inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true // Use standalone if your project is structured that way
})
export class ScrollAnimateDirective implements OnInit {
  @Input() animationClass = 'fade-in '; // Default CSS animation class

  platformId = inject(PLATFORM_ID);


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.observeElement();
  }

  private observeElement(): void {

    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            // Optional: unobserve after the first animation run if needed
            // observer.unobserve(this.el.nativeElement); 
          } else {
            // Optional: remove class when scrolling out of view to re-animate on scroll back up
            // this.renderer.removeClass(this.el.nativeElement, this.animationClass);
          }
        });
      }, {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      observer.observe(this.el.nativeElement);
    }
  }
}