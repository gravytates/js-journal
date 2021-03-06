(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

Entry.prototype.vowels = function() {
  return this.body.replace(/[^aeiou]/gi, "").length;
};

Entry.prototype.consonants = function() {
  return this.body.replace(/[^a-z]|[aeiou]/gi, "").length;
};

Entry.prototype.getTeaser = function () {
  var teaser = this.body.split(".")[0];
  var teaserArry = teaser.split(' ');
  if (teaserArry.length >= 8) {
    return teaserArry.slice(0, 8).join(" ");
  } else {
    return teaser;
  }
};


exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);

    $('#entry').append('<h4>' + newEntry.title + '</h4>');
    $('#entry').append('<p> Entry teaser: <em>' + newEntry.getTeaser() + '</em></p>');
    $('#entry').append('<p>' + newEntry.body + '</p>');
    $('#entry').append('<p>There are ' + newEntry.wordCount() + ' words in this entry!</p>');
    $('#entry').append('<p>with ' + newEntry.vowels() + ' vowels,</p>');
      $('#entry').append('<p>and ' + newEntry.consonants() + ' consonants!</p>');
  });

});

},{"./../js/journal.js":1}]},{},[2]);
