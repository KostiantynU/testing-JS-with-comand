/**
 *?     Используя функцию if...else,
 *?     напишите код, который будет спрашивать:
 *?     "Какое официальное название JavaScript?"
 *?     Если пользователь вводит "ECMAScript",
 *?     то показать через alert: "Верно!"
 *?     в противном случае отобразить:"Не знаете? ECMAScript!"
 */

/** 1. Треба прийняти те що ввів користувач
 * 2. Звірити це з умовою
 * 3. видати відповідь
 */
// let whatSayUser = prompt('Яка офіційна назва JavaScript?');
// if (whatSayUser === 'ECMAScript') {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте! ECMAScript!');
// }

//Новый js==========================================

/**
 *?      Напишите программу, которая получит от пользователя
 *?      число (количество минут) и выведет в консоль
 *?      строку в формате часов и минут
 *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *?      70 === 01:10
 */

// const whatSayUser = prompt(`Ввести число`);
// const hours = String(Math.floor(whatSayUser / 60)).padStart(2, 0);
// console.log(hours);
// hours.padStart(2, 0);
// const mins = String(whatSayUser % 60).padStart(2, 0);
// console.log(mins);
// hours.padStart(2, 0);

// console.log(`${hours}:${mins}`);

/**
 *?     При помощи цикла for сложите все четные числа от  min до max
 */

// const max = 50;
// const min = 0;
// let summ = 0;

// for (let i = min; i <= max; i +=1 ){

//     if ( i % 2 === 0 ){
//         summ += i;

//     }

// }
// console.log(summ);
//  задача
// =====================================================

/**
*?      Напишите код, который будет спрашивать
*?      логин с помощью prompt и логировать результат
*?      в консоль браузера
    
*?      Если посетитель вводит "Админ",
*?      то prompt запрашивает пароль.
*?      Если ничего не ввели или нажата клавиша Esc
*?      вывести строку "Отменено"
*?      В противном случае вывести строку "Я вас не знаю"
    
*?      Пароль проверять так:
*?      Если введён пароль "Я главный",
*?      то вывести строку "Здравствуйте!"
*?      иначе выводить строку "Неверный пароль!"
 */

// const userLogin = prompt('Введите логин');

// console.log(userLogin);
// if (userLogin === "Админ") {
//   const userPassword = prompt("Введите пароль");
//   if (userPassword === "Я главный") {
//     console.log("Здравствуйте");
//   } else {
//     console.log("Неверный пароль");
//   }
// } else if (!userLogin) {
//   console.log("Отменено");
// } else {
//   console.log("Я вас не знаю");
// }

//=================================================
/**
 *? При загрузке страницы пользователю предлагается
 *? в prompt ввести число. Ввод добавляется к значению
 *? переменной total.
 *? Операция ввода числа продолжается до тех пор,
 *? пока пользователь не нажмет кнопку Cancel в prompt.
 *? После того как пользователь прекратил ввод нажав на
 *? кнопку Cancel, показать alert со строкой "Общая сумма 
 введенных чисел равна [число]."
 
 *! Делать проверку,что пользователь ввел именно число,
 *! а не произвольный набор символов, не нужно.
 */

let total = 0;
let totalNew = prompt('Enter number');
let modifiedTotalNew = Number(totalNew);
do {
  if (modifiedTotalNew) {
    total += totalNew;
    modifiedTotalNew = Number(prompt('Enter number'));
  }
} while (modifiedTotalNew);
console.log(total);
