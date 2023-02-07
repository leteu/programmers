function solution(commands) {
  let excel = {};
  const answer = [];

  const getUpper = (key) => {
    const target = excel[key]

    if (target?.upper) return getUpper(target.upper)

    return [key, target]
  }

  commands.forEach((command) => {
    const splitArr = command.split(' ')

    switch (splitArr[0]) {
      case 'UPDATE': {
        if (splitArr.length === 4) {
          const [, r, c, value] = splitArr
          const [upperKey] = getUpper(`${r} ${c}`)

          excel[upperKey] = {
            ...excel[upperKey],
            value
          }
        } else {
          const [_, prev, next] = splitArr

          Object.entries(excel).forEach(([key, value]) => {
            if (value.value === prev) {
              excel[key].value = next
            }
          })
        }

        break
      }
      case 'MERGE': {
        const [, r1, c1, r2, c2] = splitArr

        const [upperKey1, upperValue1] = getUpper(`${r1} ${c1}`)
        const [upperKey2, upperValue2] = getUpper(`${r2} ${c2}`)

        if (upperKey1 === upperKey2) {
          break
        }

        if (!upperValue1) {
          excel[upperKey1] = {
            value: ''
          }
        }

        if (!upperValue2) {
          excel[upperKey2] = {
            value: ''
          }
        }

        const temp = upperValue1?.value || upperValue2?.value || ''

        excel[upperKey2].upper = upperKey1
        excel[upperKey2].value = ''

        if (excel[upperKey2].lower?.length) {
          excel[upperKey2].lower.forEach((el) => {
            excel[el].upper = upperKey1
            excel[el].value = ''
          })
        }


        if (!excel[upperKey1]?.lower) {
          excel[upperKey1].lower = []
        }

        excel[upperKey1].lower.push(upperKey2)
        excel[upperKey1].lower = excel[upperKey1].lower.concat(excel[upperKey2]?.lower || [])
        excel[upperKey1].lower = Array.from(new Set(excel[upperKey1].lower))

        if (excel[upperKey2]?.lower) {
          delete excel[upperKey2].lower
        }

        excel[upperKey1].value = temp

        break
      }
      case 'UNMERGE': {
        const [, r, c] = splitArr
        const [target, value] = getUpper(`${r} ${c}`)

        if (!value) {
          return
        }

        const temp = value.value

        excel[target].value = ''

        if (value.lower?.length) {
          value.lower.forEach((el) => {
            delete excel[el].upper
          })
        }

        delete excel[target].lower

        excel[`${r} ${c}`].value = temp

        break
      }
      case 'PRINT': {
        const [, r, c] = splitArr

        const [, value] = getUpper(`${r} ${c}`)

        answer.push(value?.value || 'EMPTY')
        break
      }
    }
  })

  return answer;
}

export { solution }
