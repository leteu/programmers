function solution(rectangles) {
  const arr = new Set()

  rectangles.forEach(el => {
    const [x1, y1, x2, y2] = el

    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        arr.add(`${i} ${j}`)
      }
    }
  })

  return [...arr].length
}

console.log(solution([[0, 1, 4, 4], [3, 1, 5, 3]]))	// 14
console.log(solution([[1, 1, 6, 5], [2, 0, 4, 2], [2, 4, 5, 7], [4, 3, 8, 6], [7, 5, 9, 7]]))	// 38
