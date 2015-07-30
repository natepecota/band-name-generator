'use strict';

function postRandomWord3 (word, wordObject) {
  //check if the word is on the object
  if (!wordObject.hasOwnProperty(word)) {
    //if it's NOT on the object, add it and send a message that we added it
    wordObject[word] = true;
    return {message: 'Thanks! We added your word, ' + word + ' to our list.'};
  }
  //if it IS on the object, send a polite message saying we have it
  return {message: 'We already have your word, ' + word + ' in our list.' };
}
