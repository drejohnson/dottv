import template from './social-buttons.html!text';
import './social-buttons.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@Component({
  selector: 'social-buttons'
})
@View({
  template: template,
  scope: true,
  bindToController: {
    title: '=',
    intro: '=',
    poster: '=',
    url: '='
  },
})
@Inject('$window', '$log')
// end-non-standard

// Social-buttons Controller
class SocialButtons {
  constructor($window, $log) {
    Object.assign(this, {
      $log,
      $window,
      name: 'social-buttons',
      activated: false
    });
    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {

    this.activated = true;
  }
}

export default SocialButtons;
