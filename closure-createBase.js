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
