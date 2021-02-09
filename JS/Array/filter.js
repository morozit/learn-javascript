// ! добавляє елементи в кінець масиву

// -----------------------------------------------------------
let complexArray = [
  {'name': 'Ivan ', 'order': 12, 'sum': '123.5'},
  {'name': '    Roman ', 'order': 12, 'sum': '123,5'},
  {'name': 'Stepan  ', 'order': 12, 'sum': '123,,5'},
  {'name': '   Petro ', 'order': 12, 'sum': '123. 5'},
];
// -----------------------------------------------------------

// console.log(complexArray);


// -----------------------------------------------------------
let simpleArray = [4, 2, 5, 12, 10, 42, 7, 0, 52, 32, -42];
// ------------------------------------------------------------



let filtered = [12, 5, 8, 130, 44, 0].filter(isBigEnough);
console.log('[12, 130, 44]', filtered);

let filtered1 = simpleArray.filter(isBigEnough);
console.log(filtered1);


function isBigEnough(value) {
  return value >= -1;  //повертає true false
}


let filtered2 = simpleArray.filter(item => {
  if (item > -1 ) return true;
});
console.log(filtered2);