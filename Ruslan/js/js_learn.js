// "use strict";   //строгий режим

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


   let numb = 70;

  //  for (let i = 2; i < 12; i++){
  //  console.log(numb++);
  // }
 
  for (let i = 1; i < 10; i++){
  if ( i === 6) {
    // break;
    continue;          // продолжает выполнение операции пропустив число 'i'
  }
  console.log(i);
}
  
  