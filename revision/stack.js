//functions: push, pop, peek, length
//using stack to check if string is a palindrome
let letters = [] //this is our stack that stores word characters
let word = 'racecar'
let rword = ''

for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
  //push letters into stack
  letters.push(word[wordIndex])
}

for (let reverseIndex = 0; reverseIndex < word.length; reverseIndex++) {
  //pop stack elements in reverse order
  rword += letters.pop()
}

if (word === rword) console.log('palindrome')
else console.log('not a palindrome')
