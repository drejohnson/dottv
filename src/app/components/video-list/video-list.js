import template from './video-list.html!text';
import './video-list.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Component({
  selector: 'video-list'
})
@View({
  template: template
})
@Inject('VideosService', '$log')
// end-non-standard

// Videolist Controller
class VideoList {
  constructor(VideosService, $log) {
    SERVICE.set(this, VideosService);
    LOG.set(this, $log);
    INIT.set(this, () => {
      SERVICE.get(this).getAllVideos().then(videos => {
        this.videos = videos;
        this.results = videos.results;
        // LOG.get(this).log(this.results);
      });
    });
    Object.assign(this, {
      name: 'videolist',
      activated: false
    });
    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {

    // fetch data

    INIT.get(this)();

    this.activated = true;
  }
}

export default VideoList;
