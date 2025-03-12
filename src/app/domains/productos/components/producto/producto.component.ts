import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/Models/product.model';
import {ReversePipe} from '@shared/pipes/reverse.pipe'
import {TimeAgoPipe} from '@shared/pipes/time-ago.pipe'
import { CommonModule } from '@angular/common';
import {RouterLinkWithHref} from '@angular/router'
@Component({
  selector: 'app-producto',
  standalone:true,
  imports: [CommonModule,TimeAgoPipe,RouterLinkWithHref],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input({ required: true }) product!:Product;

  @Output() addtocart = new EventEmitter();

  addtocartHandler() {
    this.addtocart.emit(this.product)
    console.log(this.product)
  }
  //img='https://picsum.photos/640/640?r=' + Math.random();
}
