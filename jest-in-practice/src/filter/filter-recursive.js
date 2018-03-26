'use strict'

const filter = (arr = [], func = item => item) => {
  return (function filterInternal (arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    return arrayInternal.length === 0
      ? []
      : (func(head, counter, arr) ? [head] : []).concat(filterInternal(tail, ++counter))
  })(arr, 0)
}

export default filter
