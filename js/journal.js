function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

Entry.prototype.vowels = function() {
  return this.body.replace(/[^aeiou]/gi, "").length
}

Entry.prototype.consonants = function() {
  return this.body.replace(/[^a-z]|[aeiou]/gi, "").length
}


exports.entryModule = Entry;
