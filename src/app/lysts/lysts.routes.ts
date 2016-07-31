import { RouterConfig } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LystsComponent } from './lysts.component';
import { LystListComponent } from './lyst-list.component';
import { LystDetailComponent } from './lyst-detail.component';

export const lystsRoutes: RouterConfig = [
  {
    path: 'lysts',
    component: LystsComponent,
    children: [
      { 
        path: '',     
        component: LystListComponent 
      },
      { 
        path: ':id',  
        component: LystDetailComponent 
      }
    ]
  }
];