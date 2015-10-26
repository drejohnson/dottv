import {Service, Inject} from '../decorators/decorators';

const HTTP = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Service({
  serviceName: 'SearchService'
})
@Inject('$http', '$log')
// end-non-standard
class SearchService {
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    Object.assign(this, {
      apiHost: '/api',
      name: 'Search Service'
    });
  }

  getSearches(query) {
    return HTTP.get(this).get(`${this.apiHost}/search/${query}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export default SearchService;
