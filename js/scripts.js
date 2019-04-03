$(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var inputSentence = $("#inputSentence").val().toLowerCase();

    var outputSentence = [];

//If user input is single charachter vowel
    if (vowels.indexOf(inputSentence) >= 0) {
      outputSentence.push(inputSentence + "ay");
//If user input is multiple letter word beginning with vowel
    }else if (inputSentence.length >= 2) {
      var inputArray = inputSentence.split('')
      if(vowels.includes(inputArray[0]) === true) {
        inputArray.push("way");
        outputSentence.push(inputArray.join(''));
      }else{
          if (inputArray.includes("q") === true) {
          if(inputArray[(inputArray.indexOf("q")+1)] === "u"){

            var qFactor = inputArray.indexOf("q");
            var secondSlicedPartOfWordAtQ = (inputArray.slice(qFactor+1));
            var firstSlicedPartOfWordAtQ = (inputArray.slice(0,qFactor+1));
            for(var i = 0; i <= firstSlicedPartOfWordAtQ.length-1; i++){
              console.log(firstSlicedPartOfWordAtQ[i]);
              if(vowels.includes(firstSlicedPartOfWordAtQ[i])){
                for(var i = 0; i <= inputArray.length-1; i++){
                  if (vowels.includes(inputArray[i]) === true) {
                    var secondSlicedPartOfWord = (inputArray.slice(i));
                    var firstSlicedPartOfWord = (inputArray.slice(0,i));
                    outputSentence.push(secondSlicedPartOfWord.join(''));
                    outputSentence.push(firstSlicedPartOfWord.join('') + "ay");
                    break
                  }else {}
                }
              }else if(vowels.includes(!firstSlicedPartOfWordAtQ[i])){
                var secondSlicedPartOfWord = (inputArray.slice(qFactor+1));
                var firstSlicedPartOfWord = (inputArray.slice(0,qFactor+1));
                outputSentence.push(secondSlicedPartOfWord.join(''));
                outputSentence.push(firstSlicedPartOfWord.join('') + "ay");
              }else{}
            }
        }else if (vowels.includes(!firstSlicedPartOfWordAtQ[i])){
            var secondSlicedPartOfWord = (inputArray.slice(qFactor+1));
            var firstSlicedPartOfWord = (inputArray.slice(0,qFactor+1));
            outputSentence.push(secondSlicedPartOfWord.join(''));
            outputSentence.push(firstSlicedPartOfWord.join('') + "ay");
          }else{}
        }else{
      //If word does not include q
          for(var i = 0; i <= inputArray.length-1; i++){
            if(vowels.includes(inputArray[i]) === true) {
              var secondSlicedPartOfWord = (inputArray.slice(i));
              var firstSlicedPartOfWord = (inputArray.slice(0,i));
              outputSentence.push(secondSlicedPartOfWord.join(''));
              outputSentence.push(firstSlicedPartOfWord.join('') + "ay");
              break
            }else{}
          }
        }
      }
//If user input is multiple letter word beginning with constanant
    // }else{
    //   // If word include q
    //     if (inputArray.includes("q") === true) {
    //       if(inputArray[(inputArray.indexOf("q")+1)] === "u"){
    //         var qFactor = inputArray[(inputArray.indexOf("q"))]
    //         var secondSlicedPartOfWordAtQ = (inputArray.slice(qFactor));
    //         var firstSlicedPartOfWordAtQ = (inputArray.slice(0,qFactor));
    //         for(var i = 0; i <= firstSlicedPartOfWordAtQ.length-1; i++){
    //           if(vowels.includes(firstSlicedPartOfWordAtQ[i])){
    //             for(var i = 0; i <= inputArray.length-1; i++){
    //               if (vowels.includes(inputArray[i]) === true) {
    //                 var secondSlicedPartOfWord = (inputArray.slice(i));
    //                 var firstSlicedPartOfWord = (inputArray.slice(0,i));
    //                 outputSentence.push(secondSlicedPartOfWord.join(''));
    //                 outputSentence.push(firstSlicedPartOfWord.join('') + "ay");
    //                 break
    //               }else {}
    //             }
    //           }
    //         }
    //       }else if (vowels.includes(!firstSlicedPartOfWordAtQ[i])){
    //           var secondSlicedPartOfWord = (inputArray.slice(qFactor+1));
    //           var firstSlicedPartOfWord = (inputArray.slice(0,qFactor+1));
    //         }else{}
    //     }else{
    //     //If word does not include q
    //         for(var i = 0; i <= inputArray.length-1; i++){
    //           if(vowels.includes(inputArray[i]) === true) {
    //             var secondSlicedPartOfWord = (inputArray.slice(i));
    //             var firstSlicedPartOfWord = (inputArray.slice(0,i));
    //             outputSentence.push(secondSlicedPartOfWord.join(''));
    //             outputSentence.push(firstSlicedPartOfWord.join('') + "ay");
    //             break
    //           }else{}
        //     }
        //   }
         }
    $("#outputToUser").text(outputSentence.join(''));
  });
  var vowels = ["a", "e", "i", "o", "u"];
});
