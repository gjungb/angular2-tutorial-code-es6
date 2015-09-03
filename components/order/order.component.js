import { Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import ArticlesComponent from 'articles';
import {CartComponent,CartService} from 'cart';

@Component({
  selector : 'order',
  bindings : [CartService]
})
@View({
  directives : [ArticlesComponent, CartComponent],
  template   : `<form>
              <input type="text" [value]="search" (input)="search = $event.target.value">
              <p>Du suchst gerade nach: {{search}}</p>
             </form>
             <articles></articles>
             <cart></cart>`
})
export default class Order {
  constructor () {
    this.search = ''
    //setInterval(()=>console.log(this.search),1000)
  }
}