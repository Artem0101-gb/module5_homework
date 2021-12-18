// Задание 1

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


// Задание 2

let x = 4;

switch (typeof x) {
  case 'number':
    console.log(x + ' - это число');
    break;
  case 'string':
    console.log(x + ' - это строка');
    break;
  case 'boolean':
    console.log(x + ' - это логический тип');
    break;
  default:
    console.log('Тип не определён');
}


// Задание 3

let string = "Привет";
let reverse = string.split('').reverse().join('');
console.log(reverse)


// Задание 4

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(500))


// Задание 5

let arr = ['1', '3', '5'];
console.log(arr.length);
arr.forEach(function(item, index, array) {
  console.log(item);
})


// Задание 6

let arr = [1, 1, 1, 1, 1]
let firstNum = arr[0]
for (let i = 0; i < arr.length; i++) {
  if (firstNum == arr[i]) {
    console.log('true')
  } else {
    console.log('false')
  }
}


// Задание 7

let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i] + ' чётное число')
  } else {
    console.log(arr[i] + ' нечётное число')
  }
}


// Задание 8

let test = new Map([
  ['key01', '01'],
  ['key02', '02'],
  ['key03', '03']
]);

for(let name of test.keys()) {
  console.log(`Название ключа: ${name}`)
}

for(let number of test.values()){
  console.log(`Свойство: ${number}`)
}