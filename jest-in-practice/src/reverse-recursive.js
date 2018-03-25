'use strict'

const reverse = (arr) => {
  const [head, ...tail] = arr
  return arr.length <= 1
    ? arr
    : [...reverse(tail), head]
}

export default reverse
