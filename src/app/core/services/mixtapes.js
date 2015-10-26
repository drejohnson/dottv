import {Service, Inject} from '../decorators/decorators';

const HTTP = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Service({
  serviceName: 'MixtapesService'
})
@Inject('$http', '$log')
// end-non-standard
class MixtapesService {
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    Object.assign(this, {
      apiHost: '/api',
      name: 'Mixtapes Service'
    });
  }

  getAllMixtapes() {
    return HTTP.get(this).get(`${this.apiHost}/audio`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getMixtape(id) {
    return HTTP.get(this).get(`${this.apiHost}/audio/${id}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export default MixtapesService;
