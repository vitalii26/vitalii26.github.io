let num1 = +prompt('Задайте начальное число диапазона', '');
let num2 = +prompt('Задайте конечное число диапазона', '');
let sum1 = 0;
if (num1 <= num2) {
	for (let i = num1; i <= num2; i++) {
		sum1 += i;
	}
} else {
	for (let j = num2; j <= num1; j++) {
		sum1 += j;
	}
}
alert(`Сумма: ${sum1}`);

// ============2============
let divisorNum1 = +prompt('Задайте первое число', '');
let divisorNum2 = +prompt('Задайте второе число', '');
	while (divisorNum1 !== 0) {
		divisorNum1 = divisorNum2 % (divisorNum2 = divisorNum1);
	}
	alert(divisorNum2);
// ============3============
let number = +prompt('Задайте число у которого нужно найти делители', '');
let divisor = '';
for (let i = 1; i <= number; i++) {
	if(number % i == 0) {
		divisor += i + ', ';
	}
}
alert(`Делители числа: ${divisor}`);
// ============4============
let checkNumber = prompt('Введите число', '');
alert(`Количество цифр во введенном числе: ${checkNumber.length}`);
// ============5============
let numbers = [];
let negative = 0;
let positive = 0;
let zero = 0;
let even = 0;
let odd = 0;
for (let i = 0; i < 10; i++) {
	numbers[i] = prompt(`Задайте ${i + 1} число`, '');
	if (numbers[i] == 0) {
		zero++;
	} else if (numbers[i] > 0) {
		positive++;
	} else {
		negative++;
	}
	if ((numbers[i] % 2) == 0) {
		even++;
	} else {
		odd++;
	}
}
alert(`Количество положительных чисел: ${positive}, негативных: ${negative}, нулей: ${zero}, четных: ${even}, нечетных: ${odd}.`);
// ============6============
let question = true;
while(question) {
let calcNum1 = +prompt(`Задайте первое число`, '');
let operator = prompt(`Задайте знак`, '');
let calcNum2 = +prompt(`Задайте второе число`, '');
switch(operator){
case "+" : alert(calcNum1 + calcNum2);  break;
case "-" : alert(calcNum1 - calcNum2);  break;
case "*" : alert(calcNum1 * calcNum2);  break;
case "/" : alert(calcNum1 / calcNum2);  break;
 default : alert("Не корректная операция");
}
question = confirm('Хотите ли вы решить ещё один пример?');
}
// ============7============
let unshiftedNumber = prompt(`Задайте число, которое вы хотите сдвинуть`, '');
let shift = +prompt(`На сколько цифр его сдвинуть?`, '');
let shiftedNumber = '';
for (let i = shift; i < unshiftedNumber.length; i++) {
	shiftedNumber += unshiftedNumber[i];
}
for (let i = 0; i < shift; i++) {
	shiftedNumber += unshiftedNumber[i];
}
alert(`Полученное число: ${shiftedNumber}`);
// ============8============
let question2 = true;
const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let i = 0; i < weekDays.length; i++) {
	if (question2) {
	question2 = confirm('День недели: ' + weekDays[i] + '. Вы хотите увидеть следующий день?');
	}  else {
		break;
	}
}
// ============9============
let table = '';
for (let i = 2; i <= 9; i++) {
	for (let j = 1; j <= 10; j++) {
		table +=(`${i}*${j}=${i*j}  `);
	}
}
alert(table);
// ============10============
let selectedNumber = +prompt(`Введите число от 0 до 100`, '');
let MiddleNumber = 50;
let lastNumber = 100;
let firstNumber = 0;
while (MiddleNumber !== selectedNumber) {
	MiddleNumber = Math.round(firstNumber +((lastNumber - firstNumber)/ 2));
	let userSym = prompt(`Ваше число > ${MiddleNumber}, < ${MiddleNumber} или == ${MiddleNumber}? Введите символ > или < или ==`, '');
	if (userSym === '>') {
		firstNumber =  MiddleNumber;
	} else if (userSym === '<') {
		lastNumber =  MiddleNumber;
	} else if (userSym === '==') {
		if (MiddleNumber === selectedNumber) {
			alert(`Вы загадали число ${MiddleNumber}!`);
			break;
		} else {
			alert(`Вы загадали не это число55!`);
		}
	} else {
		alert("Не корректная операция");
		break;
	}
}
