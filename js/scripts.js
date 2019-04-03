$(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var inputSentence = $("#inputSentence").val().toLowerCase();

    var outputSentence = [];

//If user input is single charachter vowel
    if (vowels.indexOf(inputSentence) >= 0) {
      outputSentence.push(inputSentence + "ay");

    }else if (inputSentence.length >= 2) {
      var inputArray = inputSentence.split('')

      if(vowels.includes(inputArray[0])) {
        inputArray.push("way");
        outputSentence.push(inputArray.join(''));

      }else{
        vowels.indexOf(inputArray)
      }
    }

    $("#outputToUser").text(outputSentence.join(''));
  });


  var vowels = ["a", "e", "i", "o", "u"];


});
