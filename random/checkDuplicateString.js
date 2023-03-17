let data = ['a', 'a', 'b', 'c']
let duplicates = []
let set = new Set()
data.forEach((name) => {
  if (set.has(name)) duplicates.push(name)
  else set.add(name)
})
console.log(duplicates)
