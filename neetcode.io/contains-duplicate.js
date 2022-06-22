/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // xor of a number with itself is 1
  // a^a= 0
  // a^a^b = b
  // xor all elements together and result will be the number that isn't the duplicate
  // if xor-ing all numbers results in 0 then no duplicates
  //
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i]
  }
  return Boolean(result) //return false if result is 0 and true if non zero
}
// time complexity - O(n)
// space complexity - O(1)

var containsDuplicate = () => {
  
}