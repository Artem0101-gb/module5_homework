let numberEnter = +prompt('Введите число');
if (numberEnter == numberEnter) {
 if (typeof numberEnter == 'number') {
  if (numberEnter % 2 == 0) {
    console.log(numberEnter + ' четное число');
  } else {
    console.log(numberEnter + ' нечётное число');
  } 
 }
} else {
  console.log('Упс, кажется вы ошиблись')
}