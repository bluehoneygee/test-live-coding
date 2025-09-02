// [1,4,6,7]  result [14,12,8,2]

function reverseAndTimes(input) {
  let result = [];
  for (let i = input.length - 1; i >= 0; i--) {
    result[result.length] = input[i] * 2;
  }
  return result;
}

console.log(reverseAndTimes([5]));
