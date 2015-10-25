import '../../components/components';

import template from './app.html!text';
import './app.css!';
import {View, Component, Inject} from '../../core/decorators/decorators';

// start-non-standard
@Component({
  selector: 'app'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard
class AppComponent {
  constructor($log) {
    Object.assign(this, {
      $log
    });
    $log.log('App Container');
  }
}

export default AppComponent;
