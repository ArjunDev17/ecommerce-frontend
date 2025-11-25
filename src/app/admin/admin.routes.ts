import { Routes } from '@angular/router';
import { AdminComponent } from './admin';
import { AddProductComponent } from './products/add-product/add-product';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'products/add',
        component: AddProductComponent
      }
    ]
  }
];
