import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  baseUrl: string;
  title: string;
}

export const LYST_DI_CONFIG: AppConfig = {
  baseUrl: 'http://localhost:3001',
  title: 'Lyst Client'
};

export let APP_CONFIG = new OpaqueToken('app.config');