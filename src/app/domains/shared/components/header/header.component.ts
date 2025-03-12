import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../Models/product.model';
import { CommonModule } from '@angular/common'
import { CarritoService } from '../../services/carrito.service';
import {RouterLinkWithHref, RouterLinkActive} from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLinkWithHref,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  // @Input({ required: true }) cart: Product[] = [];
  // total = signal(0);

  private cartServices=inject(CarritoService);
  cart=this.cartServices.cart;
  total=this.cartServices.total;

  // ngOnChanges(changes: SimpleChanges) {
  //   const cart = changes['cart'];
  //   if (cart) {
  //     this.total.set(this.calculartotal())
  //   }
  // }
  // calculartotal() {
  //   return this.cart.reduce((total, product) => total + product.price, 0)
  // }

}
