import template from './related.html!text';
import './related.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const STATEPARAMS = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Component({
  selector: 'related'
})
@View({
  template: template
})
@Inject('VideosService', '$stateParams', '$log')
// end-non-standard

// Related Controller
class Related {
  constructor(VideosService, $stateParams, $log) {
    SERVICE.set(this, VideosService);
    STATEPARAMS.set(this, $stateParams);
    LOG.set(this, $log);
    INIT.set(this, () => {
      SERVICE.get(this).getRelated(STATEPARAMS.get(this).id).then(videos => {
        this.videos = videos;
        // this.results = videos.results;
        // this.type = this.results.map('results.type');
        this.results = videos.results.filter((x) => x.type === 'video');
        // this.type = this.results.map((x) => x.type)
        // LOG.get(this).log(this.result);
      });
    });
    Object.assign(this, {
      name: 'related',
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

export default Related;
