import Ember from 'ember';
import NoteControllerMixin from 'todo/mixins/note-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | note controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let NoteControllerObject = Ember.Object.extend(NoteControllerMixin);
  let subject = NoteControllerObject.create();
  assert.ok(subject);
});
