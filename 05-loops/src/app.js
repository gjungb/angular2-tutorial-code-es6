import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';

import { bind} from 'angular2/di';
import { Component, View, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/forms';

@Component({
  selector : 'pizza-service'
})
@View({
  directives: [FORM_DIRECTIVES,CORE_DIRECTIVES],
  template : `
  <h1>Angular2 Tutorial von AngularJS.DE</h1>
  <form>
    <input type="text" [(ng-model)]="search">
    <p *ng-if="search">Du suchst gerade nach: {{search}}</p>
  </form>

  <table class="table">
     <tr *ng-for="#article of ['Pizza Margherita', 'Pizza Tonno']">
       <td>{{article}}</td>
     </tr>
   </table>

  <table class="table">
     <tr *ng-for="#article of articles">
       <td>{{article}}</td>
     </tr>
   </table>
  `
}) class PizzaService {
  constructor(){
    this.search = ""

    this.articles = ['Pizza Margherita', 'Pizza Tonno'];
  }
}

bootstrap(PizzaService);
