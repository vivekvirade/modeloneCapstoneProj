//1.BMI Calculator
//Write a JavaScript function calculateBMI that calculates a person's Body Mass Index (BMI) based on their weight and height, and returns a corresponding health classification. The BMI is a commonly used indicator of body weight status and health.
// Code With Error BMI_calculator
function calculateBMI(weight, height) {
    
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 || bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 || bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Correct Code 
function calculateBMI(weight, height) {
    // Calculate BMI using weight and height
    const bmi = weight / (height * height);

    // Check BMI against different weight categories
    if (bmi < 18.5) {
        // If BMI is less than 18.5, it is classified as "Underweight"
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        // If BMI is between 18.5 (inclusive) and 24.9 (exclusive),
        // it is classified as "Normal weight"
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        // If BMI is between 25 (inclusive) and 29.9 (exclusive),
        // it is classified as "Overweight"
        return "Overweight";
    } else {
        // If BMI is 30 or greater, it is classified as "Obese"
        return "Obese";
    }
}

//2.Vowel Count
//Write a JavaScript function countVowels that counts the number of vowels (a, e, i, o, u) in a given string. The function should take one argument: str (string).
// Code with error
function countVowels(str) {
    // Write your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i <= lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}
//Correct Code
function countVowels(str) {
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Convert the input string to lowercase to make the check case-insensitive
    const lowerStr = str.toLowerCase();

    // Initialize a counter for counting vowels
    let count = 0;

    // Iterate through each character in the lowercase string
    for (let i = 0; i < lowerStr.length; i++) {  // Fix: Change <= to <
        // Check if the current character is a vowel
        if (vowels.includes(lowerStr[i])) {
            // Increment the counter if a vowel is found
            count++;
        }
    }

    // Return the total count of vowels in the string
    return count;
}


//**Improvised Prespective to the Coding Problem */

//3.FizzBuzz
//Write a JavaScript function fizzBuzz that takes a positive integer n as input and returns an array of strings.
//Replace numbers divisible by 3 with "Fizz", numbers divisible by 4 with "Buzz", and numbers divisible by both 3 and 4 with "FizzBuzz".

 function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 4 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

// Do not modify the below lines
module.exports = { fizzBuzz };

//****************************************** */
// Approach 2: Rewrite the code using switch statement.
function fizzBuzz(n) {
    // Initialize an empty array to store the FizzBuzz results
    const result = [];

    // Iterate through numbers from 1 to n (inclusive)
    for (let i = 1; i <= n; i++) {
        // Initialize an empty string to store the output for the current number
        let output = "";

        // Use a switch statement to determine the output based on the FizzBuzz rules
        switch (true) {
            case i % 3 === 0 && i % 4 === 0:
                output = "FizzBuzz";
                break;
            case i % 3 === 0:
                output = "Fizz";
                break;
            case i % 4 === 0:
                output = "Buzz";
                break;
            default:
                output = i.toString(); // Convert the number to a string if it doesn't meet any FizzBuzz condition
        }

        // Add the current output to the result array
        result.push(output);
    }

    // Return the final array containing the FizzBuzz results
    return result;
}

// Do not modify the below lines
module.exports = { fizzBuzz };

// Logic Building Coding Questions

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
  
//URL Slug Generator
//Imagine you're working on a blog platform. Write a JavaScript function generateSlug that takes a title string and generates a URL-friendly slug by replacing spaces with hyphens and converting the text to lowercase.
function generateSlug(title) {
    // Convert the title to lowercase
    const lowercaseTitle = title.toLowerCase();
  
    // Replace spaces with hyphens using a regular expression
    const slug = lowercaseTitle.replace(/\s+/g, '-');
  
    return `${slug}.com`;
  }
  
  // Example 1:
  const input1 = "Hello World";
  console.log(generateSlug(input1)); // Output: "hello-world.com"
  
  // Example 2:
  const input2 = "AlmaBetter Web Dev";
  console.log(generateSlug(input2)); // Output: "almabetter-web-dev.com"
  