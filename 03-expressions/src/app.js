import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';

import { bind} from 'angular2/di';
import { Component, View, bootstrap} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/forms';

@Component({
  selector : 'pizza-service'
})
@View({
  directives: [FORM_DIRECTIVES],
  template : `
  <h1>Angular2 Tutorial von AngularJS.DE</h1>
  <form>
    <input type="text" [(ng-model)]="search">
    <p>Du suchst gerade nach: {{search.toUpperCase() + "!"}}</p>
  </form>

  {{1 + 2 + 3}}
  `
}) class PizzaService {
  constructor(){
    this.search = ""
  }
}

bootstrap(PizzaService);
