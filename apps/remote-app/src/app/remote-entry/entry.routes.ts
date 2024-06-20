import { Route } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';

export const loader = ['en', 'es'].reduce((acc: any, lang) => {
  acc[lang] = () => import(`../../assets/i18n/remote/${lang}.json`);
  return acc;
}, {});

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./entry.component').then((c) => c.RemoteEntryComponent),
    providers: [
      provideTranslocoScope({
        scope: 'remote',
        loader,
      }),
    ],
  },
];
