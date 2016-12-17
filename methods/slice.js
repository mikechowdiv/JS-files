//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

var a = ["zero", "one", "two", "three"];
var sliced = a.slice(1,3);

console.log(a);      // [ "zero", "one", "two", "three" ]
console.log(sliced); // [ "one", "two" ]