import { Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {CartService as Cart} from 'cart';
import PriceComponent from 'price';

@Component({
  selector: 'articles'
})
@View({
  directives : [CORE_DIRECTIVES, PriceComponent],
  template   : ` <table class="table">
                <tr *ng-for="#article of articles">
                  <td>{{article.id}}</td>
                  <td>{{article.name}}</td>
                  <td><price value="{{article.price}}"></price></td>
                  <td><a href="#" class="btn btn-default btn-sm" (click)="cart.addArticle(article)">Hinzufügen</a></td>
                </tr>
              </table>`
})
export default class Articles {
  constructor(cart: Cart) {
    this.cart = cart;
    this.articles = [
      {"id": "1", "name": "Pizza Vegetaria", "price": 5 },
      {"id": "2", "name": "Pizza Salami",    "price": 5.5 },
      {"id": "3", "name": "Pizza Thunfisch", "price": 6 },
      {"id": "4", "name": "Aktueller Flyer", "price": 0 }
    ]
  }
}