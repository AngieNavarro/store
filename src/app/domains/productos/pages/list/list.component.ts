import { routes } from './../../../../app.routes';
import { Categoria } from './../../../shared/Models/category.model';
import { CategoriaService } from './../../../shared/services/categoria.service';
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductoComponent } from '../../components/producto/producto.component'; './../../components/producto/producto.component';
import { Product } from '@shared/Models/product.model'
import { HeaderComponent } from '@shared/components/header/header.component'
import { CarritoService } from '@shared/services/carrito.service';
import { ProductoService } from '@shared/services/producto.service';
import {RouterLinkWithHref} from '@angular/router';


@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductoComponent,RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  producto = signal<Product[]>([]);
  categoria = signal<Categoria[]>([]);
  // carrito = signal<Product[]>([]);
  private cartServices = inject(CarritoService);
  private productServices = inject(ProductoService);
  private CategoriaService = inject(CategoriaService);
  @Input() category_id?:string;

  ngOnInit() {
    this.getCategorias();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getProductos()
  }
  addToCart(product: Product) {
    this.cartServices.addToCarrito(product);
  }
  private getProductos() {
    this.productServices.getProducts(this.category_id).subscribe({
      next: (product) => {
        this.producto.set(product);
      },
      error: () => {

      }
    })
  }
  private getCategorias() {
    this.CategoriaService.getCategorias().subscribe({
      next: (categ) => {
        this.categoria.set(categ);
      },
      error: () => {

      }
    })
  }
}
