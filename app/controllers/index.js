import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  username: prompt("Please choose a username"),
  actions: {
    sendMessage: function() {
      if (this.get('body')) {
        var newMessage = this.store.createRecord('message', {
          username: this.get('username'),
          body: this.get('body'),
          color: "#A2D72F",
          timestamp: new Date().getTime()
        });

        newMessage.save();
        this.set('body', '');
      }
    }
  }
});
