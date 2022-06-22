/*
Your input
"A man, a plan, a canal: Panama"
Output
false
Expected
true
*/
const isPalindrome = (s) => {
  //using stack, tc - O(n) sc - O(n)
  let input = onlyReturnAlphaNumChar(s)
  //console.log(input)
  let stack = []
  let reversedInput = ''
  for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    stack.push(input[inputIndex])
  }
  //console.log(stack)
  for (let reverseIndex = 0; reverseIndex < input.length; reverseIndex++) {
    reversedInput += stack.pop()
  }
  //console.log(reversedInput)
  if (reversedInput === input) return true
  else return false
}

const onlyReturnAlphaNumChar = (string) => {
  //time complexity O(n)
  return string.replace(/\W/g, '').toLowerCase()
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
