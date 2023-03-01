const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

let password = prompt('Введіть пароль');

if (password === null) {
  message = 'Скасовано користувачем!';
} else if (password === ADMIN_PASSWORD) {
  message = 'Ласкаво просимо!';
} else {
  message = 'Доступ заборонений, невірний пароль!';
}
alert(message);
