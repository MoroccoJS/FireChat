import Ember from 'ember';
/* global moment */

export function formatDate(message) {
  return moment(message[0].get("timestamp")).format('MMMM Do, h:mm a');
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
