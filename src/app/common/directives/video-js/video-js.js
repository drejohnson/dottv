import template from './video-js.html!text';
import {Directive, Inject} from '../../../core/decorators/decorators';

const LOG = new WeakMap();

// start-non-standard
@Directive({
  selector: 'video-js'
})
// end-non-standard
class VideoJs {
  constructor($log) {
    this.restrict = 'E';
    this.template = template;
    this.scope = {};
    this.bindToController = true;
    LOG.set(this, $log);
  }

  link(scope, element, attrs) {
    LOG.get(VideoJs.instance).log('Test');
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
