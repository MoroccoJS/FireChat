import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  body: DS.attr('string'),
  color: DS.attr('string'),
  timestamp: DS.attr('number')
});
