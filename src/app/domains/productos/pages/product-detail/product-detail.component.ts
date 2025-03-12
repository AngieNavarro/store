import { CarritoService } from './../../../shared/services/carrito.service';
import { Product } from '@shared/Models/product.model';
import { ProductoService } from '@shared/services/producto.service';
import { Component, inject, Input, signal } from '@angular/core';
import { producerAccessed } from '@angular/core/primitives/signals';
import { CommonModule} from '@angular/common'


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() id?: string;
  private ProductoService = inject(ProductoService);
  Product=signal<Product| null>(null);
  Cover=signal('')
  private CarritoService= inject(CarritoService);


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.id) {
      this.ProductoService.getOneProduct(this.id).subscribe({
        next: (prod) => {
          this.Product.set(prod)
          if(prod.images.length>0){
            this.Cover.set(prod.images[0])
          }
        }
      })
    }
  }
  changeCover(newImage:string){
    this.Cover.set(newImage);
  }
  addtocart(){
    const product=this.Product();
    if(product){
      this.CarritoService.addToCarrito(product);
    }
  }
}
