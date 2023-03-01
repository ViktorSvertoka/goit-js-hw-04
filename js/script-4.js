const credits = 23580;

const pricePerDroid = 3000;

let quantity = prompt('Введіть кількість дроідив');

let totalPrice = quantity * pricePerDroid;

if (quantity === null) {
  console.log('Скасовано користувачем!');
} else if (totalPrice > credits) {
  console.log('Недостатньо коштів на рахунку!');
} else {
  console.log(
    `Ви купили ${quantity} дроїдів, на рахунку залишилося ${
      credits - totalPrice
    } кредитів.`,
  );
}
