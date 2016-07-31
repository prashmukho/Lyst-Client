import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  template: `
  <h4>Welcome to the Users Center</h4>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent { }