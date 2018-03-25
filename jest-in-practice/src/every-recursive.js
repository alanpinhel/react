'use strict'

const every = (arr, func) => {
  return (function everyInternal (arrInternal, counter) {
    const [head, ...tail] = arrInternal
    return arrInternal.length === 0
      ? true
      : func(head, counter, arr) ? everyInternal(tail, ++counter) : false
  })(arr, 0)
}

export default every
