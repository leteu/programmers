function solution(k, score) {
  let honorList = []

  return score.map((e, i) => {
    honorList.push(e)
    honorList.sort((a, b) => b - a)

    if (honorList.length > k) {
      honorList.pop()
    }

    return honorList[honorList.length - 1]
  })
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])) // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])) // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
