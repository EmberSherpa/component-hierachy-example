import Ember from 'ember';

const {on, get} = Ember;
const {oneWay, equal} = Ember.computed;

export default Ember.Component.extend({
  isOpen: Ember.computed('checkOpen', 'node', {
    get() {
      let node = this.get('node');
      let checkOpen = this.get('checkOpen');
      return checkOpen(node);
    }
  }),
  initialData: on('init', function(){
    this.fetchData()
      .then((children=[])=>{
        if (children.length === 1) {
          this.sendAction('open', get(children, 'firstObject'));
        }
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
    open() {
      let node = this.get('node');
      this.sendAction('open', node);
    },
    close() {
      let node = this.get('node');
      this.sendAction('close', node);
    }
  }
});
