// ! slice(begin, end) 
//?  Используетса для создания копии исходного масива
//?  НЕ мутирует исходный масив

//? Параметр begin определяет индекс, с которого следует начинать извлечение.
//? Параметр end, определяет индекс элемента, на котором следует закончить извлечение. 

// -----------------------------------------------------------
let complexArray = [
  {'name': 'Ivan ', 'order': 12, 'sum': '123.5'},
  {'name': '    Roman ', 'order': 12, 'sum': '123,5'},
  {'name': 'Stepan  ', 'order': 12, 'sum': '123,,5'},
  {'name': '   Petro ', 'order': 12, 'sum': '123. 5'},
];
// -----------------------------------------------------------


let newComplexArray = complexArray.slice(0, 2);
newComplexArray.unshift({'name': 'Dimon', 'order': 55, 'sum': '123.5'})

console.log('newComplexArray', newComplexArray);

console.log(complexArray)



// -----------------------------------------------------------
let simpleArray = [4, 2, 5, 12, 10, 42, 7, 0, 52, 32, -42];
// ------------------------------------------------------------

// console.log(simpleArray);