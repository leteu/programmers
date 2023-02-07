function solution(arr) {
  const a = arr.join('').split('+').map(el => eval(el))
  a
  return arr.join('').split('+').map(el => eval(el)).reduce((a, b) => a + b)
}

console.log(solution(["1", "-", "3", "+", "5", "-", "8"])) //	1
console.log(solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"])) //	3