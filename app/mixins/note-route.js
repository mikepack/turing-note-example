import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    saveNote: function() {
      this.transitionTo('notes.note', this.currentModel);
    }
  }
});
