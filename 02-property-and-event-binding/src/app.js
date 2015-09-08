import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector : 'pizza-service'
})
@View({
  template : `
    <input type="text"
      (keyup)="onKeyUp()"
      (input)="color=$event.target.value"
      [style.background-color]="color"/>
  `
}) class PizzaService {
  onKeyUp(){
    console.log('keyup: '+this.color)
  }
}

bootstrap(PizzaService);
