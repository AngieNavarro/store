import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterComponent} from './../../../shared/components/counter/counter.component';
import {WaveAudioComponent} from './../../../info/components/wave-audio/wave-audio.component';
import {ResaltarDirective} from '@shared/directives/resaltar.directive'
import {HeaderComponent} from '@shared/components/header/header.component'
@Component({
  selector: 'app-about',
  imports: [CommonModule,WaveAudioComponent,ResaltarDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
duration =signal(1000);
mesagge=signal('Hola');

changeduration(event:Event){
  const input=event.target as HTMLInputElement;
  this.duration.set(input.valueAsNumber);
}
changemesagge(event:Event){
  const input=event.target as HTMLInputElement;
  this.mesagge.set(input.value);
}
}
