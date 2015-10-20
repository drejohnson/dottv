import videojs from 'video.js';
import {Directive, Inject} from '../decorators/decorators';

const LOG = new WeakMap();

// start-non-standard
@Directive({
  selector: 'video-js'
})
// end-non-standard
class VideoJs {
  constructor($state, $log) {
    this.scope = {
      videoOptions: '='
    };
    this.restrict = 'E';
    this.template = [
      '<div class="vjs-container">',
      '<video class="video-js"></video>',
      '</div>'
    ].join('');
    LOG.set(this, $log);
    // console.log(this.scope);
  }

  link(scope, elem, attrs) {
    let vType = attrs.mimeType || 'video/mp4';
    let vSrc = attrs.source || '';
    console.log(attrs);

    let options = scope.videoOptions || {
      'techOrder': ['html', 'flash'],
      'controls': true,
      'preload': 'auto',
      'autoplay': false,
      'height': 480,
      'width': 640
    };

    scope.resize = attrs.vResize || 'none';

    const videoElem = elem.find('video');
    // console.log(videoElem);
    let player = null;

    const init = () => {
      player = videojs(videoElem[0], options, () => {
        this.src({type: vType, source: vSrc});
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

  // start-non-standard
  @Inject('$log')
  // end-non-standard
  static directiveFactory($log) {
    VideoJs.instance = new VideoJs($log);
    return VideoJs.instance;
  }
}

export default VideoJs;
