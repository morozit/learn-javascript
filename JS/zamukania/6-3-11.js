const numbersArray1 = [1, 5, 2, 3, 10, 1, 5, 2, 3, 7];
const numbersArray2 = [2, 5, 8, 7, 4, 1, 5, 2, 3];


const calcMax = function() { 
  return function (numbers) {
    
    return Math.max(...numbers)
  }
}



const maxNum1 = calcMax()(numbersArray1);

const maxNum2 = calcMax()(numbersArray2);


const message1 = `Найбільше чсило: ${maxNum1}`

const message2 = `Найбільше чсило: ${maxNum2}`


console.log(message1);

console.log(message2);

// --------------------------------------------