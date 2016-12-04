import Ember from 'ember';
import NoteController from 'todo/mixins/note-controller'

export default Ember.Controller.extend(NoteController, {
  setCreatedAt: true
});
