import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, OpaqueToken } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS, JwtHelper } from 'angular2-jwt';
import { LYST_DI_CONFIG, APP_CONFIG } from './config';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { ResponseService } from './app/response.service';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [ 
  { provide: APP_CONFIG, useValue: LYST_DI_CONFIG },
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  AUTH_PROVIDERS,
  JwtHelper,
  ResponseService
]);
