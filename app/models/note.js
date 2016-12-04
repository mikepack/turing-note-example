import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  title: DS.attr('string'),
  description: DS.attr('string')
});
