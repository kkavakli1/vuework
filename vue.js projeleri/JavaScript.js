// Hello world and comments

console.log("Hello from JavaScript"); 
//in-line comment
var number = 5;
console.log(number);
/*This is a
multi-line comment*/

console.log("------------------------------------------");

// Data types: undefined, null, boolean, string, symbol, number, and object

var myName = "Beau";
console.log(myName);
myName = 8;
console.log(myName);
let ourName = "freeCodeCamp";
console.log(ourName);
const pi = 3.14;
console.log(pi);

console.log("------------------------------------------");

// Storing values with assignment operator

var a;
var b = 2;
console.log(a);
a = 7;
b = a;
console.log(a);

console.log("------------------------------------------");

// Initializing Variables with Assignment Operator

var a = 9;
console.log(a);

console.log("------------------------------------------");

// Uninitialized variables

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);

console.log("------------------------------------------");

// Case sensitivity is important in javascript!

// Adding numbers

var sum = 10 + 10;
console.log(sum);

console.log("------------------------------------------");

// Subtracting numbers

var sub = 45 - 33;
console.log(sub);

console.log("------------------------------------------");

// Mulitplying numbers

var mult = 45 * 33;
console.log(mult);

console.log("------------------------------------------");

// Dividing numbers

var div = 44 / 4;
console.log(div);

console.log("------------------------------------------");

// Incrementing numbers

var myVar = 87;
console.log(myVar);
myVar++;
console.log(myVar);
myVar = myVar + 1;
console.log(myVar);

console.log("------------------------------------------");

// Decrementing numbers

var myVar = 87;
console.log(myVar);
myVar--;
console.log(myVar);
myVar = myVar - 1;
console.log(myVar);

console.log("------------------------------------------");

// Decimal Numbers

var ourDecimal = 5.7;
var myDecimal = 0.9;
console.log(ourDecimal);
console.log(myDecimal);

console.log("------------------------------------------");

// Multiplying decimals

var product = 2.0 * 2.5;
console.log(product);

console.log("------------------------------------------");

// Dividing decimals

var quotient = 4.4 / 2.0;
console.log(quotient);

console.log("------------------------------------------");

// Finding a remainder

var remainder1 = 5 % 3;
var remainder2 = 4 % 2;
console.log(remainder1);
console.log(remainder2);

console.log("------------------------------------------");

// Compound assignment with augmented addition

var a = 3;
var b = 17;
var c = 12;

console.log(a);
console.log(b);
console.log(c);

a += 12;
b += 9;
c += 7;

console.log(a);
console.log(b);
console.log(c);

console.log("------------------------------------------");

// Compound assignment with augmented subtraction

var a = 11;
var b = 9;
var c = 3;

console.log(a);
console.log(b);
console.log(c);

a -= 6;
b -= 15;
c -= 1;

console.log(a);
console.log(b);
console.log(c);

console.log("------------------------------------------");

// Compound assignment with augmented multiplication

var a = 5;
var b = 12;
var c = 4.6;

console.log(a);
console.log(b);
console.log(c);

a *= 5;
b *= 3;
c *= 10;

console.log(a);
console.log(b);
console.log(c);

console.log("------------------------------------------");

var a = 48;
var b = 108;
var c = 33;

console.log(a);
console.log(b);
console.log(c);

a /= 12;
b /= 4
c /= 11;

console.log(a);
console.log(b);
console.log(c);

// Declare String variables

var firstName = "Alan";
var lastName = "Turing";

console.log(firstName);
console.log(lastName);

var myFirstName = "Beau";
var myLastName = "Carnes";

console.log(myFirstName);
console.log(myLastName);

console.log("------------------------------------------");

// Escaping Literal Quotes in Strings

var myStr = "I am a \"double quoted \"string inside \"double quotes";
console.log(myStr);

console.log("------------------------------------------");

// Quoting Strings with single quotes

var myStr = 'I am a "double quoted "string inside "double quotes';
console.log(myStr);
	
console.log("------------------------------------------");

// Escaping sequences in Strings

/****
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab 
 \b baackspace
 \f form feed
 *******/
 
// Concatenating Strings with plus operator

var ourStr = "I come first." + " I come second.";
console.log(ourStr);

