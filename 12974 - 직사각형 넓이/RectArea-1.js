function solution(rectangles) {
  let answer = 0

  rectangles.forEach(el => {
    const [x1, y1, x2, y2] = el

    answer += (x2 - x1) * (y2 - y1)
  })

  // 중복제거 해야함 근데 안함 귀찮음

  return answer
}

/**
 * 중복만 제거 했으면 됐을탠데
 */