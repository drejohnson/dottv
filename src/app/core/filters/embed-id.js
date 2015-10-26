import {Filter, Inject} from '../decorators/decorators';

export class EmbedFilters {
  // Youtube ID
  @Filter({
    filterName: 'youtubeID'
  })
  @Inject('$sce')
  static youtubeIDFilter($sce) {
    return (url) => {
      const youtubeRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      const youtubeMatch = url.match(youtubeRegex);
      if (youtubeMatch && youtubeMatch[7].length === 11) {
        return youtubeMatch[7];
      } else {
        return undefined;
      }
    };
  }
}
