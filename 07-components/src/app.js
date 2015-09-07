import 'zone.js/lib/browser/zone-microtask'
import 'reflect-metadata'
import 'babel-core/polyfill'
import { assert } from 'rtts_assert/rtts_assert'

import { bind} from 'angular2/di'
import { Component, View, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2'
import {FORM_DIRECTIVES} from 'angular2/forms'

import ArticlesComponent from 'articles'

@Component({
  selector : 'pizza-service'
})
@View({
  directives : [FORM_DIRECTIVES, CORE_DIRECTIVES, ArticlesComponent],
  template   : `
  <h1>Angular2 Tutorial von AngularJS.DE</h1>
  <articles></articles>
  `
}) class PizzaService {
  constructor () {
  }
}

bootstrap(PizzaService)
