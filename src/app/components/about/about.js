import template from './about.html!text';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@RouteConfig('about', {
  url: '/about-area51',
  template: '<about></about>',
  resolve: {
    // Constant Meta
    $title: () => 'About Area51',
    $description: () => 'Mainly for testing features'
  }
})
@Component({
  selector: 'about'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// About Controller
class About {
  constructor($log) {
    LOG.set(this, $log);
    Object.assign(this, {
      name: 'about area 51',
      activated: false
    });
    INIT.set(this, () => {

    });
    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {
    INIT.get(this)();
    this.activated = true;
  }
}

export default About;
