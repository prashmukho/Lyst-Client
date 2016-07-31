import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ResponseService {
  extractData(res: Response) {
    return res.json().data;
  }

  extractToken(res: Response) {
    return res.json().id_token;
  }

  handleError (error: any) {
    let errMsg = error._body ? JSON.parse(error._body).message :
                 ( error.message ? error.message : 
                   ( error.status ? `${error.status} - ${error.statusText}` : 
                     'Server error' ));
    return Observable.throw(errMsg);
  }
}