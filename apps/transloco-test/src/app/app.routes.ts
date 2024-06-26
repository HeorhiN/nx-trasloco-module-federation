import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('remote-app/Routes').then((m) => m.remoteRoutes),
  },
];
