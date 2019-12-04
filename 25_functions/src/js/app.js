// ==================1===================

function getNum(a, b) {
	if (isNaN(a) || isNaN(b)) {
		return 'введите число';
	}
	if (a > b) {
		return 1;
	} else if (b > a) {
		return -1;
	} else {
		return 0;
	}
}
document.querySelector('#first__button').addEventListener('click', () => {
	let num1 = document.querySelector('#num1').value;
	let num2 = document.querySelector('#num2').value;
	document.querySelector('#first__out').textContent = `Результат: ${getNum(+num1, +num2)}`;
});

// ==================2===================

function calcFactorial(n) {
	if (n < 0 || isNaN(n)) return 'нельзя определить';
	else if (n == 0) {
		return 1;
	} else {
		return (n * calcFactorial(n - 1));
	}
}
document.querySelector('#second__button').addEventListener('click', () => {
	let factNumber = document.querySelector('#fact_number').value;
	document.querySelector('#second__out').textContent = `Факториал: ${calcFactorial(+factNumber)}`;
});

// ==================3===================
function getJoinNumber(n1, n2, n3) {
	if (n2 < 0 || n3 < 0 || isNaN(n1) || isNaN(n2) || isNaN(n3)) return 'невозможно соединить цифры';
	else {
		return n1 + n2 + n3;
	}
}
document.querySelector('#third__button').addEventListener('click', () => {
	let number1 = document.querySelector('#number1').value;
	let number2 = document.querySelector('#number2').value;
	let number3 = document.querySelector('#number3').value;
	document.querySelector('#third__out').textContent = `Получаем число: ${getJoinNumber(number1, number2, number3)}`;
});
// ==================4===================
function getSquare(l, w) {
	if (isNaN(l) || isNaN(w)) return 'Введите число';
	if (w <= 0) return `Площадь квадрата ${(l * l).toFixed(1)}`;
	else {
		return `Площадь прямоугольника ${(l * w).toFixed(1)}`;
	}
}
document.querySelector('#square__button').addEventListener('click', () => {
	let length = document.querySelector('#length').value;
	let width = document.querySelector('#width').value;
	document.querySelector('#square__out').textContent = getSquare(length, width);
});
// ==================5===================
function checkPerfectNumber(number) {
	let sum = 0;
	for (let i = 1; i < number; i++) {
		if (number % i == 0) {
			sum += i;
		}
	}
	return (sum == number) ? true : false;
}
document.querySelector('#perfect__button').addEventListener('click', () => {
	let perfectNum = document.querySelector('#perfectNum').value;
	checkPerfectNumber(perfectNum) ?
	document.querySelector('#perfect__out').textContent = `Это число совершенное` :
	document.querySelector('#perfect__out').textContent = `Это число не совершенное`;
});
// ==================6===================
function getPerfectNumbers(num1, num2) {
	let range = '';
	for (let i = num1; i <= num2; i++) {
		if (checkPerfectNumber(i)) {
			range += i + ', ';
		}
	}
	return range;
}
document.querySelector('#range__button').addEventListener('click', () => {
	let perfectNum1 = document.querySelector('#perfectNum1').value;
	let perfectNum2 = document.querySelector('#perfectNum2').value;
	document.querySelector('#range__out').textContent = `Совершенные числа диапазона: ${getPerfectNumbers(perfectNum1, perfectNum2)}`;
});
// ==================7===================
function getTime(hours, minutes = '00', seconds = '00') {
	if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return 'Введите число';
	if (hours < 10) {
		hours = 0 + hours;
	} else if (hours > 23) {
		hours = '00';
	}
	if (minutes < 10) {
		minutes = 0 + minutes;
	} else if (minutes > 59) {
		minutes = '00';
	}
	if (seconds < 10) {
		seconds = 0 + seconds;
	} else if (seconds > 59) {
		seconds = '00';
	}
	return `${hours}:${minutes}:${seconds}`;
}
document.querySelector('#time__button').addEventListener('click', () => {
	let hours = document.querySelector('#hours').value;
	let minutes = document.querySelector('#minutes').value;
	let seconds = document.querySelector('#seconds').value;
	document.querySelector('#time__out').textContent = `${getTime(hours, minutes, seconds)}`;
});
// ==================8===================
function getTimeToSeconds(hours, minutes, seconds) {
	if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return 'Введите число';
	return (+hours * 3600) + (+minutes * 60) + +seconds;
}
document.querySelector('#seconds__button').addEventListener('click', () => {
	let hours1 = document.querySelector('#hours1').value;
	let minutes1 = document.querySelector('#minutes1').value;
	let seconds1 = document.querySelector('#seconds1').value;
	document.querySelector('#seconds__out').textContent = `${getTimeToSeconds(hours1, minutes1, seconds1)} секунд`;
});
// ==================9===================
function getSecondsToTime(sec) {
	let hour = Math.floor(+sec / 3600);
	let i = +sec % 3600;
	let min = Math.floor(i / 60);
	let seconds = i % 60;
	if (hour < 10) {
		hour = '0' + hour;
	}
	if (min < 10) {
		min = '0' + min;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	return `${hour}:${min}:${seconds}`;

}
document.querySelector('#sec__button').addEventListener('click', () => {
	let sec_input = document.querySelector('#sec_input').value;
	document.querySelector('#sec__out').textContent = `${getSecondsToTime(sec_input)}`;
});
// ==================10===================
function getTimeDifferent(h1, m1, s1, h2, m2, s2) {
	let timeDiff = 0;
	if (getTimeToSeconds(h1, m1, s1) >= getTimeToSeconds(h2, m2, s2)) {
		timeDiff = getTimeToSeconds(h1, m1, s1) - getTimeToSeconds(h2, m2, s2);
	} else {
		timeDiff = getTimeToSeconds(h2, m2, s2) - getTimeToSeconds(h1, m1, s1);
	}
	return getSecondsToTime(timeDiff);
}
document.querySelector('#date__button').addEventListener('click', () => {
	let hours2 = document.querySelector('#hours2').value;
	let minutes2 = document.querySelector('#minutes2').value;
	let seconds2 = document.querySelector('#seconds2').value;
	let hours3 = document.querySelector('#hours3').value;
	let minutes3 = document.querySelector('#minutes3').value;
	let seconds3 = document.querySelector('#seconds3').value;
	document.querySelector('#date__out').textContent = `${getTimeDifferent(hours2, minutes2, seconds2, hours3, minutes3, seconds3)} секунд`;
});