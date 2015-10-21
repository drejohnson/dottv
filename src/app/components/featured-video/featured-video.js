import template from './featured-video.html!text';
import '../../common/styles/videoplayer.css!';
import './featured-video.css!';
import {Component, View, Inject} from '../../core/decorators/decorators';
// import youtubeID from '../../core/filters/embed-id.js'

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const FILTER = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Component({
  selector: 'featured-video'
})
@View({
  template: template
})
@Inject('VideosService', '$filter', '$log')
// end-non-standard

// Featured-video Controller
class FeaturedVideo {
  constructor(VideosService, $filter, $log) {
    Object.assign(this, {
      label: 'featured',
      title: 'Tomorrow Pictures TV Intro',
      activated: false
    });
    SERVICE.set(this, VideosService);
    FILTER.set(this, $filter);
    LOG.set(this, $log);
    INIT.set(this, () => {
      SERVICE.get(this).getFeatured().then(featured => {
        this.featured = featured;
        this.results = featured.results;
        this.title = this.results[0].fragments['featured.title'].blocks[0].text;
        this.url = this.results[0].fragments['featured.videourl'].value;
        this.poster = this.results[0].fragments['featured.poster'].main.url;

        const videoid = () => {
          const embedId = FILTER.get(this)('youtubeID')(this.url);
          return embedId;
        };
        this.youtubeID = videoid();
        this.embedUrl = 'https://www.youtube.com/embed/' + this.youtubeID;

        this.playerVars = {
          controls: 1,
          autoplay: 1,
          rel: 0,
          showinfo: 0
        };

        // Videogular
        this.video = this.url;
        this.currentTime = 0;
        this.totalTime = 0;
        this.state = null;
        this.volume = 1;
        this.isCompleted = false;
        this.API = null;
        this.onPlayerReady = (API) => {
          this.API = API;
          LOG.get(this).log(this.API);
        };
        this.onCompleteVideo = () => this.isCompleted = true;

        this.onUpdateState = (state) => {
          this.state = state;
          LOG.get(this).log(this.state);
        };

        this.onUpdateTime = (currentTime, totalTime) => {
          this.currentTime = currentTime;
          this.totalTime = totalTime;
        };

        this.onUpdateVolume = (newVol) => this.volume = newVol;

        this.config = {
          nativeFullscreen: true,
          autoHide: true,
          autoHideTime: 3000,
          autoPlay: true,
          preload: 'false',
          sources: [
            {src: this.video },
          ],
          loop: false,
          plugins: {
            poster: this.poster
          },
          analytics: {
            category: 'Featured',
            label: this.title,
            events: {
              ready: true,
              play: true,
              pause: true,
              stop: true,
              complete: true,
              progress: 10
            }
          }
        };
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

export default FeaturedVideo;
