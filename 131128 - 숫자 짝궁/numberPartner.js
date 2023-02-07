function solution(X, Y) {
  let answer = []
  let arr = {}
  let arr1 = []
  let arr2 = []

  if (X.length >= Y.length) {
    arr1 = X.split('')
    arr2 = Y.split('')
  } else {
    arr1 = Y.split('')
    arr2 = X.split('')
  }

  arr2.forEach(el => {
    arr[el] = (arr[el] || 0) + 1
  })

  arr1.forEach(el => {
    if (arr[el]) {
      answer.push(el)
      arr[el]--
    }
  })
    
  const str = answer.sort((a, b) => b - a).join('')

  return str === '' ? '-1' : Number(str) === 0 ? '0' : str
}

console.log(solution('100', '2345')) //	'-1'
console.log(solution('100', '203045')) //	'0'
console.log(solution('100', '123450')) //	'10'
console.log(solution('12321', '42531')) //	'321'
console.log(solution('5525', '1255')) //	'552'
