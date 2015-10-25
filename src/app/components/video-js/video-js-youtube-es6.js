import videojs from 'video.js';

const Tech = videojs.getComponent('Tech');

const Youtube = videojs.extend(Tech, {

  constructor(options, ready) {
    Tech.call(this, options, ready);

    this.setPoster(options.poster);
    this.setSrc(this.options_.source, true);

    // Set the vjs-youtube class to the player
    // Parent is not set yet so we have to wait a tick
    setTimeout(() => {
      this.el_.parentNode.className += ' vjs-youtube';
    }.bind(this));
  },

  dispose() {
    this.el_.parentNode.className = this.el_.parentNode.className.replace(' vjs-youtube', '');
  },

  createEl() {
    const div = document.createElement('div');
    div.setAttribute('id', this.options_.techId);
    div.setAttribute('style', 'width:100%;height:100%;top:0;left:0;position:absolute');

    const divWrapper = document.createElement('div');
    divWrapper.setAttribute('style', 'width:100%;height:100%;position:relative');
    divWrapper.appendChild(div);

    if (!_isOnMobile && !this.options_.ytControls) {
      const divBlocker = document.createElement('div');
      divBlocker.setAttribute('class', 'vjs-iframe-blocker');
      divBlocker.setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100%');

      // In case the blocker is still there and we want to pause
      divBlocker.onclick = () => {
        this.pause();
      }.bind(this);

      divWrapper.appendChild(divBlocker);
    }

    if (Youtube.isApiReady) {
      this.initYTPlayer();
    } else {
      Youtube.apiReadyQueue.push(this);
    }

    return divWrapper;
  },

  initYTPlayer() {
    const playerVars = {
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      loop: this.options_.loop ? 1 : 0
    };

    // Let the user set any YouTube parameter
    // https://developers.google.com/youtube/player_parameters?playerVersion=HTML5#Parameters
    // To use YouTube controls, you must use ytControls instead
    // To use the loop or autoplay, use the video.js settings

    if (typeof this.options_.autohide !== 'undefined') {
      playerVars.autohide = this.options_.autohide;
    }

    if (typeof this.options_['cc_load_policy'] !== 'undefined') {
      playerVars['cc_load_policy'] = this.options_['cc_load_policy'];
    }

    if (typeof this.options_.ytControls !== 'undefined') {
      playerVars.controls = this.options_.ytControls;
    }

    if (typeof this.options_.disablekb !== 'undefined') {
      playerVars.disablekb = this.options_.disablekb;
    }

    if (typeof this.options_.end !== 'undefined') {
      playerVars.end = this.options_.end;
    }

    if (typeof this.options_.color !== 'undefined') {
      playerVars.color = this.options_.color;
    }

    if (!playerVars.controls) {
      // Let video.js handle the fullscreen unless it is the YouTube native controls
      playerVars.fs = 0;
    } else if (typeof this.options_.fs !== 'undefined') {
      playerVars.fs = this.options_.fs;
    }

    if (typeof this.options_.end !== 'undefined') {
      playerVars.end = this.options_.end;
    }

    if (typeof this.options_.hl !== 'undefined') {
      playerVars.hl = this.options_.hl;
    } else if (typeof this.options_.language !== 'undefined') {
      // Set the YouTube player on the same language than video.js
      playerVars.hl = this.options_.language.substr(0, 2);
    }

    if (typeof this.options_['iv_load_policy'] !== 'undefined') {
      playerVars['iv_load_policy'] = this.options_['iv_load_policy'];
    }

    if (typeof this.options_.list !== 'undefined') {
      playerVars.list = this.options_.list;
    } else if (this.url && typeof this.url.listId !== 'undefined') {
      playerVars.list = this.url.listId;
    }

    if (typeof this.options_.listType !== 'undefined') {
      playerVars.listType = this.options_.listType;
    }

    if (typeof this.options_.modestbranding !== 'undefined') {
      playerVars.modestbranding = this.options_.modestbranding;
    }

    if (typeof this.options_.playlist !== 'undefined') {
      playerVars.playlist = this.options_.playlist;
    }

    if (typeof this.options_.playsinline !== 'undefined') {
      playerVars.playsinline = this.options_.playsinline;
    }

    if (typeof this.options_.rel !== 'undefined') {
      playerVars.rel = this.options_.rel;
    }

    if (typeof this.options_.showinfo !== 'undefined') {
      playerVars.showinfo = this.options_.showinfo;
    }

    if (typeof this.options_.start !== 'undefined') {
      playerVars.start = this.options_.start;
    }

    if (typeof this.options_.theme !== 'undefined') {
      playerVars.theme = this.options_.theme;
    }

    this.activeVideoId = this.url ? this.url.videoId : null;
    this.activeList = playerVars.list;

    this.ytPlayer = new YT.Player(this.options_.techId, {
      videoId: this.activeVideoId,
      playerVars: playerVars,
      events: {
        onReady: this.onPlayerReady.bind(this),
        onPlaybackQualityChange: this.onPlayerPlaybackQualityChange.bind(this),
        onStateChange: this.onPlayerStateChange.bind(this),
        onError: this.onPlayerError.bind(this)
      }
    });
  },

  onPlayerReady() {
    this.playerReady_ = true;
    this.triggerReady();

    if (this.playOnReady) {
      this.play();
    }
  },

  onPlayerPlaybackQualityChange() {

  },

  onPlayerStateChange(e) {
    const state = e.data;

    if (state === this.lastState) {
      return;
    }

    switch (state) {
      case -1:
        this.trigger('durationchange');
        break;

      case YT.PlayerState.ENDED:
        this.trigger('ended');
        break;

      case YT.PlayerState.PLAYING:
        this.trigger('timeupdate');
        this.trigger('durationchange');
        this.trigger('playing');
        this.trigger('play');

        if (this.isSeeking) {
          this.trigger('seeked');
          this.isSeeking = false;
        }
        break;

      case YT.PlayerState.PAUSED:
        if (this.isSeeking) {
          this.trigger('seeked');
          this.isSeeking = false;
          this.ytPlayer.playVideo();
        } else {
          this.trigger('pause');
        }
        break;

      case YT.PlayerState.BUFFERING:
        this.player_.trigger('timeupdate');
        this.player_.trigger('waiting');
        break;
    }

    this.lastState = state;
  },

  onPlayerError(e) {
    this.errorNumber = e.data;
    this.trigger('error');

    this.ytPlayer.stopVideo();
    this.ytPlayer.destroy();
    this.ytPlayer = null;
  },

  error() {
    switch (this.errorNumber) {
      case 2:
        return { code: 'Unable to find the video' };

      case 5:
        return { code: 'Error while trying to play the video' };

      case 100:
        return { code: 'Unable to find the video' };

      case 101:
      case 150:
        return { code: 'Playback on other Websites has been disabled by the video owner.' };
    }

    return { code: 'YouTube unknown error (' + this.errorNumber + ')' };
  },

  src() {
    return this.source;
  },

  poster() {
    return this.poster_;
  },

  setPoster(poster) {
    this.poster_ = poster;
  },

  setSrc(source) {
    if (!source || !source.src) {
      return;
    }

    this.source = source;
    this.url = Youtube.parseUrl(source.src);

    if (!this.options_.poster) {
      if (this.url.videoId) {
        // Set the low resolution first
        this.poster_ = 'https://img.youtube.com/vi/' + this.url.videoId + '/0.jpg';

        // Check if their is a high res
        this.checkHighResPoster();
      }
    }

    if (this.options_.autoplay && !_isOnMobile) {
      if (this.isReady_) {
        this.play();
      } else {
        this.playOnReady = true;
      }
    }
  },

  play() {
    if (!this.url || !this.url.videoId) {
      return;
    }

    if (this.isReady_) {
      if (this.url.listId) {
        if (this.activeList === this.url.listId) {
          this.ytPlayer.playVideo();
        } else {
          this.ytPlayer.loadPlaylist(this.url.listId);
          this.activeList = this.url.listId;
        }
      } if (this.activeVideoId === this.url.videoId) {
        this.ytPlayer.playVideo();
      } else {
        this.ytPlayer.loadVideoById(this.url.videoId);
        this.activeVideoId = this.url.videoId;
      }
    } else {
      this.trigger('waiting');
      this.playOnReady = true;
    }
  },

  pause() {
    if (this.ytPlayer) {
      this.ytPlayer.pauseVideo();
    }
  },

  paused() {
    return (this.ytPlayer) ?
      (this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING)
      : true;
  },

  currentTime() {
    return this.ytPlayer ? this.ytPlayer.getCurrentTime() : 0;
  },

  setCurrentTime(seconds) {
    if (this.lastState === YT.PlayerState.PAUSED) {
      this.timeBeforeSeek = this.currentTime();
    }

    this.timeBeforeSeek = this.currentTime();

    this.ytPlayer.seekTo(seconds, true);
    this.trigger('timeupdate');
    this.trigger('seeking');
    this.isSeeking = true;

    // A seek event during pause does not return an event to trigger a seeked event,
    // so run an interval timer to look for the currentTime to change
    if (this.lastState === YT.PlayerState.PAUSED && this.timeBeforeSeek !== seconds) {
      this.checkSeekedInPauseInterval = setInterval(() => {
        if (this.lastState !== YT.PlayerState.PAUSED || !this.isSeeking) {
          // If something changed while we were waiting for the currentTime to change,
          //  clear the interval timer
          clearInterval(this.checkSeekedInPauseInterval);
        } else if (this.currentTime() !== this.timeBeforeSeek) {
          this.trigger('timeupdate');
          this.trigger('seeked');
          this.isSeeking = false;
          clearInterval(this.checkSeekedInPauseInterval);
        }

        this.play();
      }.bind(this), 250);
    }
  },

  playbackRate() {
    return this.ytPlayer ? this.ytPlayer.getPlaybackRate() : 1;
  },

  setPlaybackRate(suggestedRate) {
    if (!this.ytPlayer) {
      return;
    }

    this.ytPlayer.setPlaybackRate(suggestedRate);
    this.trigger('ratechange');
  },

  duration() {
    return this.ytPlayer ? this.ytPlayer.getDuration() : 0;
  },

  currentSrc() {
    return this.source;
  },

  ended() {
    return this.ytPlayer ? (this.lastState === YT.PlayerState.ENDED) : false;
  },

  volume() {
    return this.ytPlayer ? this.ytPlayer.getVolume() / 100.0 : 1;
  },

  setVolume(percentAsDecimal) {
    if (!this.ytPlayer) {
      return;
    }

    this.ytPlayer.setVolume(percentAsDecimal * 100.0);
    this.setTimeout( () =>{
      this.trigger('volumechange');
    }, 50);

  },

  muted() {
    return this.ytPlayer ? this.ytPlayer.isMuted() : false;
  },

  setMuted(mute) {
    if (!this.ytPlayer) {
      return;
    } else {
      this.muted(true);
    }

    if (mute) {
      this.ytPlayer.mute();
    } else {
      this.ytPlayer.unMute();
    }
    this.setTimeout( () =>{
      this.trigger('volumechange');
    }, 50);
  },

  buffered() {
    if (!this.ytPlayer || !this.ytPlayer.getVideoLoadedFraction) {
      return {
        length: 0,
        start() {
          throw new Error('This TimeRanges object is empty');
        },
        end() {
          throw new Error('This TimeRanges object is empty');
        }
      };
    }

    const end = this.ytPlayer.getVideoLoadedFraction() * this.ytPlayer.getDuration();

    return {
      length: 1,
      start() { return 0; },
      end() { return end; }
    };
  },

  supportsFullScreen() {
    return true;
  },

  // Tries to get the highest resolution thumbnail available for the video
  checkHighResPoster() {
    const uri = 'https://img.youtube.com/vi/' + this.url.videoId + '/maxresdefault.jpg';

    try {
      const image = new Image();
      image.onload = () => {
        // Onload may still be called if YouTube returns the 120x90 error thumbnail
        if ('naturalHeight' in this) {
          if (this.naturalHeight <= 90 || this.naturalWidth <= 120) {
            this.onerror();
            return;
          }
        } else if (this.height <= 90 || this.width <= 120) {
          this.onerror();
          return;
        }

        this.poster_ = uri;
        this.trigger('posterchange');
      }.bind(this);
      image.onerror = () =>{};
      image.src = uri;
    } catch (e) {}
  }
});

