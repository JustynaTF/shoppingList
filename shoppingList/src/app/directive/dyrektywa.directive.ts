import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDyrektywa]',
})
export class DyrektywaDirective {
  constructor(private element: ElementRef) {} // Referencja do danego elementu
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'black';
  }
  @HostListener('mouseleave') onMouseLave() {
    this.element.nativeElement.style.color = 'green';
  }
}
