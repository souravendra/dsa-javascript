// let arrayofnumbers = [1, 2, 3, 4, 5, 0, 33]
// arrayofnumbers.sort((a, b) => a - b)
// console.log(arrayofnumbers)
/**
 * @params {string} name - someone's name
 */
const testFunction = (name) => {
  return name.toUpperCase()
}

let arrayofduplicates = [1, 2, 5, 3, 6, 3, 5, 8]
// let map2 = new Map()
// map2.set(5, 2)
// map2.set('test', 0)
// console.log(map2.size)
// console.log(map2.get('test'))
// map2.delete(5)
// console.log(map2)
let map = new Map()
//setting values
map.set(5, 2)
map.set('test', 0)
//logging contents of hashmap
console.log(map)
//Map(2) { 5 => 2, 'test' => 0 }
console.log(map.has(4)) //false
console.log(map.size) //2
console.log(map.get('test')) //0
//deleting a kv pair
map.delete(5)
console.log(map)
//Map(1) { 'test' => 0 }
map.clear()
console.log(map)
//Map(0) {}
// let map1 = {}
// map1[5] = 2
// map1['test'] = 0
// console.log(map1)
// console.log(Object.keys(map1))
