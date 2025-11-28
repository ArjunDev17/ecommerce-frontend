import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  // Auth
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./features/auth/register/register').then(m => m.RegisterComponent)
  },

  // Admin
  {
  path: 'admin',
  loadChildren: () =>
    import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES)
},


  // Products
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/product-list/product-list').then(
        m => m.ProductListComponent
      )
  },

  { path: '**', redirectTo: '' }
];
