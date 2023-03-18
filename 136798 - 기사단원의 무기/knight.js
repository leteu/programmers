function solution(number, limit, power) {
  function countDivisors(n) {
    let cnt = 0

    for(let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (Math.floor(n / i) === i) cnt++
        else cnt += 2
      }

      if (cnt > limit) {
        cnt = power
        break
      }
    }

    return cnt
  }

  return Array
    .from({ length: number }, (_, i) => i + 1)
    .reduce((acc, cur) => acc + countDivisors(cur), 0)
}

console.log(solution(5, 3, 2)) // 10
console.log(solution(10, 3, 2)) // 21