console.log("------------------------------------------");

// Concatenating strings with plus equals operator

var ourStr = "I come first.";
ourStr += " I come second.";
console.log(ourStr);

console.log("------------------------------------------");

// Constructing strings with variables

var ourName1 = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName1 + ", how are you?";

console.log(ourStr);

console.log("------------------------------------------");


// Appending variables to Strings

var anAdjective = "awesome!";
var ourStr = "freecoddeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

console.log("------------------------------------------");

// Find length of String

var firstName1 = "LoveLace";
var firstName1Length = firstName1.length;
console.log(firstName1Length);

console.log("------------------------------------------");

// Bracket notation to find first character in string

var firstName2 = "LoveLace";
var firstLetter = firstName2[0];
console.log(firstLetter);

console.log("------------------------------------------");

// String immutability

var myStr = "Jello World";
myStr[0] = "H"; // error!!!

console.log("error!")

console.log("------------------------------------------");

// bracket notation to find nth character in string

firstName2 = "LoveLace";
var nthLetter = firstName2[3];
console.log(nthLetter)

console.log("------------------------------------------");

// bracket notation to find last character in string

firstName2 = "LoveLace";
var nthLetter = firstName2[firstName2.length - 1];
console.log(nthLetter)

console.log("------------------------------------------");

//bracket notation to find nth-to-last character in string

firstName2 = "LoveLace";
var thirdToLastLetter = firstName2[firstName2.length - 3];
console.log(thirdToLastLetter);

console.log("------------------------------------------");

// word blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result += "The " +myAdjective + " " + myNoun + " " +  myVerb + " to the store " + myAdverb +".";
	return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"))

console.log("------------------------------------------");

// Store multiple values with arrays

var ourArray = ["John", 23];
console.log(ourArray);

console.log("------------------------------------------");

// nested arrays

var ourArray = [["the universe", 42], ["everything", 101010]];
console.log(ourArray);

console.log("------------------------------------------");

// access array data with indexes

var ourArray = [50, 60, 70];
var ourData = ourArray[0];

console.log(ourData);

console.log("------------------------------------------");

// modify array data with inndexes

var ourArray = [50, 60, 70];
console.log(ourArray);
ourArray[1] = 90;
console.log(ourArray);

console.log("------------------------------------------");

// access multidimensional arrays with indexes

var myArray = [[1,2,3], [4,5,6,], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData);

console.log("------------------------------------------");

// manipulate arrays with push()

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray);
console.log();
myArray.push([15, 16]);
console.log(myArray);

console.log("------------------------------------------");

// manipulate arrays with pop() removes last element from array

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray);
console.log();
myArray.pop();
console.log(myArray);

console.log("------------------------------------------");

// manipulate arrays with shift() removes first element from array

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray);
console.log();
myArray.shift();
console.log(myArray);

console.log("------------------------------------------");

// manipulate arrays with unshift() adds element to the beginning of the array
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray);
console.log();
myArray.shift();
console.log(myArray);
console.log();
myArray.unshift([12, 34, 56]);
console.log(myArray);

console.log("------------------------------------------");

// shopping list

var myList = [["cereal", 3], ["milk", 2], ["banana", 3], ["juice", 2], ["eggs", 12]];
console.log(myList);

console.log("------------------------------------------");

// write reusable code with functions

