import DS from 'ember-data';
/* global $ */

export default DS.Model.extend({
  username: DS.attr('string'),
  body: DS.attr('string'),
  color: DS.attr('string'),
  timestamp: DS.attr('number'),

  didCreate: function() {
    setTimeout(function () {
      $(".messages").scrollTop($(".messages")[0].scrollHeight);
    }, 10);
  },

  didLoad: function() {
    setTimeout(function () {
      $(".messages").scrollTop($(".messages")[0].scrollHeight);
    }, 10);
  }
});
