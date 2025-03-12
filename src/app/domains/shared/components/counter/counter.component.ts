import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    // no asincrona
    // ants del render
    // una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }
  ngOnChanges(changes: SimpleChange) {
    // antes y durante el render
    console.log('ngOnchance');
    console.log('-'.repeat(10));
    console.log(changes);
  }
  ngOnInit() {
    // after render
    // una vez
    // asincronas
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration', this.duration)
    console.log('message', this.message)

  }
  ngAfterViewInit() {
    //after render
    // para preguntar si los hijos de este componente ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    // se puede eliminar con un ngIf ya que si no va con la condicion el ellimina el componente
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
  doSomething(){
    console.log('change duration')
  }
}
