import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
  standalone: true,
})
export class NumbersOnlyDirective {
  @HostListener('keypress', ['$event']) onkeypress(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];

    if (
      !allowedKeys.includes(event.key) && // Allow navigation and control keys
      !/^[0-9]$/.test(event.key) // Allow only numeric keys
    ) {
      event.preventDefault(); // Block non-numeric input
    }
  }
}
