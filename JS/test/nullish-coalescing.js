// Это защищает нас от случайного использования значения по умолчанию при появлении в выражениях значений, 
// распознаваемых как false, но при этом позволяет выявлять значения null и undefined, 
// не прибегая к тернарному оператору и к проверке вида != null.


import test from 'ava';

test('Nullish coalescing defaults null', (t) => {
  t.is(null ?? 'default', 'default');
});

test('Nullish coalescing defaults undefined', (t) => {
  t.is(undefined ?? 'default', 'default');
});

test('Nullish coalescing defaults void 0', (t) => {
  t.is(void 0 ?? 'default', 'default');
});

test('Nullish coalescing does not default 0', (t) => {
  t.is(0 ?? 'default', 0);
});

test('Nullish coalescing does not default empty strings', (t) => {
  t.is('' ?? 'default', '');
});

test('Nullish coalescing does not default false', (t) => {
  t.is(false ?? 'default', false);
});