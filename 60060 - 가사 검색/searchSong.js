function solution(words, queries) {
  let answer = []
  let wordsObj = {}

  words.forEach(el => {
    if (!wordsObj[el.length]) {
      wordsObj[el.length] = []
    }
    wordsObj[el.length].push(el)
  })

  queries.forEach((que) => {
    const reg = new RegExp(`^${que.replaceAll('?', '.')}$`, 'i')

    let chk = 0

    wordsObj[que.length]?.forEach((word) => reg.test(word) && chk++)

    answer.push(chk)
  })

  return answer
}

console.log( // [3, 2, 4, 1, 0]
  solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"],
    ["fro??", "????o", "fr???", "fro???", "pro?"]
  )
)

console.log( // [5]
  solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"],
    ["?????"]
  )
)
