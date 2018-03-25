'use strict'

const map = (arr = [], func = item => item) => {
  let newArray = []

  arr.forEach((element, index) => {
    newArray.push(func(element, index, arr))
  })

  return newArray
}

export default map
