
console.log("Reverse a String");

function reverseThisString(string) {

var rev = '';

for (i = string.length - 1; i >= 0; i--)
rev += string[i]; 

console.log(rev);
}
reverseThisString("Hello"); 

console.log("Swap Case");

function swapCase(string) {


var toggle = '';
var i; 

for (i = 0; i < string.length; i++) {


if (string[i] >= 'a' && string[i] <= 'z')
toggle += string[i].toUpperCase();


else if (string[i] >= 'A' && string[i] <= 'Z')
toggle += string[i].toLowerCase();
}

console.log(toggle);
}
swapCase("HeLlo"); 

console.log("Fahrenheit to Celsius");

function toCelcius(array) {

var i;

for (i = 0; i < array.length; i++) {

c = (array[i] - 32) * (5 / 9);

console.log(c.toFixed(2));
}
}

toCelcius([70, 100, 250]) 

console.log("Pass and Fail Boolean array");


function passOrFail(array) {

arr = []

for (i = 0; i < array.length; i++) {

if (array[i] >= 75)
arr[i] = true;
else { 
arr[i] = false;
}
}

console.log(arr)
}

passOrFail([25, 87, 76, 40, 50])

console.log("German Numbers");

function germanNumbers() {

arr = []

const cardinalNumbers = [2, 3, 4, 5, 6];

const germanNumbers = ['zwei', 'drei', 'vier', 'funf', 'sechs'];

for (i = 0; i < 5; i++) {

arr[i] = cardinalNumbers[i] + " is " + germanNumbers[i];
}


console.log(arr);
}

germanNumbers();
console.log("Return Prime Numbers");


function returnPrimeNumbers() {

arr = []

var k = 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (i = 0; i <= numbers.length; i++) {

flag = 0;


for (j = 2; j < i; j++) {

if (numbers[i] % j == 0) {
flag = 1;
break;
}
}


if (numbers[i] > 1 && flag == 0) {

arr[k++] = numbers[i];
}
}

console.log(arr);
}


returnPrimeNumbers();
console.log("Showing numbers");

function csc225Rules() {

for (i = 1; i <= 100; i++) {

if (i % 3 != 0)
console.log(i);
}
}

csc225Rules()