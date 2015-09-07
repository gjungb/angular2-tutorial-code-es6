import 'zone.js/lib/browser/zone-microtask'
import 'reflect-metadata'
import 'babel-core/polyfill'
import { assert } from 'rtts_assert/rtts_assert'

import { bind} from 'angular2/di'
import { Component, View, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2'
import {FORM_DIRECTIVES} from 'angular2/forms'

import ArticlesComponent from 'articles'
import {CartComponent,CartService} from 'cart';

@Component({
  selector : 'pizza-service',
  bindings : [CartService]
})
@View({
  directives : [FORM_DIRECTIVES, CORE_DIRECTIVES, ArticlesComponent, CartComponent],
  template   : `
  <h1>Angular2 Tutorial von AngularJS.DE</h1>
  <articles></articles>
  <cart></cart>
  `
}) class PizzaService {
  constructor () {
  }
}

bootstrap(PizzaService)
