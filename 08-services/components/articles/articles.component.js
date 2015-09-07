import { Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/forms'

import {CartService as Cart} from 'cart';
import PriceComponent from 'price';


@Component({
  selector : 'articles'
})
@View({
  directives : [FORM_DIRECTIVES, CORE_DIRECTIVES, PriceComponent],
  template   : `<form>
                  <input type="text" [(ng-model)]="search">
                  <p *ng-if="search">Du suchst gerade nach: {{search}}</p>
                </form>

                <table class="table">
                   <tr *ng-for="#article of getFilteredArticles(search)">
                     <td>{{article.name | uppercase}}</td>
                     <td><price value="{{article.price}}"></price></td>
                     <td><a href="#" class="btn btn-default btn-sm" (click)="cart.addArticle(article)">Hinzufügen</a></td>
                   </tr>
                 </table>`
})
export default class Articles {
  constructor(cart: Cart) {
    this.cart = cart;
    this.search = ''
    this.articles = [{name:'Pizza Margherita', price: 100.99}, {name:'Pizza Tonno', price: 0.0}]
  }

  getFilteredArticles (searchValue) {
    return this.articles.filter((article) => article.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
  }
}