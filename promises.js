async function main() {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log('hello')
      resolve()
    }, 1000)
  )
  console.log('world') //this part of code is now executed AFTER the first part is finished executing
}

setTimeout(() => {
  console.log('123')
}, 100)
