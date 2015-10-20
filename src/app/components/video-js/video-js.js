import videojs from 'video.js';
import template from './video-js.html!text';
import './video-js.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Component({
  selector: 'video-js'
})
@View({
  template: template,
  scope: {
    videoOptions: '='
  },
  bindToController: true,
  link(scope, elem, attrs) {
    let vType = attrs.mimeType || 'video/mp4';
    let vSrc = attrs.source || 'http://techslides.com/demos/sample-videos/small.mp4';

    const options = scope.videoOptions || {
      'techOrder': ['html', 'flash'],
      'controls': true,
      'preload': 'auto',
      'autoplay': false,
      'height': 480,
      'width': 640
    };

    scope.resize = attrs.vResize || 'none';

    const videoElem = elem.find('video');

    let player = null;

    const init = () => {
      player = videojs(videoElem[0], options, () => {
        this.src({type: vType, src: vSrc});
      });
    };

    scope.$watch(() => attrs.source, () => {
      vSrc = attrs.source;
      vType = attrs.mimeType;

      if (player !== null) {return player.dispose(() => init());}

      init();
    });

    scope.$on('$destroy', () => player.dispose());
  }
})
@Inject('$log')
// end-non-standard

// Video-js Controller
class VideoJs {
  constructor($log) {
    Object.assign(this, {
      $log: $log,
      activated: false
    });
    LOG.set(this, $log);
    LOG.get(this).log(videojs);
    INIT.set(this, () => {

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

export default VideoJs;
