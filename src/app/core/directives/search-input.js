import {Directive, Inject} from '../decorators/decorators';

const LOG = new WeakMap();
const STATE = new WeakMap();

// start-non-standard
@Directive({
  selector: 'search-input'
})
// end-non-standard
class SearchInput {
  constructor($state, $stateParams, $log) {
    this.query = $stateParams.query;
    this.scope = {};
    this.restrict = 'E';
    this.bindToController = true;
    this.template = [
      '<div class="search-input">',
      '<input type="text" ng-model="this.query" placeholder="Search for a video..."></input>',
      '<i ng-click="resetQuery()" ng-show="query.length" class="mdi-navigation-close"></i>',
      '</div>'
    ].join('');
    LOG.set(this, $log);
    STATE.set(this, $state);
    LOG.get(this).log(this.query);
  }

  link(scope, element, attrs) {
    element.bind('keydown', (event) => {
      if (event.keyCode === 13) {
        // STATE.get(this).go('search', {query: scope.query});
        console.log(STATE);
        // LOG.get(this).log('Searching');
      }
    });

    scope.resetQuery = () => {
      LOG.get(this).log('Canceled Search');
    };
  }

  // start-non-standard
  @Inject('$state', '$stateParams', '$log')
  // end-non-standard
  static directiveFactory($state, $stateParams, $log) {
    SearchInput.instance = new SearchInput($state, $stateParams, $log);
    return SearchInput.instance;
  }
}

export default SearchInput;
