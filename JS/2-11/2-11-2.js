// Что выведет код ниже?

alert( alert(1) || 2 || alert(3) );

// Ответ: сначала 1, затем 2.

// alert( alert(1) || 2 || alert(3) );
// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

// Первый оператор ИЛИ || выполнит первый alert(1).
// Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного значения.
// Так как второй операнд 2 является истинным, то вычисления завершатся, результатом undefined || 2 будет 2, которое будет выведено внешним alert( .... ).
// Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет.