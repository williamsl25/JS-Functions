
/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE

}
function forEach(array, callback){
    for (var i = 0; i < array.length; i++) {
       callback(array[i]);
    };
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a) {
  total *= a;
 });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
  var args= [].slice.call(arguments);
  var total=0;
  for (var i=0; i<args.length; i++){
    total = total + args[i];
    console.log(total);
  }
  return total;
};
console.assert(sum(1,2,3,4,5) ===15)
// returns => 1 3 6 10 15


// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;
    for(var i = 0; i < args.length ; i++ ) {
        total = total + args[i];
      }
    return total / args.length;
};

console.assert( average(2, 4, 6, 8) === 5 )
average(2, 4, 6, 8);

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var largeNum = 0;
    forEach(args, function(a) {
        if (a > largeNum) {
         largeNum = a;
       };
    });
    return largeNum;
};

console.assert( largest(2, 4, 6, 8) === 8 )
largest(2, 4, 6, 8)

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var longWord = "";
    forEach(args, function(a){
        if (a.length > longWord.length) { longWord = a;
        };
    });
    return longWord;
}

console.assert( longest("shelby", "boss", "mach1", "rousche") === "rousche");

longest("shelby", "boss", "mach1", "rousche")

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort();
var sortedFruit = fruit.sort();
console.assert(fruit[2] === "cherries");
// ['apples', 'bananas', 'cherries']

// .concat()
var nameArray = ["Townes", "Tim", "Lindsay", "Poppy"];
var sortedNameArray = nameArray.sort();

var newArray = sortedNameArray.concat(nameArray);
console.assert(newArray[3] === "Townes");
//newArray
// ["Lindsay", "Poppy", "Tim", "Townes", "Lindsay", "Poppy", "Tim", "Townes"]

// .indexOf()
var newArray = ["Tom", "John", "Mike", "Smith"];
indexNumber = newArray.indexOf("Tom");
console.assert(indexNumber === 0);

// .split()
var newString = newArray[1].split("h");
console.assert(newString[0] === "Jo");
// newArray
//["Tom", "John", "Mike", "Smith"]
//newString
//["Jo", "n"]

// .join()
var joinedArray = newArray.join(",");
console.assert(joinedArray === "Tom,John,Mike,Smith");

// .pop()
var poppedArray = newArray.pop();
console.assert(poppedArray ==="Smith");

// .push()
var boysTotal = newArray.push("Tim", "Tyler");
console.assert(boys === 5);
//newArray "Tom", "John", "Mike", "Tim", "Tyler"

// .slice()
var slicedArray = newArray.slice(0, 3);
console.assert(slicedArray[2] === "Mike");
// slicedArray
// ["Tom", "John", "Mike"]

// .splice()
var removed = newArray.splice(5, 0, "Norbert");
console.assert(newArray[5] === "Norbert");
// start at 5 and remove 0 then insert "Norbert"

// newArray
// ["Tom", "John", "Mike", "Tim", "Norbert", "Tim", "Tyler", "Tim", "Tyler"]

// .shift()  Takes the first off the array
var shifted = newArray.shift();
console.assert(newArray[0] === "John");
// newArray
// ["John", "Mike", "Tim", "Norbert", "Tim", "Tyler", "Tim", "Tyler"]

// .unshift()  puts a new name on the beginning
 var unshifted = newArray.unshift("Charlie");
 console.assert(newArray[0] === "Charlie");
 // newArray
// ["Charlie", "John", "Mike", "Tim", "Norbert", "Tim", "Tyler", "Tim", "Tyler"]

// .filter()
var numberedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function lessThanFive(value){
    return value < 5;
};
var filteredArray = numberedArray.filter(lessThanFive);
console.assert(filteredArray[2] === 3);
// filteredArray
// [1, 2, 3, 4]

// .map()
function plusTwo(value){
    return value + 2;
};
var mappedArray = numberedArray.map(plusTwo);
console.assert(mappedArray[1] === 4);
// mappedArray
// [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// adds two to each number in the array
