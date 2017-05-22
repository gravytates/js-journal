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
