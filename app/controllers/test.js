import Ember from 'ember';

export default Ember.Controller.extend({
  fooservice: Ember.inject.service(),

  init() {
    this._super(...arguments);
    console.log("Loading test route controller");
    this.get('fooservice').testfunction();
  }
});
