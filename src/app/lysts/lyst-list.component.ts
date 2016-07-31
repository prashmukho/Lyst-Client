import { Component, OnInit } from '@angular/core';
import { Lyst, LystService } from './lyst.service';
import { ResponseService } from '../response.service';

@Component({
  template: require('./lyst-list.component.html')
})
export class LystListComponent implements OnInit {
  lysts: Lyst[] = [];

  constructor(
    private lystService: LystService,
    private helper: ResponseService) {}

  ngOnInit() {
    this.lystService.getLysts()
                    .subscribe(
                      lysts => this.lysts = lysts,
                      error => console.error(error));
  }
}