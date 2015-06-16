import Ember from 'ember';
import ajax from 'ic-ajax';

const {get} = Ember;

export default Ember.Controller.extend({
  fetch: Ember.computed({
    get: function(){
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
  })
});
