function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateGarbled(garbledLength = 5) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '1234567890'

  let collection = lowerCaseLetters.split('')

  // start generating password
  let garbled = ''

  for (let i = 0; i < garbledLength; i++) {
    garbled += sample(collection)
  }
  // return the generated password
  return garbled
}

module.exports = generateGarbled