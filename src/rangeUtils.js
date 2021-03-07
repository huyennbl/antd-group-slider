export function syncRanges(inputRanges, range, index) {
  let ranges = [...inputRanges]
  let currentRight = range[1]
  const rightNeighbor = ranges[index + 1]
  if (rightNeighbor) {
    const nextRight = rightNeighbor[1]
    if (currentRight >= nextRight - 1) {
      currentRight = nextRight - 1
      rightNeighbor[0] = rightNeighbor[1]
    } else {
      rightNeighbor[0] = currentRight + 1
    }
  }
  ranges[index][1] = currentRight
  return ranges
}

export function fillGaps(data, config = { fillGaps: true }) {
  if (!config.fillGaps) return data
  if (data.ranges && data.ranges.length < 2) return data
  const { descriptions } = data
  let ranges = standardizeRanges(data.ranges)
  let output = fillMissingGaps(ranges, descriptions)
  return output
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
  return ranges[rightIndex][0] - ranges[leftIndex][1] > 1
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
