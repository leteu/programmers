function solution(polynomial) {
  const reg = /x/
  const arr = polynomial.split(" + ")
  const calculator = {
    x: 0,
    num: 0,
  }

  arr.forEach((el) => {
    const num = Number(el.replace(reg, '') || '0')

    if (reg.test(el)) {
      calculator.x += num || 1
    } else {
      calculator.num += num
    }
  });

  const calcX = `${calculator.x ? `${calculator.x !== 1 ? calculator.x : ''}x` : ''}`
  const plus = `${(calculator.x && calculator.num) ? ' + ' : '' }`
  const calcNum = `${calculator.num ? `${calculator.num}` : ''}`

  return `${calcX}${plus}${calcNum}` || 0
}

console.log(solution("3x + 7 + x")) //	"4x + 7"
console.log(solution("x + x + x")) //	"3x"
console.log(solution("1 + 2 + 3")) // 6
console.log(solution('')) // 0
console.log(solution("1")) // 1
console.log(solution("x")) // x
