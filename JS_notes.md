1 Need to link the script tag in the html file to your js file
2 datatypes:
  numbers: 1 2
  booleans: true or false
  strings: "this word"
3 objects:
    objects
    arrays
    functions
4 use console.log to test on browser or type node to test in terminal
5 typeof command will tell you what datatype it is:
    typeof 2 => "number"
    typeof "name" => string
6 To store the variable -- now if you type myVariable is will return "true"
    var myVariable = true
    myVariable = "a string is here" --- You now changed the variable "true" to "a string is here"
  To initialize the variable
    var newVariable; --it is undefined at this point
    var myVar = 1 => it is now defined
    myVar + 3 => 4
    myVar + "3" => "13"

7 logical operators:
    +
    -
    = assignment
    ===  checks for the type and the value -- strict equality
        1 === "1"  => false type is not the same
        1 === 1  => true
    == only checks for value --loose equality
        1 == "1" => will return true even though one is a number and the other is a string
    < >
8 concatination:
  "1" + 1 => "11" just will shove the two together
  "1" + 25 + "2" + "252" => "1252252"
9 parseInt - turns a string into a number
    parseInt("1234")  => 1234
___________________________
Objects
___________________________
var myObj = {
  propName : propValue
};
 define object
    var myObj = {
      propertyName: "Lindsay",
      newPropName: "Calvin",
      coolProp: {
        coo: "I am a baby sound",
        dada: "dada is here",
      }
    }
  myObj => returns the whole object
  myObj.newPropName => "Calvin"
  myObj.coolProp => Object {coo: "I am a baby sound", dada: "dada is here"}
  myObj.coolProp.coo =>  "I am a baby sound"

var myString = 'string'
myString.split('') => ["s", "t", "r", "i", "n", "g"]
var letters = myString.split('') => returns ["s", "t", "r", "i", "n", "g"] an object
myString.split() => returns "string" (a string)
    var myObj = {1: [1, 2, 3], 2: [4, 5, 6]
    } => creates the object

converting an array-like object into a true array:
    var myobject ={ // array-like collection
    length: 4,
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three'
}
    typeof myobject => object

    ["zero", "one", "two", "three"].slice(1) => ["one", "two", "three"]

    var myarray = Array.prototype.slice.call(myobject)  
    myobject =>
      Object {0: "zero", 1: "one", 2: "two", 3: "three", length: 4}
    myarray =>
      ["zero", "one", "two", "three"]
    typeof myarray =>
      "object"
** array's slice(start, [end]) => returns a "slice" of an array:
    var myarray = Array.prototype.slice.call(myobject, 1)
    myarray =>
      ["one", "two", "three"]
    var myarray = Array.prototype.slice.call(myobject, 0, 2)
    myarray =>
      ["zero", "one"]
    var myarray = Array.prototype.slice.call(myobject, 0, 3)
    myarray =>
      ["zero", "one", "two"]
    var myarray = Array.prototype.slice.call(myobject)
    myarray =>
      ["zero", "one", "two", "three"]
    myobject => Object {0: "zero", 1: "one", 2: "two", 3: "three", length: 4}

********************************
Arrays
********************************  
var myArr = [1,2,3,"four", true, {bad:"ass"}, function(){return "hello world"}]    
    console.log("myArr")=> returns the whole array
    typeof myArr => Object
To access items in an array:
      myArr [0]       => 1
      myArr [2]       => 3
      myArr.length    => 7
      myArr.push("hi everyone") => 8 items now in the array
      myArr.pop()   => takes the last item off
      myArr.shift() => removes the 1st item in the array
      myArr.unshift("brandon")  => add an item first in the array
           ["brandon", 2, 3, "four", true, Object, myArr()]
      myArr.push("hi everyone") =>
          ["brandon", 2, 3, "four", true, Object, myArr(), "hi everyone"]
*********************
functions
*********************
define the function:

  function sum(x,y){
    console.log("x + y")
    return x + y
  }
  sum(2,3)  //execute the function

