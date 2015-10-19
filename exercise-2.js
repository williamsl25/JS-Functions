// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");
}

// Put your answer below -------------------------

// variable containing an anonymous function
var doSomethingCool = function() {
  console.log("Something Cool!");
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi() {
  alert("Hello, World!");
}
setTimeout(sayHi, 2000);

// Put your answer below -------------------------

// using an anonymous function that will send out the alert after 2 seconds
setTimeout(function() {
  alert("Hello, World!");
}, 2000);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.
var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------
[c] z then y
//  1) var letter = "x" is a global variable meaning you can read and change them anywhere in your code. The value is accessible and modifiable throughout your program.

//  2) Any code inside that function can access (read and change) this variable. Any code outside it can't. It's local, so it's invisible from outside.

//      var g = 100;

//      function outer() {
//          var x = 99;

//          function inner() {
//              var y = 77;
//          }
//      }
//  the code inside the inner function has access to all three variables. The code inside outer can only access g and x, and the code outside of the outer function can only see g.

// Put in terms of scope, g is global, x is local to outer (or, equivalently, the scope of x is the outer function), and y is local to inner (i.e. its scope is inner).

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

// Put your answer below -------------------------
var reverseStr = function(str) {
  return str.split("").reverse().join("");
};

// var reverseStr = function(str) {
//   return str.split("").reverse();
// };
// reverseStr("lindsay") => will return
//       ["y", "a", "s", "d", "n", "i", "l"]
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};

// Put your answer below -------------------------

var spanishColor = {
    'rojo': '#ff0000',
    'blanco': '#ffffff',
    'azul': '#0000ff',
    'verde': '#00ff00',
    'negro': '#000000'
  };
  function colorName(hex){
    return spanishColor[hex];
};
console.log(spanishColor);
 // returns the object => Object {rojo: "#ff0000", blanco: "#ffffff", azul: "#0000ff", verde: "#00ff00", negro: "#000000"}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";

// Put your answer below -------------------------

var foo;  // declaration
foo = "bar"; // = sign indicates an assignment

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  for(var i = 0; i < 10; i++) {
    console.log(callback);
  }
};

// Put your answer below -------------------------
var callNtimes = function (num, callback) {
  for(var i= 0; i < num; i++) {
    console.log(callback);
  }
};
callNtimes(num, callback);

// variable with 2 parameters


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {

  score++;
};

var decreaseScore = function() {
  score--;
};

// Put your answer below -------------------------
var score = function(){
  var scoreSum = 0;
  var increaseScore = function() {
    scoreSum++;
  }
  var decreaseScore = function() {
    scoreSum--;
  }
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};
var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------
var addNumbers = function(numberA, numberB) {
  return numberA + numberB;
};
var twoPlusTwo = addNumbers(2,2);
// twoPlusTwo will return 4

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

var accelerate = function(amount) {
  speed += amount;
};

// Put your answer below -------------------------
var speed = 0;

var accelerate = function(amount) {
  if(amount === 0) {
    speed += 1;
  }else {
    speed += amount;
  }
};
console.log(accelerate());


// It is returning NaN  because the ammount is undefined - when you add speed + amount (undefined + 0) it will return NaN

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------
callLater(function(){

    });

// -----------------------------------------------



//////////////////////////////////////////////////

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(){
    "use strict";
    //...
}

function max(num1, num2){
    if(num1 > num2) {
      return num1;
    }else {
      return num2;
    }
}

// Function max has two perameters of num1 and num2.
// If num1 is greater then num 2 then it will return
// num1 or else it will return num2

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(){
    "use strict";
    //...
}

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3) {
      return num1;
    }else if(num2 > num1 && num2 > num3) {
      return num2;
    }else {
      return num3;
    }
}


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
}
function isVowel(char){
    if(char === "i" || char === "e" || char === "o" || char === "a" || char === "u") {
      return true;
    }else {
      return false;
    }
}
// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    //...
}
function sum(){
  var args= [].slice.call(arguments); //=> turns args into an array
  var total=0;
  for (var i=0; i<args.length; i++){
    total = total + args[i];
    console.log(total);
  }
  return total;
};
 sum(1,2,3,4) //=> returns what it is doing each time it loops (1 3 6 10) and your total =10


function multiply(){
    "use strict";
    //...
}

function multiply () {
  var args= [].slice.call(arguments);
  var total=1;
  for (var i=0; i<args.length; i++) {
    total = total * args[i];
    console.log(total);
  }
  return total;
}
multiply(1,2,3,4);  //24

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

function reverse(str){
  return str.split("").reverse().join("");
}
reverse("lindsay is tired");
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word.length;
}
console.log(longestWord("Lindsay Williams is home"));
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
