// https://stackoverflow.com/questions/9539886/limiting-asynchronous-calls-in-node-js
// https://dev.to/ycmjason/limit-concurrent-asynchronous-calls-5bae

// Web engineer role at Uber. Phone screen was a technical challenge that tested for Javascript specific knowledge.

/**
 * Write mapAsyncWithLimit() function that:
 * - Takes an array of inputs (inputs arg)
 * - Calls an asynchronous function with each input (iterateeFn arg)
 * - Can only have a limit number of asynchronous functions running concurrently (limit arg)
 * - Calls callback function after all inputs have been processed (callback arg)
 */

function fetchUsernameById(id, callback) {
  // Simulates async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200

  setTimeout(() => {
    callback(`Username ${id}`)
  }, randomRequestTime)
}

function mapAsyncWithLimit(inputs, limit, iterateeFn, callback) {
  // Implement here
  // Hint: Create some intermediate callback fn here to pass to iterateeFn
}

mapAsyncWithLimit([1, 2, 3, 4, 5], 2, fetchUsernameById, (allResults) => {
  // This callback body runs after all inputs have been successfully processed
  console.log(allResults)
  // Should log: ["Username 2", "Username 1", "Username 3", "Username 4", "Username 5"]
  // Note - order may not be same because of random async callback resolve time
})
// The real test here is to see how you implement only a limit number of async calls running concurrently at any given time.
// After one async call completes, run next async call on available input from input array until all inputs have been processed.
