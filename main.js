//позиция коробля
const location1= 3
const location2= 4
const location3 = 5

// потоплен или нет
let isSunk = false
// предролагаемая позиция коробля (выстрел)
let guess;
//добавляем счетчик попаданий
let hits =0

while (isSunk===false) {
  // не забываем, что строку нужно превратить в чило
  guess = +prompt ("Fire! enter a number 0-6")
  // логическое "или"
  if(guess ===location1 || guess===location2 || guess===location3)
    {
    alert("HIT!")
    // считаем попадания
    hits=hits + 1
    // если подбили
    if(hits===3){
    isSunk=true
    alert("You sank the battleship");
  } 
}else{
    alert("MISS");
  }

}