import { Directive, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {
  elemet = inject(ElementRef);
  constructor() { }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.elemet.nativeElement.style.backgroundColor="red";
  }

}
