var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var words = newEntry.wordCount();
    var vowels = newEntry.vowels();
    var consonants = newEntry.consonants();

    $('#entry').append('<h4>' + newEntry.title + '</h4>');
    $('#entry').append('<p>' + newEntry.body + '</p>');
    $('#entry').append('<p>There are ' + words + ' words in this entry!</p>');
    $('#entry').append('<p>with ' + vowels + ' vowels,</p>');
      $('#entry').append('<p>and ' + consonants + ' consonants!</p>');
  });

});
