// ! task-1
let a = 1, b = 1;

let c = ++a; // ? 2
let d = b++; // ? 1

// ! task-2
let q = 2;

let x = 1 + (q *= 2);

// ! task-3
"" + 1 + 0  // ? 10
"" - 1 + 0  // ? -1
true + false  // ? 1 
6 / "3"  // ? 2
"2" * "3"  // ? 6
4 + 5 + "px"  // ? "9px"
"$" + 4 + 5  // ? "$45"
"4" - 2  // ? 2 
"4px" - 2  // ? Nan
7 / 0   // ? Infinity
"  -9  " + 5  // ?  "  -9  5"
"  -9  " - 5  // ?  14
null + 1  // ? 1 
undefined + 1  // ? NaN
" \t \n" - 2  // ? -2

// ! task-4
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
let c = a + b;
alert(c);