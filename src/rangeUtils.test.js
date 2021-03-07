import { fillGaps, syncRanges } from './rangeUtils'

describe('fillGaps()', () => {
  const overlappingRanges = [
    [0, 20],
    [10, 30],
    [50, 100]
  ]
  const normalRanges = [
    [0, 20],
    [25, 30],
    [50, 100]
  ]
  const withOneStepBetweenRange = [
    [0, 20],
    [22, 30],
    [50, 100]
  ]
  const descriptions = ['first', 'second', 'third']
  describe('overlappingRanges', () => {
    const input = {
      ranges: overlappingRanges,
      descriptions
    }
    const output = fillGaps(input)
    it('should return correct ranges', () => {
      const { ranges, descriptions } = output
      expect(ranges).toEqual([
        [0, 20],
        [10, 30],
        [31, 49],
        [50, 100]
      ])
      expect(descriptions).toEqual(['first', 'second', '', 'third'])
    })
    it('should not modify input', () => {
      expect(input.ranges).toEqual(overlappingRanges)
    })
  })
  describe('normalRanges', () => {
    const input = {
      ranges: normalRanges,
      descriptions
    }
    const output = fillGaps(input)
    it('should return correct ranges', () => {
      const { ranges, descriptions } = output
      expect(ranges).toEqual([
        [0, 20],
        [21, 24],
        [25, 30],
        [31, 49],
        [50, 100]
      ])
      expect(descriptions).toEqual(['first', '', 'second', '', 'third'])
    })
    it('should not modify input', () => {
      expect(input.ranges).toEqual(normalRanges)
    })
  })
  describe('withOneStepBetweenRange', () => {
    const input = {
      ranges: withOneStepBetweenRange,
      descriptions
    }
    const output = fillGaps(input)
    it('should return correct ranges', () => {
      const { ranges, descriptions } = output
      expect(ranges).toEqual([
        [0, 20],
        [21, 21],
        [22, 30],
        [31, 49],
        [50, 100]
      ])
      expect(descriptions).toEqual(['first', '', 'second', '', 'third'])
    })
    it('should not modify input', () => {
      expect(input.ranges).toEqual(withOneStepBetweenRange)
    })
  })
})

describe('syncRanges()', () => {
  const ranges = [
    [0, 25],
    [26, 26],
    [27, 50],
    [51, 100]
  ]
  it('should sync ranges correctly', () => {
    const output1 = syncRanges(ranges, [0, 35], 0)
    expect(output1).toEqual([
      [0, 25],
      [26, 26],
      [27, 50],
      [51, 100]
    ])
    const output2 = syncRanges(ranges, [27, 40], 2)
    expect(output2).toEqual([
      [0, 25],
      [26, 26],
      [27, 40],
      [41, 100]
    ])
    const output3 = syncRanges(ranges, [27, 100], 2)
    expect(output3).toEqual([
      [0, 25],
      [26, 26],
      [27, 99],
      [100, 100]
    ])
  })
})
