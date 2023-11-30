const actions = {
  initialNumber: 0,
  numbers: [],
  '#': function () {
    actions.initialNumber = actions.initialNumber + 1
  },
  '@': function () {
    actions.initialNumber = actions.initialNumber - 1
  },
  '*': function () {
    actions.initialNumber = actions.initialNumber * actions.initialNumber
  },
  '&': function () {
    actions.numbers.push(actions.initialNumber)
  },
}

const compiler = (code) => {
  code.split('').forEach((character) => actions[character]())
  return actions.numbers.join('')
}

console.log(
  compiler(
    '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
  )
)
