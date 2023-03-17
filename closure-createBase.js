/*
given: var addSix = createBase(6)
addSix(10) should return 16
addSix(21) should return 27
*/

createBase = (number) => {
  return (result) => {
    return result + number
  }
}

var addSix = createBase(6)

console.warn(addSix(10))
console.warn(addSix(21))

//closure is when a function returns a function that has access to the scope of the parent function even after the function has been passed
const dad = (kidsname) => {
  let x = 3
  return () => {
    //returns an anonymous function, doesnt call it, just returns it
    x -= 1
    if (x > 0) {
      console.log(`${kidsname} has : ` + x + ' coins left')
    } else {
      console.log(`${kidsname} has ` + 'no funds available')
    }
  }
}

let son = dad('son') //snapshot of parent function
let daughter = dad('daughter') //another snapshot of parent function
son()
son()
son()
daughter()
daughter()
daughter()
son()
//separate closures so they are not modifying the same thing
