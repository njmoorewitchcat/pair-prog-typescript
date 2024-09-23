import { calculateResult } from '.'

describe('calculating result', () => {
  it('returns empty when range is zero', () => {
    const result = calculateResult(0)

    expect(result).toBe('')
  })
})

