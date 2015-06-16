import Ember from 'ember';

const {on} = Ember;
const {oneWay, equal} = Ember.computed;

export default Ember.Component.extend({
  isOpen: false,
  initialOpen: on('didInsertElement', function(){
    this.fetchData()
      .then((children)=>{
        if (children.length === 1) {
          this.set('isOpen', true);
        }
        return children;
      });
  }),
  fetchData: function() {
    let promise = this._fetch()
      .then((children)=>{
        this.set('children', children);
        return children;
      });
    this.set('promise', promise);
    return promise;
  },
  _fetch: function(){
    let fetch = this.get('fetch');
    return fetch(this.get('node'));
  },
  actions: {
    toggleOpenness() {
      this.set('isOpen', !this.get('isOpen'));
    }
  }
});
