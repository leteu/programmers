function solution(players, callings) {
  const hashMap = new Map([
    ...Object.entries(players),
    ...Object.entries(players).map((el) => el.reverse())
  ])

  return callings.reduce((acc, cur) => {
    const idx = Number(hashMap.get(cur))
    const pass = hashMap.get(String(idx - 1))

    hashMap.set(cur, String(idx - 1))
    hashMap.set(String(idx - 1), cur)
    hashMap.set(pass, String(idx))
    hashMap.set(String(idx), pass)

    acc.splice(idx - 1, 2, cur, pass)

    return acc
  }, players)
}

console.log(// ["mumu", "kai", "mine", "soe", "poe"]
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
)
