import {Service, Inject} from '../decorators/decorators';

const HTTP = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Service({
  serviceName: 'PostsService'
})
@Inject('$http', '$log')
// end-non-standard
class PostsService {
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    Object.assign(this, {
      apiHost: '/api',
      name: 'Posts Service'
    });
  }

  getAllPosts() {
    return HTTP.get(this).get(`${this.apiHost}/posts`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getPost(id) {
    return HTTP.get(this).get(`${this.apiHost}/posts/${id}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export default PostsService;
