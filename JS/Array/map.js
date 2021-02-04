const z = [
  {'name': 'Ivan ', 'order': 12, 'sum': '123.5'},
  {'name': '    Roman ', 'order': 12, 'sum': '123,5'},
  {'name': 'Stepan  ', 'order': 12, 'sum': '123,,5'},
  {'name': '   Petro ', 'order': 12, 'sum': '123. 5'},
];

// console.log(z);

const zBack = z.map(item => {
  item.name = item.name.trim().toLocaleLowerCase();
  return item;
});


const x = z.map(item => {
  item.order = item.order * 2;
  return item;
})

// console.log(z);

// console.log(zBack);

// console.log(x);
