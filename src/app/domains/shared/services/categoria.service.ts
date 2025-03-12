import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Categoria } from '@shared/Models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private http = inject(HttpClient);

  constructor() { }

  getCategorias() {
    return this.http.get<Categoria[]>('https://api.escuelajs.co/api/v1/categories')
  }
}
