// FIXME: 효율성 0점이라 엎어야함

function solution(info, query) {
  const infoTable = info.map((cur) => cur.split(/\s/))

  return query.map((el) => {
    const [lang, role, skill, food, score] = el.replace(/and\s/gi, '').split(/\s/)

    return infoTable.reduce((cnt, cur) => {
      if (
        (lang === '-' || cur[0] === lang) &&
        (role === '-' || cur[1] === role) &&
        (skill === '-' || cur[2] === skill) &&
        (food === '-' || cur[3] === food) &&
        (score === '-' || Number(cur[4]) >= Number(score))
      )
        cnt++

      return cnt
    }, 0)
  })
}

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ]
  )
)
