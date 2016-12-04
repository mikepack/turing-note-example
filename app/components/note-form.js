import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNote: function() {
      this.sendAction('action', this.get('model'));
    }
  }
});
