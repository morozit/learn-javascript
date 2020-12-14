// Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// let getMin = function (a, b) {
//   return a > b ? a : b;
// }

// let min = getMin(2, 1);

// min (1, 2);
// console.log(min);

// console.log(getMin(5, 10));
// 
// const numbersArray = [1, 5, 2, 3, 10];

// const getMax = function (numbersArray) {

//   return Math.max(...numbersArray)
  
// }

// const message = `Найбільши чсило: ${getMax(numbersArray)}`

// console.log(message);

// ----------------------------------------------------------------


// const numbersArray1 = [1, 5, 2, 3, 10, 1, 5, 2, 3, 7];
// const numbersArray2 = [2, 5, 8, 7, 4, 1, 5, 2, 3];

// const getMax = function (numbers) {
//   return Math.max(...numbers)
// }


// const maxNum1 = getMax(numbersArray1);

// const maxNum2 = getMax(numbersArray2);


// const message1 = `Найбільши чсило: ${maxNum1}`

// const message2 = `Найбільши чсило: ${maxNum2}`


// console.log(message1);

// console.log(message2);

// ----------------------------------------------------------------

const numbersArray1 = [1, 5, 2, 3, 10, 1, 5, 2, 3, 7];
const numbersArray2 = [2, 5, 8, 7, 4, 1, 5, 2, 3];

const getMax = function (numbers) {
  return Math.max(...numbers)
}


const maxNum1 = getMax(numbersArray1);

const maxNum2 = getMax(numbersArray2);


const message1 = `Найбільши чсило: ${maxNum1}`

const message2 = `Найбільши чсило: ${maxNum2}`


console.log(message1);

console.log(message2);