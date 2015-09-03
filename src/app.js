import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';

import { bind, Injector } from 'angular2/di';
import { Component, View, Attribute, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2';
import { Router, RouteConfig, LocationStrategy, HashLocationStrategy, ROUTER_BINDINGS, ROUTER_DIRECTIVES } from 'angular2/router';

import OrderComponent from 'order';
import AboutComponent from 'about';


@Component({
  selector: 'hello-app'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: `
    <p class="well">
      <a [router-link]="['/hello']">Start</a>
      |
      <a [router-link]="['/about']">Über</a>
    </p>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/hello', component: OrderComponent, as: 'hello' },
  { path: '/about', component: AboutComponent, as: 'about' }
])
class HelloApp {
}

bootstrap(HelloApp, [
  ROUTER_BINDINGS,
  bind(LocationStrategy).toClass(HashLocationStrategy)
]);
