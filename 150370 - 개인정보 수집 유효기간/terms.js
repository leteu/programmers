const getTimeStamp = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()).getTime()
}

function solution(today, terms, privacies) {
  const answer = []
  const currentDt = getTimeStamp(new Date(today))
  const termsMap = terms.reduce((acc, cur) => {
    const [key, value] = cur.split(' ')

    acc[key] = Number(value)
    
    return acc
  }, {})
  
  privacies.forEach((el, index) => {
    const term = el.split(' ')[1]
    const date = new Date(el.split(' ')[0])
    const endDt = getTimeStamp(new Date(date.setMonth(date.getMonth() + termsMap[term])))

    if (endDt <= currentDt) {
      answer.push(index + 1)
    }
  })
    
  return answer
}

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])) // [1, 3]
console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"])) // [1, 4, 5]