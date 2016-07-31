import { provideRouter, RouterConfig } from '@angular/router';
import { usersRoutes, MY_AUTH_PROVIDERS } from './users/users.routes';
import { lystsRoutes } from './lysts/lysts.routes';

export const routes: RouterConfig = [
  // default route
  {
    path: '',
    redirectTo: '/lysts',
    pathMatch: 'full'
  },
  ...usersRoutes,
  ...lystsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  MY_AUTH_PROVIDERS
];
