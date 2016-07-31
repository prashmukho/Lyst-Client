import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LystService } from './lyst.service'
import { GeolocationService, Position } from './geolocation.service';

@Component({
  template: `
  <h4>Welcome to the Lysts Center</h4>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [LystService, GeolocationService]
})
export class LystsComponent implements OnInit, OnDestroy { 
  private sub: any;

  constructor(private geocoder: GeolocationService) {}

  ngOnInit() {
    this.sub = this.geocoder.geolocate()
                            .subscribe(
                              (pos: Position) => {
                                let { latitude, longitude } = pos.coords;
                                this.geocoder.coords = { latitude, longitude };
                              },
                              err => console.error(err));
  }

  ngOnDestroy() {
    this.geocoder.stopGeolocate();
    this.sub.unsubscribe();
  }
}