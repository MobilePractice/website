/**
 * Drink model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Drink = require('./drink.model');
var DrinkEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DrinkEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Drink.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DrinkEvents.emit(event + ':' + doc._id, doc);
    DrinkEvents.emit(event, doc);
  }
}

module.exports = DrinkEvents;
