import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { AuthService } from '../auth.service';
import { UserData, UserService } from './user.service';

@Component({
  template: require('./login.component.html')
})
export class LoginComponent { 
  model: UserData = {
    username: 'youremail@example.com',
    password: 'yourpassword',
    fullname: 'full name'
  };

  action: string = 'signIn';

  constructor(
    private router: Router,
    private auth: AuthService,
    private userService: UserService) {}

  submitCredentials(formWrapper: any) {
    (this.action === 'signIn' ? 
      this.auth.login(this.model.username, this.model.password) :
      this.userService.addUser(this.model)).subscribe(
        token => {
          localStorage.setItem('id_token', token);
          this.router.navigate(['/lysts']);
        },
        error => console.error(error));
  }
}