function ourReusableFunction() {
	console.log("Heyya, world");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

console.log("------------------------------------------");

// passing values to functions with arguments

function ourFunctionWithArgs(a, b) {
	console.log(a - b);
}

ourFunctionWithArgs(10, 5);

console.log("------------------------------------------");

// global scope andd functions

var myGlobal = 10;

function fun1() {
	oopsGlobal = 5;
}

function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myGlobal: " + myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}

fun1();
fun2();

console.log("------------------------------------------");

// local scope and functions

function myLocalScope() {
	var myVar11 = 5;
	console.log(myVar11);
}

myLocalScope();
// console.log(myVar11); // error!

console.log("------------------------------------------");

// global vs local scope in functions

var outerWear = "t-shirt";

function myOutfit() {
	var outerWear = "sweater";
	return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

console.log("------------------------------------------");

// Return a value from a function with return

function minusSeven(num) {
	return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
	return num * 5;
}

console.log(timesFive(5));

console.log("------------------------------------------");

// understanding undefined value returned from a function

var sum = 0;

function addThree() {
	sum = sum + 3;
}

console.log();

function addFive() {
	sum += 5;
}

console.log();

console.log("------------------------------------------");

// assignment with a returned value

var changed = 0;

console.log(changed);

function change(num) {
	return (num + 5) / 3;
} 

changed = change(10);

console.log(changed);

var processed = 0;

console.log(processed);

function processArg(num) {
	return (num + 3) / 5;
}

processed = processArg(7);

console.log(processed);

console.log("------------------------------------------");

// Stand in line

function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " +JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " +JSON.stringify(testArr));

console.log("------------------------------------------");

// boolean values

function welcomeToBooleans() {
	return true;
}

console.log("------------------------------------------");

// use conditional logic with if statements

function outTrueOrfalse(isItTrue) {
	if(isItTrue) {
		return "Yes, it's true";
	}
	return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
	if(wasThatTrue) {
		return "Yes, that was true";
	}
	return "No, that was false";
}

console.log(trueOrFalse(true));

console.log("------------------------------------------");

// comparison with the equality operator

function testEqual(val) {
	if (val == 12) {
		return "Equal";
	}
	return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));

console.log("------------------------------------------");

//comparison with the strict equality operator

function testStrict(val) {
	if (val === '12') {
		return "Equal";
	}
	return "Not Equal";
}

console.log(testStrict(10));
console.log(testStrict(12));

console.log("------------------------------------------");

// practice comparing different values

function compareEquality1(a, b) {
	if(a == b) {
		return "Equal";
	}
	return "Not Equal";
}

console.log(compareEquality1(10, "10"));

function compareEquality2(a, b) {
	if(a === b) {
		return "Equal";
	}
	return "Not Equal";
}

console.log(compareEquality2(10, "10"));

console.log("------------------------------------------");

// comparison with thee innequality operator

function testNotEqual(val) {
	if (val != 99) {
		return "Not Equal";
	}
	return "Equal";
}

console.log(testNotEqual(99));
console.log(testNotEqual(98));

console.log("------------------------------------------");

// comparison with the strict inequality operator

function testStrictNotEqual(val) {
	if (val !== 17) {
		return "Not Equal";
	}
	return "Equal";
}

console.log(testStrictNotEqual(17));
console.log(testStrictNotEqual('17'));
console.log(testStrictNotEqual("17"));

console.log("------------------------------------------");

// comparisons with the logical and operator

function testGreaterThan(val) {
	if (val > 100) {
		return "Over 100";
	}
	
	if (val > 10) {
		return "Over 10";
	}
	
	return "10 or Under";
}

console.log(testGreaterThan(10));

console.log("------------------------------------------");

// comparison with thee greater than or equal to operator

function testGreaterThan(val) {
	if (val >= 20) {
		return "20 or Over";
	}
	
	if (val >= 10) {
		return "10 or Over";
	}
	
	return "Less than 10";
}

console.log(testGreaterThan(10));

console.log("------------------------------------------");

// comparison with the less than operator

function testLessThan(val) {
	if (val < 25) {
		return "Under 25";
	}
	
	if (val < 55) {
		return "Under 55";
	}
	
	return "55 or Over";
}

console.log(testLessThan(10));

console.log("------------------------------------------");

// comparison with the less than or equal to operator

function testLessThanOrEqual(val) {
	if (val <= 12) {
		return "less than or equal to 12";
	}
	
	if (val <= 24) {
		return "less than or equal to 24";
	}
	
	return "more than 24";
}

console.log(testLessThanOrEqual(10));

console.log("------------------------------------------");

// comparisons with the logical and operator

function testLogicalAnd(val) {
	if(val <= 50 && val >= 25) {
		return "Yes";
	}
	return "No";
}

console.log(testLogicalAnd(30));

console.log("------------------------------------------");

//comparisons with the logical or operator

function testLogicalOr(val) {
	if(val >= 50 || val <= 25) {
		return "Out";
	}
	return "In";
}

console.log(testLogicalOr(10));

console.log("------------------------------------------");

// else statements

function testLogicalOr1(val) {
	if(val >= 50 || val <= 25) {
		return "Out";
	} else {
		return "In";
	}
}

