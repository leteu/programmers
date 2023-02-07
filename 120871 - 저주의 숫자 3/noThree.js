const solution = (n) => {
  let result = 0
  const chkThree = (value) => /3/g.test(value) || !(value % 3) ? chkThree(value + 1) : value
  
  Array.from({ length: n }).forEach(() => {
    result += 1
    result = chkThree(result)
  })
  
  return result
}


console.log(solution(15)) // 25
console.log(solution(40)) // 76
