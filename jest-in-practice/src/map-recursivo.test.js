'use strict'

import { expect } from 'chai'
import mapRecursivo from './map-recursivo'

it('mapRecursivo should a be function', () => {
  expect(mapRecursivo).to.be.a('function')
})

it('map([1, 2], item => item) should return [1, 2]', () => {
  expect(mapRecursivo([1, 2], item => item)).to.be.deep.equal([1, 2])
})

it('map([3, 4], item => item) should return [3, 4]', () => {
  expect(mapRecursivo([3, 4], item => item)).to.be.deep.equal([3, 4])
})

it('map([1, 2], item => item + 1) should return [2, 3]', () => {
  expect(mapRecursivo([1, 2], item => item + 1)).to.be.deep.equal([2, 3])
})
