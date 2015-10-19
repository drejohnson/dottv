import template from './blog-list.html!text';
import './blog-list.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@RouteConfig('blog', {
  url: '/blog',
  template: '<blog-list></blog-list>',
  resolve: {
    // Constant Meta
    $title: () => 'Blog Page',
    $description: () => 'Tomorow Pictures TV Blog'
  }
})
@Component({
  selector: 'blog-list'
})
@View({
  template: template
})
@Inject('PostsService', '$log')
// end-non-standard

// Blog-list Controller
class BlogList {
  constructor(PostsService, $log) {
    SERVICE.set(this, PostsService);
    LOG.set(this, $log);
    INIT.set(this, () => {
      SERVICE.get(this).getAllPosts().then(posts => {
        this.posts = posts;
        this.results = posts.results;
        LOG.get(this).log(this.results);
      });
    });
    Object.assign(this, {
      name: 'blog-list',
      activated: false
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

export default BlogList;
