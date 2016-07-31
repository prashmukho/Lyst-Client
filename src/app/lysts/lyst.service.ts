import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import { APP_CONFIG, AppConfig } from '../../config';
import { ResponseService } from '../response.service';

export class Lyst {
  _id: string;
  _creator: string;
  name: string;
  popularity: number;
  entryCount: number;
  avgRating: number;
}

export interface LystData {
  name: string;
}

@Injectable()
export class LystService {
  private publicLystsUrl = this.config.baseUrl + '/lysts/search';

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: Http,
    private helper: ResponseService) {}

  getLysts(filter?: any): Observable<Lyst[]> {
    return this.http.get(this.publicLystsUrl)
                    .map(this.helper.extractData)
                    .catch(this.helper.handleError);
  }

  getLyst(id: string): Observable<Lyst> {
    return this.http.get(this.publicLystsUrl + `/${id}`)
                    .map(this.helper.extractData)
                    .catch(this.helper.handleError);
  }
}