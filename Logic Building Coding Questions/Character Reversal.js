//Character Reversal
//Write a JavaScript function reverseString that takes a string as input and returns the string with its characters reversed.
function reverseString(inputString) {
    // Split the input string into an array of characters
    var charArray = inputString.split('');
  
    // Reverse the array of characters
    var reversedArray = charArray.reverse();
  
    // Join the reversed array back into a string
    var reversedString = reversedArray.join('');
  
    return reversedString;
  }
  
  // Example usage:
  var input = "JavaScript";
  var reversed = reverseString(input);
  console.log(reversed); // Output: "tpircSavaJ"
  