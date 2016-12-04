import Ember from 'ember';
import NoteRouteMixin from 'todo/mixins/note-route';
import { module, test } from 'qunit';

module('Unit | Mixin | note route');

// Replace this with your real tests.
test('it works', function(assert) {
  let NoteRouteObject = Ember.Object.extend(NoteRouteMixin);
  let subject = NoteRouteObject.create();
  assert.ok(subject);
});
