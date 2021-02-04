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


// simpleArray.push('testPush');
// console.log(simpleArray);


// let simpleArray = [];
document.querySelector('#push').onclick = () => {
  let id = +document.querySelector('#el-array').value;
  if(!simpleArray.includes(id)) {
    simpleArray.push(id);
  } else {
    console.log(`елемент с id ${id} уже существует, проверте id`);
  }
  console.log(simpleArray);
}

document.querySelector('#pop').onclick = () => {
  let id = +document.querySelector('#el-array').value;
  let el = simpleArray.pop()
    console.log(`последний елемент масива с id ${el} удален`);
  
  console.log(simpleArray);
}

document.querySelector('#unshift').onclick = () => {
  let id = +document.querySelector('#el-array').value;
  if(!simpleArray.includes(id)) {
    simpleArray.unshift(id);
  } else {
    console.log(`елемент с id ${id} уже существует, проверте id`);
  }
  console.log(simpleArray);
}

document.querySelector('#shift').onclick = () => {
  let id = +document.querySelector('#el-array').value;
  let el = simpleArray.shift()
    console.log(`первий елемент масива с id ${el} удален`);
  
  console.log(simpleArray);
}
