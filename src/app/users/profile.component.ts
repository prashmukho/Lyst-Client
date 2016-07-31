import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserService } from './user.service';

@Component({
  template: 'Profile'
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id: string = params['id'];
      id && this.userService.getUser(id).subscribe(
        user => this.user = user,
        error => console.error(error));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}