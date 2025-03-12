import { Routes } from '@angular/router';
import { ListComponent } from './domains/productos/pages/list/list.component'
import { AboutComponent } from './domains/info/pages/about/about.component'
import { NotfoundComponent } from './domains/info/notfound/notfound.component';
import { LayoutComponent } from '@shared/components/layout/layout.component'
import { ProductDetailComponent } from './domains/productos/pages/product-detail/product-detail.component'
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/productos/pages/list/list.component').then(m => m.ListComponent)
      },
      {
        path: 'about',
        loadComponent: ()=>import('./domains/info/pages/about/about.component').then(m => m.AboutComponent)
      },
      {
        path: 'product/:id',
        loadComponent:()=>import('./domains/productos/pages/product-detail/product-detail.component').then(m=>m.ProductDetailComponent)
        // component: ProductDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }

];
