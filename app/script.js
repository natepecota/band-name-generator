'use strict';

$(function() {
  $('#name').click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
    });

    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });

    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });
  });

  //Make an event handler that, when the button is clicked
  //sends a POST request to our server
  $('#submitAdjectives').on('submit', function(e) {
    e.preventDefault();
    //get the text entered in the text box and save to a variable
    var adjective = $('input[name=adjective]').val();
    var adjectivePost;

    if (adjective) {
      adjectivePost = {word: adjective};
      $.post('adjective', adjectivePost, function(response) {
        var adjectiveRes = response.message;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }
  });

  $('#submitVerbs').on('submit', function(e) {
    e.preventDefault();
    var verb = $('input[name=verb]').val();
    var verbPost;

    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        var verbRes = response.message;
        $('#verbRes').text(verbRes);
      });
    }
  });

  $('#submitNouns').on('submit', function(e) {
    e.preventDefault();
    var noun = $('input[name=noun]').val();
    var nounPost;

    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {
        var nounRes = response.message;
        $('#nounRes').text(nounRes);
      });
    }
  });

});
