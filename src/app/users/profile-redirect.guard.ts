import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class ProfileRedirectGuard implements CanActivate {
  constructor(
    private auth: AuthService, 
    private router: Router) {}

  canActivate(
    // Not using but worth knowing about
    next:  ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    let currentUser = this.auth.currentUser;
    if (!currentUser)
      return true;
    this.router.navigate(['/users', currentUser._id]);
    return false;
  }
}
