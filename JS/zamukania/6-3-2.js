// const makeShef = function(name) {
   
  // TODO Параметр name это локальная переменная для функции makeShef.
  // TODO Это значит что она будет доступна функции makeDish через замыкание.
  
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const makeShef = function(name) {
// TODO ф-ція яка повертає  ф-цію makeDish(dish)
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };


const makeShef = function(name) {

  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};

const tom = makeShef('Tom');
tom('apple pie'); // Tom is cooking apple pie
tom('beef stew'); // Tom is cooking beef stew

const poly = makeShef('Poly');
poly('pancakes'); // Poly is cooking pancakes
poly('eggs and bacon'); // Poly is cooking eggs and bacon
console.log(makeShef);
console.log(poly);