function solution(n, words) {
  let fail = null

  words.some((el, index) => {
    if (el.length === 1) {
      fail = index
      return true
    }
    
    if (index === 0) return false
    
    const prev = words[index - 1]
    
    if (el[0] !== prev[prev.length - 1]) {
      fail = index
      return true
    }
    
    if (words.findIndex((item, idx) => idx < index && el === item) !== -1) {
      fail = index
      return true
    }
  })

  if (fail === null) return [0, 0]

  return [(fail % n) + 1, Math.ceil((fail + 1) / n)]
}
