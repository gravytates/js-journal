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
