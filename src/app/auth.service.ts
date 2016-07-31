import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { AppConfig, APP_CONFIG } from '../config';
import { ResponseService } from './response.service';
import { User } from './users/user.service';

@Injectable()
export class AuthService {
  private newSessionUrl: string = this.config.baseUrl + '/sessions/create';

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: Http,
    private jwtHelper: JwtHelper,
    private helper: ResponseService) {}

  get loggedIn(): boolean {
    try {
      return tokenNotExpired();
    } catch (e) {
      console.error(e.message);
      return false;
    } 
  }

  get currentUser(): User {
    try {
      let token = localStorage.getItem('id_token');
      return tokenNotExpired() ? <User>this.jwtHelper.decodeToken(token) : null;
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }

  login(username: string, password: string): Observable<string> {
    let body = JSON.stringify({ username, password }),
        headers = new Headers({ 'Content-Type': 'application/json' }),
        options = new RequestOptions({ headers: headers });

    return this.http.post(this.newSessionUrl, body, options)
                    .map(this.helper.extractToken)
                    .catch(this.helper.handleError);
  }
}