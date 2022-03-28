// "use strict"; //строгий режим

// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number);

// Общение с пользователем

// alert('Hello');

// const result = confirm(' Are you here?');      подтверждение действия пользователем
// console.log(result);

// const answer = prompt('How old are you?', '');    ответ пользователя
// console.log(answer);

// const answers = [];      ответы на вопросы пользователем(массив)

// //  answers[0] = prompt('Your name' , ' ');
// //  answers[1] = prompt('Your lastName ', ' ');
// //  answers[2] = prompt('How old are you?', ' ');

// //  document.write(answers);
// console.log(typeof(answers) );

// Интерполяция

//   const category = 'toys';

//   console.log(`http://someurl.com/${category}/5`);

//   const user = 'Ruslan';

//   alert(`Привет, ${user}`);
// Логические операторы

// console.log(2*4 == 8);  // данное выражение ложь, 8 не равно 6
// console.log(2*4 === '8');  //данное выражение правда

// console.log(8%3);
// console.log(9*9);

// console.log(2 + 2 * 2 !== 6 );
// console.log(2 + 2 * 2 === '6' );

// проверка выполнения условия
//  if (4 == 4) {
//       alert('Все верно');
//       console.log('Ok');

//  } else {
//       alert('Ошибка');
//       console.log('Error');
//  }

//  var shoppingDone = true;         //Рабочие условия, примеры

//  if (shoppingDone === true) {
//    var childsAllowance = 10;
//  } else {
//    var childsAllowance = 5;
//  }
//  console.log(childsAllowance);

// __ __ __ __ __ __ __ __ __ __ __

//  var select = document.querySelector('select');
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   var choice = select.value;

//   if (choice === 'sunny') {
//     para.textContent = 'Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.';
//   } else if (choice === 'rainy') {
//     para.textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада, слепить снеговика.';
//   } else if (choice === 'overcast') {
//     para.textContent = 'Дождя нет, все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
//   } else {
//     para.textContent = '';
//   }
// }
// __ __ __ __ __ __ __ __ __ __ __

// const number = 50;                  switch делает точное сравнение
// switch (number) {
//   case 49:
//     console.log('Не верно');
//     break;

//   case 55:
//     console.log('В другой раз');
//     break;

//   case 50:
//     console.log('HIT');
//     break;

//   default:
//     console.log('Не в этот раз');
//     break;
// }

// __ __ __ __ __ __ __ __ __ __ __     Цыклы    __ __ __ __ __ __ __ __ __ __
// Примеры

// let number = 50;

// while (number <= 55) {
//   console.log(number);
//   number++;                    // Постоянно увеличивает чило на 1

// }

// let num = 50;
//  do {
//    console.log(num);
//    num++;
//  }
//  while (num < 55);

//    let numb = 70;

//   //  for (let i = 2; i < 12; i++){
//   //  console.log(numb++);
//   // }

//   for (let i = 1; i < 10; i++){
//   if ( i === 6) {
//     // break;
//     continue;          // продолжает выполнение операции пропустив число 'i'
//   }
//   console.log(i);
// }

// const obj = {
//   a1: 1,
// };
// for (let i = 5; i <= 100; i++) {
//   obj["a" + i] = i;                        // obj['a1'] = 1
// }
// console.log(obj);
// __ __ __ __ __ __ __ __ __ __ __     Цыклы  ЗАДАЧИ  __ __ __ __ __ __ __ __ __ __

//  ___  ___  ___  ___  ___  ___ 1) Вывести числа от 4 до 400 на экран

// let out = document.getElementById("out");
// let tmp = "";
// for (let i = 4; i < 400; i++) {
//   tmp = tmp + i + "";
// }
// out.innerHTML = tmp;

// __ __ __ __ __ __ __ __ __ __ __     Функции. Стрелочные функции(ES6)    __ __ __ __ __ __ __ __ __ __

// function showFirstMessage() {
//   console.log("Hello World");
// }
// showFirstMessage();

// АНАЛОГИЧНАЯ ЗАПИСЬ ВЕРХНЕГО ВАРИАНТА

// function showFirstMessage(numb) {
//   console.log(numb);
// }
// showFirstMessage(123);

// функции с переменными

// let num = 20;
// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
// }
// showFirstMessage("Hello World");
// console.log(num);

// function calc(a, b, c) {
//   return a * b + c; // !! После return - ничего не задается !!
// }
// console.log(calc(4, 5, 5));
// console.log(calc(9, 7, 7));

// function ret() {
//   let num = 50;
//   return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const q1 = function () {
//   console.log("Hello");
// };
// q1();

// const calc = (a, b, c) => a * b + c; // работает только для однострочных функций. В др.случае ставим {};
// console.log(calc(2, 2, 3));

// __ __ __ __ __ __ __ __ __ __ __    Методы и свойства сторок и чисел    __ __ __ __ __ __ __ __ __ __

// const str = "Education start";
// console.log(str.length); // выводит число символов в стоке с учетом пробелов

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length); // выводит число елементов в масиве

// const st = "Education";
// // console.log(st.toLowerCase());
// console.log(st.toUpperCase());
// console.log(st);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit")); // (ПОИСК ПОДСТРОКИ) ищет положение искомого в строке начиная с 0

// const logg = "Hello World";
// // console.log(logg.slice(6)); // вырезает елементы начиная с 6го(возможно вырезать по любой елемент (6, 11) поддерживает отрицательные значения)
// // console.log(logg.substring(0, 5)); //тоже самое НО не поддерживает отрицательные значения
// // console.log(logg.substr(6, 5)); // во втором аргументе данной команды мы показываем сколько символов начиная с 6го вырезать

// // ОКРУГЛЕНИЕ!!

// const num = 12.6;
// console.log(Math.round(num)); // Математическая команда для округления чисел

// const test = "12.2px";
// console.log(parseInt(test)); // переводит значение в другую систему изчисления(В данном примере из пикселей в число)

// __ __ __ __ __ __ __ __ __ __ __   Функции Callback    __ __ __ __ __ __ __ __ __ __

// function first() {
//   setTimeout(function () {
//     console.log(1);
//   }, 500); // задержка в выполнении функции в 500 милисекунд
// }

// function second() {
//   console.log(2);
// }
// first();
// second();

// function LearnJS(lang, callback) {   //пример работы callback функции
//   console.log(`Я учу: ${lang}`);
//   callback();
// }
// LearnJS("JavaScript", function () {    // передача анонимной функции function()
//   console.log("Я прошел этот урок");
// });

// function LearnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log("Я прошел этот урок");
// }
// LearnJS("JavaScript", done); // функция done является тем самым callback

// __ __ __ __ __ __ __ __ __ __ __   Объекты, деструктуризация объектов (ES6)    __ __ __ __ __ __ __ __ __ __

const options = {
  name: "test",
  width: 1024,
  hight: 1024,
  styles: {
    bg: "red",
    color: "black",
  },
  makeTest: function () {
    console.log("Test");
  },
};
options.makeTest();

const { color, bg } = options.styles;
console.log(bg);

console.log(Object.keys(options.styles)); // выводит колличество елементов в массиве

// delete options.styles; // удаляет выбранное свойство объекта
// console.log(options);

// for (let key in options) {               // Выводит записанные свойства в объект
//   console.log(`Свойство ${key} имеет значение ${options[key]} `);
// }
// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       //Вводим переменную для определения колличества елементов во вложенном массиве
//       console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]} `);
//     counter++;    // счетчик
//   }
// }
// console.log(counter);
