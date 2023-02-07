function solution(ingredient) {
  let answer = 0;
  let temp = ingredient.join('')
  let prev = ingredient.length

  while(1) {
    temp = temp.replace('1231', '')

    if (prev === temp.length) {
      break
    } else {
      answer++
      prev -= 4
    }
  }

  return answer;
}

// 4, 5, 12 런타임
// 83.3점
