const IsogramFinder = function (word) {
  this.word = this.toObj(word.toLowerCase());
}

IsogramFinder.prototype.isIsogram = function () {
  return !Object.keys(this.word).some( (letter) => {
    return this.word[letter] > 1;
  })
}

IsogramFinder.prototype.toObj = function(word) {
  let wordObj = {};
  word.split('').forEach( (letter) => {
    (wordObj[letter]) ? wordObj[letter] ++ : wordObj[letter] = 1;
  });
  return wordObj;
}

module.exports = IsogramFinder;
