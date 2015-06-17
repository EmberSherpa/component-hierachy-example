import Ember from 'ember';
import ajax from 'ic-ajax';

const {get} = Ember;

export default Ember.Controller.extend({
  queryParams: ["opened"],
  "opened": [],
  fetch: Ember.computed({
    get(){
      let fetch = function (parent) {
        let query = '';
        if (parent) {
          query = $.param({
            parent: get(parent, 'id'),
            type: get(parent, 'type')
          });
        }
        return ajax(`/children?${query}`);
      }
      return fetch.bind(this);
    }
  }),
  checkOpen: Ember.computed('opened.[]', {
    get() {
      let opened = this.get('opened');
      let checkOpen = function(node) {
        if (node == null) {
          return true;
        }
        let id = get(node, 'id');
        return opened.contains(id);
      }
      return checkOpen;
    }
  }),
  actions: {
    open(node) {
      let id = get(node, 'id');
      let opened = this.get('opened');
      if (!opened.contains(id)){
        opened.pushObject(id);
      };
    },
    close(node) {
      let id = get(node, 'id');
      this.get('opened').removeObject(id);
    }
  }
});
