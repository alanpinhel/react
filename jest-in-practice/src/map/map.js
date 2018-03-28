'use strict'

const map = (arr = [], func = item => item) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('The first parameter should be an array')
  }

  if (typeof func !== 'function') {
    throw new TypeError('The second parameter must be a function')
  }

  let newArray = []

  arr.forEach((element, index) => {
    newArray.push(func(element, index, arr))
  })

  return newArray
}

export default map
