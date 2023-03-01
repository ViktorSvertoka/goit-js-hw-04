let countryDelivery = prompt('вкажіть країну доставки').toLowerCase();

let country;
let price;

switch (countryDelivery.toLowerCase()) {
  case 'китай':
    country = 'Китай';
    price = 100;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case 'чилі':
    country = 'Чилі';
    price = 250;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case 'австралія':
    country = 'Австралія';
    price = 170;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case 'індія':
    country = 'Індія';
    price = 80;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case 'ямайка':
    country = 'Ямайка';
    price = 120;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  default:
    alert('У вашій країні доставка недоступна!');
}
