import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import { AppConfig, APP_CONFIG } from '../../config';
import { ResponseService } from '../response.service';

// read
export interface User {
  _id: string;
  username: string;
  fullname: string;
  role: string;
}
// create or update
export interface UserData {
  username: string;
  password: string;
  fullname: string;
  role?: string; // default is 'user'
}

@Injectable()
export class UserService {
  private usersUrl = this.config.baseUrl + '/users';

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: Http,
    private authHttp: AuthHttp,
    private helper: ResponseService) {}

  getUser(id: string): Observable<User> {
    return this.authHttp.get(this.usersUrl + `/${id}`)
                        .map(this.helper.extractData)
                        .catch(this.helper.handleError);
  }

  addUser(userData: any): Observable<string> {
    let body = JSON.stringify(userData);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.usersUrl, body, options)
                    .map(this.helper.extractToken)
                    .catch(this.helper.handleError);
  }
}