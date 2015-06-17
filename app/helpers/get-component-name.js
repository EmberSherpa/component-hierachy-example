import Ember from 'ember';

export function getComponentName(type) {
  return `tree-${type}-node`;
}

export default Ember.HTMLBars.makeBoundHelper(getComponentName);
