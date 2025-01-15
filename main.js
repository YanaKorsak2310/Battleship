//позиция коробля
const randomLoc = 2 // от 0 и до 4
const location1 = randomLoc
const location2 = location1 +1
const location3 = location2 + 1

// потоплен или нет
let isSunk = false
// предролагаемая позиция коробля (выстрел)
let guess
//добавляем счетчик попаданий
let hits = 0

while (isSunk === false) {
  // не забываем, что строку нужно превратить в чило
  guess = +prompt('Fire! enter a number 0-6')
  if (guess < 0 || guess > 6) {
    alert('Please, enter a valid cell number')
  } else {
    // логическое "или"
    if (guess === location1 || guess === location2 || guess === location3) {
      alert('HIT!')
      // считаем попадания
      hits = hits + 1
      // если подбили
      if (hits === 3) {
        isSunk = true
        alert('You sank the battleship')
      }
    } else {
      alert('MISS')
    }
  }
}
