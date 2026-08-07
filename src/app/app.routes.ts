import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.page').then((type) => type.HomePage),
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/user/templates/user-list/user-list.page').then(
        (type) => type.UserListPage,
      ),
  },
  {
    path: 'adresses',
    loadComponent: () =>
      import('./features/adresse/templates/adresse-list/adresse-list.page').then(
        (type) => type.AdresseListPage,
      ),
  },
];
