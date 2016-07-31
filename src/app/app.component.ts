import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './users/user.service';
import '../../public/css/styles.scss';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  directives: [ROUTER_DIRECTIVES],
  providers: [UserService]
})
export class AppComponent { 
  constructor(
    private router: Router,
    private auth: AuthService) {}

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }

  goToProfile() {
    // console.log(this.auth.currentUser);
    this.router.navigate(['/users', this.auth.currentUser._id]);
  }
}
