import template from './search.html!text';
import './search.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@RouteConfig('search', {
  url: '/search?q',
  template: '<search></search>',
  resolve: {
    // Constant Meta
    $title: () => 'Search',
    $description: () => 'Search description'
  }
})
@Component({
  selector: 'search'
})
@View({
  template: template
})
@Inject('$stateParams', 'SearchService', '$log')
// end-non-standard

// Search Controller
class Search {
  constructor($stateParams, SearchService, $log) {
    Object.assign(this, {
      name: 'search',
      $stateParams: $stateParams,
      query: $stateParams.q,
      activated: false
    });
    SERVICE.set(this, SearchService);
    LOG.set(this, $log);
    INIT.set(this, () => {
      const query = this.query;
      SERVICE.get(this).getSearches(query).then(search => {
        this.search = search;
        this.results = search.results;
        LOG.get(this).log(this.results.type);
      });
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

export default Search;
