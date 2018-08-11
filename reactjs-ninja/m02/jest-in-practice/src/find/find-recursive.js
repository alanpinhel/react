'use strict'

const find = (arr, func) => {
  return (function findInternal (arrInternal, counter) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0
      ? undefined
      : func(head, counter, arr)
        ? head
        : findInternal(tail, ++counter)
  })(arr, 0)
}

export default find