Youtube.isSupported = () => true;

Youtube.canPlaySource = (e) => (e.type === 'video/youtube');

const _isOnMobile = /(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent);

Youtube.parseUrl = (url) => {
  const result = {
    videoId: null
  };

  const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  let match = url.match(regex);

  if (match && match[2].length === 11) {
    result.videoId = match[2];
  }

  const regPlaylist = /[?&]list=([^#\&\?]+)/;
  match = url.match(regPlaylist);

  if (match && match[1]) {
    result.listId = match[1];
  }

  return result;
};

function loadApi() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function injectCss() {
  const css = // iframe blocker to catch mouse events
            '.vjs-youtube .vjs-iframe-blocker { display: none; }' +
            '.vjs-youtube.vjs-user-inactive .vjs-iframe-blocker { display: block; }' +
            '.vjs-youtube .vjs-poster { background-size: cover; }';

  const head = document.head || document.getElementsByTagName('head')[0];

  const style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}

Youtube.apiReadyQueue = [];

window.onYouTubeIframeAPIReady = () => {
  Youtube.isApiReady = true;

  for (let i = 0; i < Youtube.apiReadyQueue.length; ++i) {
    Youtube.apiReadyQueue[i].initYTPlayer();
  }
};

loadApi();
injectCss();

videojs.registerComponent('Youtube', Youtube);
