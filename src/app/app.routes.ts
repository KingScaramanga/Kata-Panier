import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadComponent: () => import('./core/home/home.component').then((m) => m.HomeComponent)},
  { path: 'product', loadComponent: () => import('./feature/product/product.component').then((m) => m.ProductComponent)},
  { path: 'panier', loadComponent: () => import('./feature/panier/panier.component').then((m) => m.PanierComponent)},
];
