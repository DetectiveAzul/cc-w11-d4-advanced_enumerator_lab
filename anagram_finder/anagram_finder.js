const AnagramFinder = function (word) {
this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter( (word) => {
    return this.isAnagram(word);
  });
}

AnagramFinder.prototype.isAnagram = function (word) {
  const sameSize = (this.word.length === word.length);
  const sameLetters = this.word.split('').every( (letter) => {
    return word.toLowerCase().includes(letter.toLowerCase());
  });
  const notSameWord = this.word !== word;
  return sameSize && sameLetters && notSameWord;
}

module.exports = AnagramFinder;
