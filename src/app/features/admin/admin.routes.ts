import { Routes } from '@angular/router';
import { AdminComponent } from './admin';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'products/add',
        loadComponent: () =>
          import('./products/add-product/add-product').then(
            (m) => m.AddProductComponent
          )
      },
      {
        path: 'products',
        loadComponent: () =>
          import('../products/product-list/product-list').then(
            (m) => m.ProductListComponent
          )
      }
    ]
  }
];