console.log(testLogicalOr1(30));

console.log("------------------------------------------");

// else if statements

function testElseIf(val) {
	if(val > 10) {
		return "greater than 10";
	} else if(val < 5) {
		return "less than 5";
	} else {
		return "between 5 and 10";
	}
}

console.log(testElseIf(7));

console.log("------------------------------------------");

// logical order in if else statements

function orderMyLogic(val) {
	if(val < 10) {
		return "less than 10";
	} else if(val < 5) {
		return "less than 5";
	} else {
		return "greater than or equal to 10";
	}
}

console.log(orderMyLogic(3));

console.log("------------------------------------------");

// chaining if else statements

function testSize(num) {
	if(num < 5) {
		return "tiny";
	} else if(num < 10) {
		return "small";
	} else if(num < 15) {
		return "medium";
	} else if(num < 20) {
		return "large";
	} else {
		return "Huge";
	}
}

console.log(testSize(2));
console.log(testSize(7));
console.log(testSize(12));
console.log(testSize(17));
console.log(testSize(22));

console.log("------------------------------------------");

// golf code

console.log("Learn JavaScript - full course for beginners freecodecamp.org 1:27:45");

console.log("------------------------------------------");

// switch statements & default option in switch statements

function caseInSwitch(val) {
	var answer = "";
	switch(val) {
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
		default:
			answer = "none";
			break;
	}
	return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));

console.log("------------------------------------------");

// multiple identical options in switch statements

function sequentialSizes(val) {
	var answer = "";
	switch(val) {
		case 1:
		case 2:
		case 3:
			answer = "low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "high";
			break;
	}
	return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));

console.log("------------------------------------------");

// replacing il else chains with switch

console.log("1:39:20 Replacing If Else Chains with Switch leaarn javascript freecodecamp");

console.log("------------------------------------------");

// returning boolean values from functions

function isLess(a, b) {
	if(a < b) {
		return true;
	} else {
		return false;
	}
}

console.log(isLess(10, 15));
console.log(isLess(15, 15));
console.log(isLess(15, 10));

console.log("------------------------------------------");

// returning early pattern from functions

console.log("1:42:20 Return Early Pattern for Functions learn javascript freecodecamp");

console.log("------------------------------------------");

// Build objects

var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};

console.log(ourDog);

console.log("------------------------------------------");

// accessing object properties with dot notation

var ourDog = {
		"name": "Camper",
		"legs": 4,
		"tails": 1,
		"friends": ["everything!"]
	};

var nameValue = ourDog.name;
var legsValue = ourDog.legs;

console.log(nameValue);
console.log(legsValue);

console.log("------------------------------------------");

// accessing object properties with bracket notation

var ourDog = {
		"name": "Camper",
		"legs": 4,
		"tails": 1,
		"friends": ["everything!"]
	};

var nameValue = ourDog["name"];
var legsValue = ourDog["legs"];

console.log(nameValue);
console.log(legsValue);

console.log("------------------------------------------");

//accessing object properties with variables

var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

console.log(player);

console.log("------------------------------------------");

// updating object properties

var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};

console.log(ourDog.name);

console.log(ourDog);

ourDog.name = "Cempario";

console.log(ourDog.name);

console.log(ourDog);

console.log("------------------------------------------");

// add new properties to an object

var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};

console.log(ourDog);

ourDog["bark"] = "Woof!";

console.log(ourDog);

console.log("------------------------------------------");

// delete  properties from an object

var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};

console.log(ourDog);

delete ourDog.tails;

console.log(ourDog);

console.log("------------------------------------------");

// using objects for lookups

console.log("Learn JavaScript - Full Course for Beginners 1:57:15");

console.log("------------------------------------------");

//testing objects for properties

console.log("Learn JavaScript - Full Course for Beginners 1:59:09");

console.log("------------------------------------------");

//Manipulating complex objects

console.log("Learn JavaScript - Full Course for Beginners 1:59:15");

console.log("------------------------------------------");

//accessing nested objects

var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

console.log("------------------------------------------");

// accessing nested arrays

var myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);

console.log("------------------------------------------");

// record collection

console.log("Learn JavaScript - Full Course for Beginners 2:03:14");

