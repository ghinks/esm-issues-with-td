import isNumber from 'is-number'

const checkForNumbers = (arrayOfChecks) => {
  if (arrayOfChecks instanceof Array) {
    return arrayOfChecks.reduce((p, c) => {
      p.push(isNumber(c))
      return p
    }, [])
  } else {
    return []
  }
}

export default checkForNumbers
