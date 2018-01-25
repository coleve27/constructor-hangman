//constructor that puts in underscores

var Letter = function(ltr) {
  //stores letter
  this.letter = ltr;
  //whether or not property is shown?
  this.appear = false;



  this.letterRender = function() {
    if (this.letter == ' ') {
      //keeps from reading blanks as false
      this.appear = true;
      return '';
    }
    if (this.appear === false) {
      //blank appears
      return '_';
    } else {
      return this.letter;
    }
  };

};

module.exports = Letter;
