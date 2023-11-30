import fs from 'fs'

// 1º Read the file
const fileContent = fs.readFileSync('./claves.txt', 'utf8')

// 2º Split the file content into words
const passwordAndInstructions = fileContent.split('\n')

const invalid = passwordAndInstructions.map((passwordAndInstruction, index) => {
  return passwordAndInstruction
})

function checkPasswordInvalid(passwordAndInstruction, index) {
  const passwordInstruction = passwordAndInstruction.split(':')[0]
  const letter = passwordInstruction.split(' ')[1]
  const minRepetitions = passwordInstruction.split(' ')[0].split('-')[0]
  const maxRepetitions = passwordInstruction.split(' ')[0].split('-')[1]
  const password = passwordAndInstruction.split(':')[1].trim()

  const letterRepeat = password.split('').filter((l) => l === letter).length
  const isValid = letterRepeat < maxRepetitions && letterRepeat > minRepetitions
  // console.log(
  //   passwordInstruction,
  //   letter,
  //   minRepetitions,
  //   maxRepetitions,
  //   password,
  //   letterRepeat < maxRepetitions && letterRepeat > minRepetitions
  // )

  if (isValid) {
    return
  }

  return [password, isValid, index] // isInvalid
}

console.log(invalid)

// invalid.forEach((element, index) => {
//   console.log(index === 43 && element)
// })
