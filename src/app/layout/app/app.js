import '../../components/search/search';
import '../../components/search-input/search-input';
import '../../components/menu-link/menu-link';
import '../../components/menu-toggle/menu-toggle';
import '../../components/item-widgets/item-widgets';
import '../../components/social-buttons/social-buttons';
import '../../components/sidenav/sidenav';
import '../../components/toolbar/toolbar';
import '../../components/blog-list/blog-list';
import '../../components/blog-view/blog-view';
import '../../components/featured-video/featured-video';
import '../../components/video-list/video-list';
import '../../components/channel-list/channel-list';
import '../../components/video-view/video-view';
import '../../components/episodes/episodes';
import '../../components/home/home';
import '../../components/docu-series/docu-series';
import '../../components/radio-tv-film/radio-tv-film';
import '../../components/music/music';
import '../../components/comedy/comedy';
import '../../components/lifestyle/lifestyle';
import '../../components/related/related';

import template from './app.html!text';
import './app.css!';
import {View, Component, Inject} from '../../core/decorators/decorators';

// start-non-standard
@Component({
  selector: 'app'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard
class AppComponent {
  constructor($log) {
    Object.assign(this, {
      $log
    });
    $log.log('App Container');
  }
}

export default AppComponent;
