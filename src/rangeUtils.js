const SCALE_END = 'end'
const SCALE_START = 'start'

export function syncRanges(inputRanges, range, index) {
  let ranges = [...inputRanges]
  let currentRight = range[1]
  const rightNeighbor = ranges[index + 1]
  if (rightNeighbor) {
    const nextRight = rightNeighbor[1]
    if (currentRight >= nextRight - 1) {
      currentRight = nextRight - 2
      rightNeighbor[0] = rightNeighbor[1] - 1
    } else {
      rightNeighbor[0] = currentRight + 1
    }
  }
  ranges[index][1] = currentRight
  return ranges
}

export function fillGaps(data, mode = SCALE_END) {
  if (data.ranges && data.ranges.length < 2) return data
  const { descriptions } = data
  let ranges = standardizeRanges(data.ranges)
  ranges = scale(ranges, mode)
  let output = fillMissingGaps(ranges, descriptions)
  return output
}

function scale(inputRanges, mode) {
  let ranges = [...inputRanges]
  for (let i = 0; i < ranges.length - 2; i++) {
    if (!enoughForNewRange(ranges, i, i + 1)) {
      let leftRange = ranges[i]
      let rightRange = ranges[i + 1]
      if (mode === SCALE_END) {
        let rightStart = rightRange[0]
        leftRange[1] = rightStart - 1
      } else if (mode === SCALE_START) {
        let leftEnd = leftRange[1]
        rightRange[0] = leftEnd + 1
      }
    }
  }
  return ranges
}

function standardizeRanges(ranges) {
  // return a new array that
  // 1 - ensure left value of each range is always <= right value
  // 2 - sort ranges by left values of each range

  return ranges.map((range) => {
    const left = Math.min(...range)
    const right = Math.max(...range)
    return [left, right]
  })
}

function enoughForNewRange(ranges, leftIndex, rightIndex) {
  return ranges[rightIndex][0] - ranges[leftIndex][1] > 2
}

function fillMissingGaps(inputRanges, inputDescriptions) {
  let ranges = [...inputRanges]
  let descriptions = [...inputDescriptions]
  for (let rightIndex = ranges.length - 1; rightIndex > 0; rightIndex--) {
    const leftIndex = rightIndex - 1
    if (enoughForNewRange(ranges, leftIndex, rightIndex)) {
      const missingRange = calculateMissingRange(ranges, leftIndex, rightIndex)
      ranges.splice(rightIndex, 0, missingRange)
      descriptions.splice(rightIndex, 0, '')
    }
  }
  return { ranges, descriptions }
}

function calculateMissingRange(ranges, leftIndex, rightIndex) {
  const left = ranges[leftIndex][1] + 1
  const right = ranges[rightIndex][0] - 1
  return [left, right]
}
