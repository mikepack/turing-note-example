import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    saveNote: function(model) {
      if(this.get('setCreatedAt')) {
        model.set('createdAt', new Date());
      }
      model.save();
      return true;
    }
  }
});
