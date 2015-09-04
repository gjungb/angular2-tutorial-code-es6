import { Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector   : 'price',
  properties : ['value']
})
@View({
  directives : [CORE_DIRECTIVES],
  template   : `<span *ng-if="value === '0'">kostenlos</span>
            <span *ng-if="value !== '0'">{{value}}</span>`
})
export default class Price {
  value;
}