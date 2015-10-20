import videojs from 'video.js';
import {Directive, Inject} from '../decorators/decorators';

const LOG = new WeakMap();
const WINDOW = new WeakMap();
const TIMEOUT = new WeakMap();

// start-non-standard
@Directive({
  selector: 'vj-resize'
})
// end-non-standard
class VideoJsResize {
  constructor($log, $window, $timeout) {
    this.scope = {};
    this.restrict = 'A';
    WINDOW.set(this, $window);
    TIMEOUT.set(this, $timeout);
    LOG.set(this, $log);
  }

  link(scope, elem, attrs) {
    const windowDOM = WINDOW.get(this);
    let mode = attrs.vjResize;

    scope.$watch(() => {return {'height': windowDOM.innerHeight, 'width': windowDOM.innerWidth};}, () => {
      render();
    }, true);

    scope.$watch(() => attrs.vjResize, () => {
      mode = attrs.vjResize;
      render();
    }, true);

    function render() {
      /* TODO: find a better approach, as this is a Hacky way to overcome <video> tag wrapping by VideoJS library */
      let currElem = angular.element(elem[0].querySelector('.vjs_video_3-dimensions'));

      if (currElem.length > 0) {
        const containerDim = currElem[0].parentElement.getBoundingClientRect();

        switch (mode) {
          case 'fill':
            currElem.css('width', containerDim.width + 'px');
            currElem.css('height', containerDim.height + 'px');
        }

      } else {
        TIMEOUT.get(this)(() => {
          currElem = angular.element(elem[0].querySelector('.vjs_video_3-dimensions'));
          const containerDim = currElem[0].parentElement.getBoundingClientRect();

          switch (mode) {
            case 'fill':
              currElem.css('width', containerDim.width + 'px');
              currElem.css('height', containerDim.height + 'px');
          }
        }, 200);
      }
    }
    windowDOM.addEventListener('resize', () => scope.$apply());
  }

  // start-non-standard
  @Inject('$log', '$window', '$timeout')
  // end-non-standard
  static directiveFactory($log, $window, $timeout) {
    VideoJsResize.instance = new VideoJsResize($log, $window, $timeout);
    return VideoJsResize.instance;
  }
}

export default VideoJsResize;
