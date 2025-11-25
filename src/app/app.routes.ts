import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { ProductListComponent } from './features/products/product-list/product-list';
import { ProductDetailComponent } from './features/products/product-detail/product-detail';
import { CartComponent } from './features/cart/cart';

import { AdminDashboardComponent } from './features/admin/dashboard/dashboard';
import { ProductFormComponent } from './features/products/product-form/product-form';
import { OrderListComponent } from './features/orders/order-list/order-list';
import { adminRoutes } from './admin/admin.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },

  { path: 'cart', component: CartComponent },

//  { path: 'admin', component: AdminDashboardComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: 'orders', component: OrderListComponent },
  {
    path: 'admin',
    children: adminRoutes
  },
  {
    path: 'admin',
    children: adminRoutes  // ✅ Mount admin module routing
  },
  {
    path: '',
    loadComponent: () =>
      import('./features/products/product-list/product-list')
        .then(m => m.ProductListComponent)
  }
  
];
