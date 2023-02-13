const solution = (numbers, k) => numbers[((k - 1) * 2) % numbers.length]

console.log(solution([1, 2, 3, 4], 2))	// 3
console.log(solution([1, 2, 3, 4, 5, 6], 5))	// 3
console.log(solution([1, 2, 3], 3))	// 2
