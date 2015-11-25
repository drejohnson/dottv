import {Service, Inject} from '../decorators/decorators';

const HTTP = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Service({
  serviceName: 'AudioTalkService'
})
@Inject('$http', '$log')
// end-non-standard
class AudioTalkService {
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    Object.assign(this, {
      apiHost: '/api',
      name: 'AudioTalk Service'
    });
  }

  getAllAudioTalk() {
    return HTTP.get(this).get(`${this.apiHost}/audio`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getAudioTalk(id) {
    return HTTP.get(this).get(`${this.apiHost}/audio/${id}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export default AudioTalkService;
