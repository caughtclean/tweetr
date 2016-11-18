"use strict";

const simulateDelay = require("./util/simulate-delay");


module.exports = function makeDataHelpers(db) {
  return {
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, callback);
      callback(null, true);
    },

    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    }
  }
};
