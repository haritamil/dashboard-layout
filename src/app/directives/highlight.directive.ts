import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private ref: ElementRef) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('aqua');
  }

  private highlight(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;
  }
}
