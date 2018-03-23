'use strict'

export default (arr = [], func = (item) => item) => {
  let newArray = []

  arr.forEach((element, index) =>
    newArray.push(func(element, index, arr)))

  return newArray
}
