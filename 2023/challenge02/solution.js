let initialNumber = 0
let numbers = []
const actions = {
  '#': (number) => {
    return Number(number) + 1
  },
  '@': (number) => {
    return Number(number) - 1
  },
  '*': (number) => {
    return Number(number) * Number(number)
  },
  '&': (number) => {
    numbers.push(number)
    return number
  },
}

const compiler = (code) => {
  code.split('').forEach((character) => {
    initialNumber = actions[character](initialNumber)
  })
  return numbers.join('')
}

console.log(
  compiler(
    '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
  )
)
