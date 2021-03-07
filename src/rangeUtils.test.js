import { fillGaps } from './rangeUtils'
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
const notEnoughSpaceBetweenRanges = [
  [0, 20],
  [22, 30],
  [50, 100]
]
const descriptions = ['first', 'second', 'third']

describe('overlappingRanges', () => {
  describe('scale: end (default)', () => {
    const input = {
      ranges: overlappingRanges,
      descriptions
    }
    const output = fillGaps(input)
    it('should return correct ranges', () => {
      const { ranges } = output
      expect(ranges).toEqual([
        [0, 9],
        [10, 30],
        [31, 49],
        [50, 100]
      ])
    })
    it('should not modify input', () => {
      expect(input.ranges).toEqual(overlappingRanges)
    })
  })
  describe('scale: start', () => {
    const input = {
      ranges: overlappingRanges,
      descriptions
    }
    const output = fillGaps(input, 'start')
    it('should return correct ranges', () => {
      const { ranges, descriptions } = output
      expect(ranges).toEqual([
        [0, 20],
        [21, 30],
        [31, 49],
        [50, 100]
      ])
      expect(descriptions).toEqual(['first', 'second', '', 'third'])
    })
    it('should not modify input', () => {
      expect(input.ranges).toEqual(overlappingRanges)
    })
  })
})

describe('normalRanges', () => {
  describe('scale: end (default)', () => {
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
  describe('scale: start', () => {
    const input = {
      ranges: normalRanges,
      descriptions
    }
    const output = fillGaps(input, 'start')
    it('should return correct ranges', () => {
      const { ranges, descriptions } = output
      console.log('output normal ranges', output)
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
})

describe('notEnoughSpaceBetweenRanges', () => {
  describe('scale: end (default)', () => {
    const input = {
      ranges: notEnoughSpaceBetweenRanges,
      descriptions
    }
    const output = fillGaps(input)
    it('should return correct ranges', () => {
      const { ranges, descriptions } = output
      expect(ranges).toEqual([
        [0, 21],
        [22, 30],
        [31, 49],
        [50, 100]
      ])
      expect(descriptions).toEqual(['first', 'second', '', 'third'])
    })
    it('should not modify input', () => {
      expect(input.ranges).toEqual(notEnoughSpaceBetweenRanges)
    })
  })
  describe('scale: start', () => {
    const input = {
      ranges: notEnoughSpaceBetweenRanges,
      descriptions
    }
    const output = fillGaps(input, 'start')
    it('should return correct ranges', () => {
      const { ranges, descriptions } = output
      expect(ranges).toEqual([
        [0, 20],
        [21, 30],
        [31, 49],
        [50, 100]
      ])
      expect(descriptions).toEqual(['first', 'second', '', 'third'])
    })
    it('should not modify input', () => {
      expect(input.ranges).toEqual(notEnoughSpaceBetweenRanges)
    })
  })
})
