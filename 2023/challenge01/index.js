import fs from 'fs'

// 1º Read the file
const fileContent = fs.readFileSync('./message_01.txt', 'utf8')

// 2º Split the file content into words
const words = fileContent.split(' ')

// 3º Count the words
const WordsAndCounts = new Set()

words.map((word, index, array) => {
  const numberRepeatWord = array.filter(
    (wordToCount) => word === wordToCount
  ).length

  return WordsAndCounts.add(word + numberRepeatWord)
})

// 4º Return string
console.log(Array.from(WordsAndCounts).join(''))

// murcielago15leon15jirafa15cebra6elefante15rinoceronte15hipopotamo15ardilla15mapache15zorro15lobo15oso15puma2jaguar14tigre10leopardo10gato12perro12caballo14vaca14toro14cerdo14oveja14cabra14gallina10pato10ganso10pavo10paloma10halcon11aguila11buho11colibri9canario8loro8tucan8pinguino7flamenco7
