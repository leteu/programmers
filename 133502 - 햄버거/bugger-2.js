function solution(ingredient) {
  let answer = 0;
  let arr = []

  ingredient.forEach((el) => {
    arr.push(el)

    if (arr.join('').slice(-4) === '1231') {
      arr.splice(-4, 4)
      answer++
    }
  })

  return answer;
}

// 3 ~ 9, 11, 12 런타임
// 50 점
