import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';
import Ember from 'ember';

let MockFoo = Ember.Service.extend({
  testfunction() {
    console.log("This is a mock fooservice!!! SNEEEAKY!!!");
  }
});

moduleForAcceptance('Acceptance | test1', {
  beforeEach() {
    console.log("INSIDE TEST WITH MOCK SERVICE");
    this.application.register('service:fooservice', MockFoo);
    this.application.inject('controller', 'fooservice', 'service:fooservice');
    this.application.inject('component', 'fooservice', 'service:fooservice');
    this.application.inject('component:test-component', 'fooservice', 'service:fooservice');
  },

  afterEach() {
    console.log("ENDED TEST WITH MOCK SERVICE");
  }
});

test('visiting /test', function(assert) {
  visit('/test');

  andThen(function() {
    assert.equal(currentURL(), '/test');
  });
});
