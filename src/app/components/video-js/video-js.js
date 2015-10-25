import videojs from 'video.js';
import './video-js-youtube-es6';
import 'video.js/dist/video-js.css!';
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
  link(scope, element, attrs) {
    let vType = attrs.mimeType || 'video/mp4';
    let vSrc = attrs.source || '';

    const options = scope.videoOptions || {
      'techOrder': ['html5', 'flash', 'youtube'],
      'controls': true,
      'preload': 'auto',
      'autoplay': false,
      'height': 600,
      'width': 1200
    };

    const videoElem = element.find('video');
    let player = null;
    const init = () => {
      player = videojs(videoElem[0], options, () => player.src({type: vType, src: vSrc}));
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
      name: 'VideoJS Component',
      activated: false
    });

    LOG.set(this, $log);
    // LOG.get(this).log();
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
