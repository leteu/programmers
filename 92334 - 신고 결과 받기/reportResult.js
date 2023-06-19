function solution(id_list, report, k) {
  /**
   * @type { Map<string, Set<string>> } 
   */
  const reportMap = report.reduce((acc, cur) => {
    const [reporter, target] = cur.split(' ')

    if (!acc.get(target)) {
      acc.set(target, new Set())
    }

    acc.get(target).add(reporter)

    return acc
  }, new Map())

  const answer = id_list.map(() => 0)

  Array.from(reportMap)
    .filter(([_, reporters]) => reporters.size >= k)
    .map(([_, reporters]) => Array.from(reporters))
    .flat()
    .forEach((el) => {
      answer[id_list.indexOf(el)] += 1
    })

  return answer
}

console.log( // [2,1,1,0]
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
    2
  )
)
console.log( //[0,0]
  solution(
    ["con", "ryan"],
    ["ryan con", "ryan con", "ryan con", "ryan con"],
    3
  )
)