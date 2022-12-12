let zhopaka = 'вам есть';

// console.log (zhopaka);
  
// let answear = prompt('вам есть 29?');
// console.log(answear);

// let anser = confirm('вам есть 29?');
// console.log(answear);

// console.log(65346273765626756230-87625635237+'add');

// if (23 + 23 == 23+23) {
//     console.log('да')
// } else {
//     console.log('нет')
// }

// let answer = confirm('вам есть 29?');
// if (answer) {
//     console.log('заходи')
// } else {
//     console.log('уходи')
// }

// let i = 0;
// while (i < 9) {
//   prompt( i );
//   i++;
// }

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert( 'Офис закрыт.' );
// }

let hour = 12;
let isWeekend = true;
let isVacation = false;

if (hour < 10 || hour > 18 || isVacation) {
  alert( 'Офис закрыт.' ); // это выходной
} else if (hour < 13 || hour > 2 || isWeekend) {
  alert('заходи')
}