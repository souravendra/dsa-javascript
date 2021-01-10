//functions: push, pop, peek, length

var letters = []; //this is our stack

var word = "racecar"

var rword = "";

//put the letters of the word into the stack
for (var i=0; i<word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for (var i=0; i<word.length; i++){
    rword += letters.pop();
}

if (rword===word) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + "is not a palindrome.");
}

//Creates a stack
var Stack = ()=> {
    this.count = 0;
    this.storage = {};

    //Adds a value to the end of the stack
    this.push = (value)=> {
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    this.pop = ()=> {
        if (this.count===0) {
            return undefined;
        }
    }
}