console.log("------------------------------------------");

// iterate with while loops

var myArray = [];

var i = 0;
while(i < 5) {
	myArray.push(i);
	i++;
}

console.log(myArray);

console.log("------------------------------------------");

// iterate with for loops

var ourArray = [];

for (var i = 0; i < 5; i++) {
	ourArray.push(i);
}

console.log(ourArray);

console.log("------------------------------------------");

// iterate odd numbers with a for loop

var ourArray = [];

for (var i = 1; i < 10; i += 2) {
	ourArray.push(i);
}

console.log(ourArray);

console.log("------------------------------------------");

// count backwards with a loop

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
	ourArray.push(i);
}

console.log(ourArray);

console.log("------------------------------------------");

// iterate through ann array with a for loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
	ourTotal += ourArr[i];
}

console.log(ourTotal);

console.log("------------------------------------------");

// nesting for loops

function multiplyAll(arr) {
	var product = 1;
	for(var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			product *= arr[i][j];
		}
	}
	return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);

console.log("------------------------------------------");

// iterate with do while loops

var myArray = [];
var i = 10;

do {
	myArray.push(i);
	i++;
} while (i < 5);

console.log(i, myArray);

console.log("------------------------------------------");

// profile lookup

console.log("Learn JavaScript - Full Course for Beginners 2:24:12");

console.log("------------------------------------------");

// generate random fractions

function randomFraction() {
	return Math.random();
}

console.log(randomFraction());

console.log("------------------------------------------");

//generate random whole numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
	return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

console.log("------------------------------------------");

// generate random whole numbers within a range

console.log("Learn JavaScript - Full Course for Beginners 2:30:21");

console.log("------------------------------------------");

// use the parseInt function

function convertToInteger(str) {
	return parseInt(str);
}

console.log(convertToInteger("56"));

console.log("------------------------------------------");

//use the parseInt function with a radix

function convertToInteger(str) {
	return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
console.log(convertToInteger("10010"));

console.log("------------------------------------------");

// use the conditional (ternary) operator

function checkEqual(a, b) {
	return a === b ? true : false;
}

console.log(checkEqual(1,2));
console.log(checkEqual(2,2));

console.log("------------------------------------------");

//use multiple conditional (ternary) operators

function checkSign(num) {
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-10));

console.log("------------------------------------------");

// difference between the var and let leywords

console.log("Learn JavaScript - Full Course for Beginners 2:36:58");

console.log("------------------------------------------");

// compare scopes of the var and let keywords

console.log("Learn JavaScript - Full Course for Beginners 2:39:03");

console.log("------------------------------------------");

// declare a read only variable with the const keyword

console.log("Learn JavaScript - Full Course for Beginners 2:41:32");

console.log("------------------------------------------");

// mutate an array declared with const

console.log("Learn JavaScript - Full Course for Beginners 2:43:41");

console.log("------------------------------------------");

// prevent object mutation

console.log("Learn JavaScript - Full Course for Beginners 2:44:52");

console.log("------------------------------------------");

// use arrow functions to write concise anonymous functions

const magic = () => new Date();

console.log(magic);

console.log("------------------------------------------");

// write arrow functions with parameters

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));

console.log("------------------------------------------");

// write high order arrow functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function() {
	return function increment(number, value = 1) {
		return number + value;
	}
})();

console.log(increment(5,2));
console.log(increment(5));

console.log("------------------------------------------");

// use the rest operator with function parameters

const sum1 = (function() {
	return function sum(...args) {
		return args.reduce((a, b) => a + b, 0);
	};
})();

console.log(sum1(1,2,3,4,5,6,7,8,9,0,10));

console.log("------------------------------------------");

// use the spread operator to evaluate arrays in-place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
	arr2 = [...arr1];
	arr1[0] = 'potato'
})();

console.log(arr2);

console.log("------------------------------------------");

// use destructing assignment to assign variables from objects-...

console.log("Learn JavaScript - Full Course for Beginners 2:57:18-3:05:05");

console.log("------------------------------------------");

// create strings using teemplate literals ve diğerleri...

console.log("Learn JavaScript - Full Course for Beginners 3:06:39'dan en sona kadar!..");

console.log("------------------------------------------");