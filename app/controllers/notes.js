import Ember from 'ember';

export default Ember.Controller.extend({
  persistedNotes: Ember.computed.filter('model.@each.isNew', function(note, index, array) {
    return !note.get('isNew');
  })
});
