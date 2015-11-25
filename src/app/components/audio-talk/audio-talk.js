import template from './audio-talk.html!text';
import './audio-talk.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const SCE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@RouteConfig('audio-talk', {
  url: '/audio-talk',
  template: '<audio-talk></audio-talk>',
  resolve: {
    // Constant Meta
    $title: () => 'Audio + Talk',
    $description: () => 'Audio + Talk is a series of Music and Interviews'
  }
})
@Component({
  selector: 'audio-talk'
})
@View({
  template: template
})
@Inject('AudioTalkService', '$sce', '$log')
// end-non-standard

// Mixtapes Controller
class AudioTalk {
  constructor(AudioTalkService, $sce, $log) {
    SERVICE.set(this, AudioTalkService);
    SCE.set(this, $sce);
    LOG.set(this, $log);
    INIT.set(this, () => {
      SERVICE.get(this).getAllAudioTalk().then(audiotalks => {
        this.trustedHtml = (value) => SCE.get(this).trustAsHtml(value);
        this.audiotalks = audiotalks;
        this.results = audiotalks.results;
        // LOG.get(this).log(this.results);
      });
    });
    Object.assign(this, {
      name: 'audiotalks',
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

export default AudioTalk;
