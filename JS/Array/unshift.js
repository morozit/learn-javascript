// ! добавляє елементи в кінець масиву
// -----------------------------------------------------------
let complexArray = [
  {'name': 'Ivan ', 'order': 12, 'sum': '123.5'},
  {'name': '    Roman ', 'order': 12, 'sum': '123,5'},
  {'name': 'Stepan  ', 'order': 12, 'sum': '123,,5'},
  {'name': '   Petro ', 'order': 12, 'sum': '123. 5'},
];

let simpleArray = [4, 2, 5, 12, 10, 42, 7, 0, 52, 32, -42];
// ------------------------------------------------------------


complexArray.push({'name': 'testPush', 'order': 22, 'sum': '999.99'});
// console.log(complexArray);