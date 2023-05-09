function solution(s) {
  let answer = [0, 0]

  const translate = (binary) => {
    const orgLength = binary.length

    binary = binary.replace(/0/gi, '')

    answer[0] += 1
    answer[1] += orgLength - binary.length

    if (binary !== '1') {
      translate((binary.length).toString(2))
    }
  }

  translate(s)

  return answer
}

console.log(solution('110010101001'))  // [3,8]
console.log(solution('01110'))         // [3,3]
console.log(solution('1111111'))       // [4,1]
