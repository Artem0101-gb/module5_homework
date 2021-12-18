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