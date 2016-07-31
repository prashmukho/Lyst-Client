import { RouterConfig } from '@angular/router';
import { ProfileRedirectGuard } from './profile-redirect.guard';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

export const usersRoutes: RouterConfig = [
  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: [ProfileRedirectGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { //TODO: AdminGuard; list temporarily unavailable
        path: '', 
        component: ProfileComponent 
      },
      { 
        path: ':id',  
        component: ProfileComponent 
      }
    ]
  }
];

export const MY_AUTH_PROVIDERS = [AuthService, AuthGuard, ProfileRedirectGuard];