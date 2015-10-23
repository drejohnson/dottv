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
    this.openService = (service) => {
      switch (service) {
        case 'twitter':
          this.$window.open('http://twitter.com/share?text=' + this.title, 'twitter-share', 'width=550,height=235');
          break;
        case 'facebook':
          this.$window.open('https://www.facebook.com/sharer/sharer.php', 'facebook-share', 'width=580,height=296');
          break;
        case 'google':
          this.$window.open('https://plus.google.com/share', 'google-plus-share', 'width=490,height=530');
          break;
        // no default
      }
    };

    this.activated = true;
  }
}

export default SocialButtons;
