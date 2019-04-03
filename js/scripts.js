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
        for(var i = 0; i <= inputArray.length-1; i++){
          if (vowels.includes(inputArray[i]) === true) {

            var secondSlicedPartOfWord = (inputArray.slice(i));
            var firstSlicedPartOfWord = (inputArray.slice(0,i));
            outputSentence.push(secondSlicedPartOfWord.join(''));
            outputSentence.push(firstSlicedPartOfWord.join('') + "ay");
            break

          }
        }
      }
    }

    $("#outputToUser").text(outputSentence.join(''));
  });


  var vowels = ["a", "e", "i", "o", "u"];


});
