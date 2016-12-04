import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteNote: function(note) {
      note.destroyRecord();
      this.transitionToRoute('notes');
    }
  }
});
