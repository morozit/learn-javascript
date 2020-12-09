// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete"; // (*)
// sayHi();


let name = "John";
// sayHi("Moroz");
const sayHi = function (test) {
  alert(test + name);
}

name = "Pete"; // (*)
sayHi("Moroz ");