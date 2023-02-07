function solution(dartResult) {
  var answer = 0;
  let scoreBoard = []
  const scoreReg = /[0-9]{1,2}[A-Z][\*, \#]?/gi
  const isAsterick = (val) => (/[0-9]{1,2}[A-Z][\*]/gi).test(val)
  const isShop = (val) => (/[0-9]{1,2}[A-Z][\#]/gi).test(val)
  const getNum = (val) => Number(val.match(/[0-9]{1,2}/gi).join(''))
  const getMultiple = (val) => {
    const temp = val.match(/[A-Z]/gi).join('')

    return temp === 'S' ? 1 : temp === 'D' ? 2 : 3 
  }

  function getScore(result) {
    const num = getNum(result)
    const multiple = getMultiple(result)

    return num ** multiple
  }

  const arr = dartResult.match(scoreReg)
  
  arr.forEach((el) => {
    if (isAsterick(el)) {
      scoreBoard[scoreBoard.length - 1] = scoreBoard[scoreBoard.length - 1] * 2
      scoreBoard.push(getScore(el) * 2)
    } else if (isShop(el)) {
      scoreBoard.push(getScore(el) * -1)
    } else {
      scoreBoard.push(getScore(el))
    }
  })

  answer = scoreBoard.reduce((a,b) => (a+b)) || 0

  return answer;
}

console.log(solution('1S2D*3T')) //	37
console.log(solution('1D2S#10S')) //	9
console.log(solution('1D2S0T')) //	3
console.log(solution('1S*2T*3S')) //	23
console.log(solution('1D#2S*3S')) //	5
console.log(solution('1T2D3D#	')) //-4
console.log(solution('1D2S3T*')) //	59
