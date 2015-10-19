import template from './blog-view.html!text';
import './blog-view.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@RouteConfig('blog-view', {
  url: '/blog/:id/:slug',
  template: '<blog-view></blog-view>',
  resolve: {
    // Constant Meta
    viewID: ($stateParams, PostsService) => {
      return PostsService.getPost($stateParams.id);
    },
    $title(viewID) {
      return viewID[0].fragments['blog.title'].blocks[0].text;
    },
    $description(viewID) {
      return viewID[0].fragments['blog.shortlede'].blocks[0].text;
    },
    $metaImg(viewID) {
      return viewID[0].fragments['blog.image'].url;
    },
    $url(viewID) {
      const base = 'http:/tomorrowpictures.tv/blog/';
      const id = viewID[0].id;
      const slug = viewID[0].slug;
      const getUrl = base + id + '/' + slug;
      return getUrl;
    }
  }
})
@Component({
  selector: 'blog-view'
})
@View({
  template: template
})
@Inject('$stateParams', 'PostsService', '$log')
// end-non-standard

// BlogView Controller
class BlogView {
  constructor($stateParams, PostsService, $log) {
    Object.assign(this, {
      name: 'Post View',
      activated: false,
      id: $stateParams.id
    });
    SERVICE.set(this, PostsService);
    LOG.set(this, $log);
    INIT.set(this, () => {
      const id = this.id;
      SERVICE.get(this).getPost(id).then(post => {
        this.post = post[0];
        // LOG.get(this).log(this.video);
        this.title = this.post.fragments['blog.title'].blocks[0].text;
        this.intro = this.post.fragments['blog.shortlede'].blocks[0].text;
        this.poster = this.post.fragments['blog.image'].url;

        this.postHtml = post[1];
        this.content = this.postHtml.html;

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

export default BlogView;
