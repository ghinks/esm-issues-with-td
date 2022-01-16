import * as td from 'testdouble'
import { expect } from 'chai'
import isNumber from './index.js'

describe('ESM test double experiments', () => {
  describe('simple scenario', () => {
    before(() => {

    })
    after(() => {

    })
    beforeEach(() => {

    })
    afterEach(() => {

    })
    it('should expect to get 5 truthy results', () => {
      const arrayUnderTest = [1, 2, 3, 4, 5]
      const result = isNumber(arrayUnderTest)
      expect(result).to.be.an('Array')
      expect(result.length).to.equal(5)
      result.forEach((v) => expect(v).to.be.true)
    })
  })

  describe('complex scenario', () => {
    before(() => {

    })
    after(() => {

    })
    beforeEach(async () => {
      const numMock = () => [false]
      await td.replaceEsm('is-number', () => false)
    })
    afterEach(() => {

    })
    it('should expect to get 5 truthy results', async () => {
      const isNumber = (await import('./index.js')).default
      const arrayUnderTest = [1, 2, 3, 4, 5]
      const result = isNumber(arrayUnderTest)
      expect(result).to.be.an('Array')
      expect(result.length).to.equal(5)
      result.forEach((v) => expect(v).to.be.true)
    })
  })
})