var helloText = sayHello();
function sayHello(name){
  console.log("hello" + name);
  return "hello " + name;
}
  sayHello("Blake")

2 parameters --returns the if  when name is true and adj is not defined
function sayHello(name, adj) {
  if(name && adj === undefined) {
  console.log("hello " + name + " they are " + adj);
  return "hello " + name + " and they are " + adj;
} else {
  <!-- console.log("please enter name and adj"); -->
  return "wah wah....doesnt work";
}
}
var helloText = sayHello("Blake", "awesome");
sayHello("lindsay") => will return the if statement (name and adj is undefined)
sayHello() => returns the else ..."wah wah"
*****************************
function characterCount(sentence) {
  var charCount = sentence.split(" ");
  return charCount;
}
characterCount("I am here")    => returns ["I", "am", "here"]

function characterCount(sentence) {
  var charCount = sentence.split(" ").join("");
  return charCount;
}
characterCount("I am here") => "Iamhere"

function characterCount(sentence) {
  var charCount = sentence.split(" ").join("").length;
  return charCount;
}
characterCount("I am here") => 7
***********************************
function wordCount(words) {
  console.log(words.split(" "));
  return words.split(" ").length;
}
wordCount("I am here") => ["I", "am", "here"] 3

"hello! this is awesome!!!".split("!") = ["hello", " this is awesome", "", "", ""]

var myString="See spot run"
myString => "See spot run"
var strArr=myString.split(" ")
strArr  => ["See", "spot", "run"]
**********************************
(arguments) => will show all that is being added
var sum = function(a, b) {
    console.log(arguments);
    return a + b
}
console.log(sum(8, 11)); => will return what you are adding [8,11] and 19 the sum

function sum(x,y) {
  console.log(arguments);
  if(typeof x ==="number" && typeof y ==="number"){
    return x+y;
  } else {
    return "sorry, not a number"
  }
}
sum(5,9)  => returns what is being added bc or the (arguments)[5, 9] as well as the sum => 14
sum(5, "the") => what is being added [5, "to"] as well as the else statement bc you didn't enter two numbers=> "sorry, not a number"
***********************************
For loops --you must include the conditions (start -var i = , stop i<args.length, increments - i++)
*************************************
function sum(){
  var args= [].slice.call(arguments); //=> turns args into an array
  var total=0;
  for (var i=0; i<args.length; i++){
    total = total + args[i];
    console.log(total);  
  }
  return total;
};
sum(1,2,3,4) => returns what it is doing each time it loops (1 3 6 10) and your total =10

console.assert(sum(1,2,3,4,5) ===15) => will assert that your sum is correct.  If you put ===16 it will tell you that your assertion failed

Make sure that return total is outside of the for loop, but inside the function! -->

var sumFun = function() {
  var args = [].slice.call(arguments);
  var total = 0;
  for(var i = 0; i < args.length ; i++ ) {
    total = total + args[i];
  }
  console.log(total);
  return total;
};
sumFun(2,3) => 5
sumFun(5,4) => 9

var myArr = ["random", "things", "bear"];
for(var i=0; i < myArr.length; i++) {
  myArr[i] = myArr[i] + "bear";
}
myArr  =>
  ["randombear", "thingsbear", "bearbear"]

***************************************
forEach loops - will only run for as long as the array
**************************************
var textArr = ["pluto", "rocks"];
function addText(element, index, arr) {
     arr[index] = index +" " + arr + " " + element + "text";
}

textArr.forEach(addText);

textArr => returns the index first, then the array, then the element/item
      ["0 pluto,rocks plutotext", "1 0 pluto,rocks plutotext,rocks rockstext"]
typeof textArr => "object"

var textArr = ["pluto", "rocks"];
function addText(element, index, arr) {
     arr[index] = element + "text";
}

textArr.forEach(addText);
textArr => returns ["plutotext", "rockstext"]

var arr=[1,2,3];
arr.forEach(function(element){
  console.log(element);
  });
  => returns 1 2 3 it looped through the element
