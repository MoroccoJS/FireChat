import Ember from 'ember';
/* global $ */

export default Ember.View.extend({
  keyPress: function(e) {
    var controller = this.get('controller');
    if (e.key === "Enter") {
      controller.send("sendMessage");
      e.preventDefault();
    }
  }
});
