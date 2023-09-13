let err = 0; //переменная для хранения кол-ва ошибок
let subj = 0; //переменная о правильности решения
let tempString = 0; //пееменная для временной строки

let askName = prompt('Пожалуйста, введите свое имя');
console.log('Здравствуйте, ', askName);
tempString =
  'Здравствуйте, ' + askName + '. Теперь, пожалуйста, укажите свой возраст.';
//console.log(askName);
let askAge = prompt(tempString);
console.log(
  'Я думаю, что в ваши ',
  askAge,
  ' вы легко справитесь с вычислениями'
);

//округление до сотых
var rounded = function (number) {
  return +number.toFixed(2);
};
//----------------

//operation addition
let askSum = prompt('Реши пример на сложение 54+73');
let summ = 54 + 73;
if (askSum == summ) {
  subj = 'ответ верный';
} else {
  subj = 'ответ неверный';
  err = err + 1;
}
console.log('54 + 73 = ', summ, ' Ваш ответ - ', askSum, subj);
// --------------

//operation subtraction
let askDiff = prompt('Реши пример на вычитание 54-13');
let diff = 54 - 13;
if (askDiff == diff) {
  subj = 'ответ верный';
} else {
  subj = 'ответ неверный';
  err = err + 1;
}
console.log('54 - 13 = ', diff, ' Ваш ответ - ', askDiff, subj);
// --------------

//operation multiplication
let askProduct = prompt('Реши пример на умножение 54*3');
let product = 54 * 3;
if (askProduct == product) {
  subj = 'ответ верный';
} else {
  subj = 'ответ неверный';
  err = err + 1;
}
console.log('54 * 3 = 162 Ваш ответ - ', askProduct, subj);
// --------------

//operation division
let askDiv = prompt('Реши пример на деление 55/7');
let quotient = 55 / 7;
if (askDiv == quotient) {
  subj = 'ответ верный';
} else {
  subj = 'ответ неверный';
  err = err + 1;
}
console.log('55 / 7 = ', rounded(quotient), 'Ваш ответ - ', askDiv, subj);

// --------------

//деление с остатком
let askRes = prompt('Реши пример на остаточное деление 54/11');
let rest = 54 % 11;
if (askRes == rest) {
  subj = 'ответ верный';
} else {
  subj = 'ответ неверный';
  err = err + 1;
}
console.log('54 / 11 = ', rest, 'Ваш ответ - ', askRes, subj);
// --------------

//вывод кол-ва ошибок
console.log('Вы допустили ', err, 'ошибок');
tempString = 'Вы допустили ' + err + ' ошибок';
alert(tempString);
