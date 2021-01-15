const result = getInit(); // [{ test: 'name' }, { test: 'data }]

console.log(obj[getInit(getFirstValueFromDataBase())[0].test])
// obj.name

// поставь значения функции getInit
// вызови функцию getFirstValueFromDataBase и верни ее значения для getInit
// функция getInit возвращает массив
// обращаемся к нулеву индексу массива
// нулевой индекс это обьект
// обаращемся к свойству test и его значения будет результатом для нашего динамического ключа