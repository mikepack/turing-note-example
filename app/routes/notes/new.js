import Ember from 'ember';
import NoteRoute from 'todo/mixins/note-route';

export default Ember.Route.extend(NoteRoute, {
  model: function() {
    return this.store.createRecord('note');
  }
});
