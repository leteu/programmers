function solution(picks, minerals) {
  // 가지고 있는 곡괭이 총개수
  const maxLen = picks.reduce((acc, cur) => acc + cur, 0)

  // 곡괭이로 캘 수 있는 만큼 자르고 나머지 버리기
  minerals = minerals.splice(0, maxLen * 5)

  // 광물 곡괭이 몇 개로 캐야 하는지
  const length = Math.ceil(minerals.length / 5)

  let [diaPick, ironPick, stonePick] = picks

  return Array
    .from({ length }, () => {              /* 피로도 계산 */
      const { diamond, iron, stone } =
        minerals                           // 광물에서
          .splice(0, 5)                    // 앞에서부터 5개 자르고
          .reduce(                         // 개수 카운팅
            (acc, cur) => {
              acc[cur]++

              return acc
            },
            { diamond: 0, iron: 0, stone: 0 }
          )

      return [
        diamond * 1  + iron * 1 + stone * 1,
        diamond * 5  + iron * 1 + stone * 1,
        diamond * 25 + iron * 5 + stone * 1
      ]
    })
    .sort((a, b) => b[2] - a[2])            /* 돌 곡괭이 피로도 큰 순으로 정렬 */
    .reduce((acc, cur) => {                 /* 곡괭이 카운트다운 및 피로도 sum */
      if (diaPick > 0) {
        diaPick--
        return acc += cur[0]
      }

      if (ironPick > 0) {
        ironPick--
        return acc += cur[1]
      }

      if (stonePick > 0) {
        stonePick--
        return acc += cur[2]
      }
    }, 0)
}

console.log( //12
  solution(
    [1, 3, 2],
    [
      'diamond',
      'diamond',
      'diamond',
      'iron',
      'iron',
      'diamond',
      'iron',
      'stone',
    ]
  )
)
console.log( //50
  solution(
    [0, 1, 1],
    [
      'diamond',
      'diamond',
      'diamond',
      'diamond',
      'diamond',
      'iron',
      'iron',
      'iron',
      'iron',
      'iron',
      'diamond',
    ]
  )
)
