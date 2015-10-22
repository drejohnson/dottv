import template from './mixtapes.html!text';
import './mixtapes.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const SCE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@RouteConfig('mixtapes', {
  url: '/mixtapes',
  template: '<mixtapes></mixtapes>',
  resolve: {
    // Constant Meta
    $title: () => 'Mixtapes',
    $description: () => 'Latest Tomorrow Pictures TV Mixtapes'
  }
})
@Component({
  selector: 'mixtapes'
})
@View({
  template: template
})
@Inject('MixtapesService', '$sce', '$log')
// end-non-standard

// Mixtapes Controller
class Mixtapes {
  constructor(MixtapesService, $sce, $log) {
    SERVICE.set(this, MixtapesService);
    SCE.set(this, $sce);
    LOG.set(this, $log);
    INIT.set(this, () => {
      SERVICE.get(this).getAllMixtapes().then(mixtapes => {
        this.trustedHtml = (value) => SCE.get(this).trustAsHtml(value);
        this.mixtapes = mixtapes;
        this.results = mixtapes.results;
        this.embed = this.results[0].fragments['audio.audioembed'].value.oembed.html;
        LOG.get(this).log(this.results);
      });
    });
    Object.assign(this, {
      name: 'mixtapes',
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

export default Mixtapes;
