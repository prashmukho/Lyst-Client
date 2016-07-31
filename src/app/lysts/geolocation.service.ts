import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

// export interface AddressDatum {
//   results: any[];
//   status: string;
// }

interface Coordinates {
  latitude: number; 
  longitude: number;
}

export interface Position {
  coords: Coordinates;
  timestamp: number;
}

@Injectable()
export class GeolocationService {
  private watchId: number = 0;
  private _coords: Coordinates = null;

  // constructor(private http: Http) {}

  geolocate(geolocationOptions?: any): Observable<Position> {
    return Observable.create((observer: Observer<Position>) => {
      if (!window.navigator.geolocation)
        return observer.error(new Error('Geolocation is not supported by this browser/OS.'));

      this.watchId = window.navigator.geolocation.watchPosition(
        pos => observer.next(pos),
        err => observer.error(err),
        geolocationOptions);
    }).publish().refCount();
  }

  stopGeolocate() {
    window.navigator.geolocation.clearWatch(this.watchId);
    this.watchId = 0;
  }

  get coords(): Coordinates {
    console.log('getting user location', this._coords);
    return this._coords;
  } 

  set coords(pos: Coordinates) {
    console.log('setting user location', this._coords = pos);
  }

  // getAddress(lat: number, lng: number): Observable<AddressDatum> {
  //   return this.http.get(`/api/v1/getAddress?lat=${lat}&lng=${lng}`)
  //     .map(res => res.json().data)
  //     .catch(this._handleError);
  // }

  // getLatLng(address: string): Observable<AddressDatum> {
  //   return this.http.get(`/api/v1/getLatLng?address=${address}`)
  //     .map(res => res.json().data)
  //     .catch(this._handleError);
  // }
}