import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dynamic-form', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dynamic-form');
    assert.ok(route);
  });
});
