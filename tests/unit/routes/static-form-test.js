import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | static-form', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:static-form');
    assert.ok(route);
  });
});
