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