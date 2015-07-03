import Ember from 'ember';
/* global Please */

export default Ember.ArrayController.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  username: prompt("Please choose a username"),
  color: Please.make_color(),
  actions: {
    sendMessage: function() {
      if (this.get('body')) {
        var newMessage = this.store.createRecord('message', {
          username: this.get('username'),
          body: this.get('body'),
          color: this.get('color'),
          timestamp: new Date().getTime()
        });

        newMessage.save();
        this.set('body', '');
      }
    }
  }
});
