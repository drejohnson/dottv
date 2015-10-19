import template from './search-input.html!text';
import './search-input.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Component({
  selector: 'search-input'
})
@View({
  template: template,
  link(scope, element, attrs) {
    element.bind('keydown', (event) => {
      if (event.keyCode === 13) {
        if (scope.query !== null) {
          scope.$location['path']('/search?q=' + scope.query);
          // console.log(scope.vm.$location['path']('/search/' + scope.query));
        }
      }
    });
  }
})
@Inject('$location', '$stateParams', '$log')
// end-non-standard

// SearchInput Controller
class SearchInput {
  constructor($location, $stateParams, $log) {
    Object.assign(this, {
      $location: $location,
      $log: $log,
      $stateParams: $stateParams,
      query: $stateParams.query,
      name: 'search-input',
      activated: false
    });
    LOG.set(this, $log);
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

export default SearchInput;
