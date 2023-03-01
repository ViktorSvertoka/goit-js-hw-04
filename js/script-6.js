let input;
let total = 0;

while (input !== null) {
  input = prompt('Введіть число');

  if (Number.isNaN(Number(input))) {
    alert('Введенно не число, спробуйте ще раз');
  } else {
    total = total + Number(input);
  }
}
alert(`Загальна сумма чисел ${total}`);
