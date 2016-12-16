import Ember from 'ember';

export default Ember.Component.extend({
  fooservice: Ember.inject.service(),

  init() {
    this._super(...arguments);
    console.log("Inside component init function");
    this.get('fooservice').testfunction();
  }
});
