import { Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import Cart from './cart.service';

@Component({
  selector : 'cart'
})
@View({
  directives : [CORE_DIRECTIVES],
  template   : ` <div>
                <div *ng-if="cart.getItems().length === 0" class="alert alert-info">Ihr Warenkorb ist noch leer.</div>
                <table *ng-if="cart.getItems().length > 0" class="table">
                  <tr *ng-for="#item of cart.getItems()" class="cart-item">
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                  </tr>
                  <tr>
                    <td>{{cart.getItems().length}} Artikel</td>
                    <td>{{cart.sum()}}</td>
                  </tr>
                </table>
              </div>`
})
export default class CartComponent {
  constructor (cart:Cart) {
    this.cart = cart;
  }
}