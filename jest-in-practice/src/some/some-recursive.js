'use strict'

const some = (arr, func) => {
  return (function someIntenal(arrInternal, counter) {
    const [head, ...tail] = arrInternal
    return arrInternal.length === 0
      ? false
      : func(head, counter, arr)
        ? true
        : someIntenal(tail, ++counter)
  })(arr, 0)
}

export default some
