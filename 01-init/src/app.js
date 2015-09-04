import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';

import { bind} from 'angular2/di';
import { Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector : 'pizza-service'
})
@View({
  template : `
  <h1>Willkommen zum Angular2 Tutorial von AngularJS.DE</h1>
  `
}) class PizzaService {
}

bootstrap(PizzaService);
