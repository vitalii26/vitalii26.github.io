//=================1==============
let name = prompt('Как вас зовут?', '');
alert(`Привет, ${name}!`);

//=================2===============

let birthYear = parseInt(prompt('Введите год вашего рождения', ''));
const currentYear = 2019;
if (isFinite(birthYear)) {
	alert(`Ваш возраст: ${currentYear - birthYear}`);
} else {
alert('Введите число');
}

//=================3================

let sideLength = prompt('Укажите длинну стороны квадрата:', '');
alert(`Периметр квадрата: ${sideLength * 4}`);

//=================4================

let circleRadius = prompt('Укажите радиус окружности:', '');
alert(`Площадь окружности: ${Math.round((Math.pow(circleRadius, 2) * Math.PI) * 100) / 100}`);

//=================5================

let distance = prompt('Укажите расстояние в километрах между городами:', '');
let time = prompt('Укажите количество часов на дорогу:', '');
if (distance != null && time != null) {
alert(`Необходимая скорость: ${Math.ceil(distance / time)} км/час`);
} else {
	alert('Введите значение');
}

//=================6================

let dollars = prompt('Сколько долларов вы хотите обменять?', '');
const rate = 1.1;
alert(`Вы получите ${Math.round(dollars * rate * 100) / 100} евро`);

//=================7================

let flashMemory = prompt('Укажите обьем флешки в гигабайтах', '');
alert(`Помещается ${Math.floor(flashMemory * 1024 / 820)} файлов`);

//=================8================

let moneySum = prompt('Сколько гривен у вас есть?', '');
let chocolatePrice = prompt('Какая цена шоколадки?', '');
alert(`Вы можете купить ${Math.floor(moneySum / chocolatePrice)} шоколадок и у вас останется ${Math.round((moneySum % chocolatePrice) * 100) / 100} гривен`);

//=================9================

let num = prompt('Введите трехзначное число', '');
let result = '';

while (num > 0) {
	result += (num % 10);
	num = parseInt(num / 10);
}
alert('Число: ' + result);


//=================10================

let deposit = prompt('Введите сумму вклада', '');
const month = 2;
const percent = 0.05;
alert(`Сумма начисленная по процентам: ${Math.floor((deposit * month / 12) * percent * 100) / 100}`);
