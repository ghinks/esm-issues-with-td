import * as td from 'testdouble'
import { expect } from 'chai'

describe('ESM test double experiments', () => {
  describe('complex scenario', () => {
    beforeEach(async () => {
      td.replace('is-number', () => {
        console.log('expect to see this called')
        return false
      })
    })
    afterEach(() => {
      td.reset()
    })
    it('should expect to get 5 truthy results', async () => {
      const isNumber = (await import('./index.js')).default
      const arrayUnderTest = [1, 2, 3, 4, 5]
      const result = isNumber(arrayUnderTest)
      expect(result).to.be.an('Array')
      expect(result.length).to.equal(5)
      result.forEach((v) => expect(v).to.be.false)
    })
  })
})
