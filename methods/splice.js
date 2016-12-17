//The splice() method changes the content of an array by removing existing elements and/or adding new elements.
var myFish = ["angel", "clown", "mandarin", "surgeon"];
myFish.splice(2, 0, "drum"); 

// myFish is ["angel", "clown", "drum", "mandarin", "surgeon"]


//Remove 1 element from index 3
var myFish = ["angel", "clown", "drum", "mandarin", "surgeon"];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "surgeon"]


//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
var myFish = ["angel", "clown", "trumpet", "surgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "surgeon"] 
// removed is ["angel", "clown"]