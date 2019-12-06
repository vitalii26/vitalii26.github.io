let car = {
	manufacturer: 'Ford',
	model: 'Kuga',
	year: 2013,
	'average speed': 100,
	show: function () {
		return `Автомобиль: ${this.manufacturer}, модель: ${this.model}, год выпуска: ${this.year}, средняя скорость: ${this['average speed']} км/час`
	},
	time: function () {
		let pause = 0;
		if (isNaN(this.distance)) {
			return 'введите число'; 
		}
			let time = (this.distance / this['average speed']) + pause;
			if (time > 4 && time % 4 !== 0) {
				pause = Math.floor(time / 4);
				return time+=pause;
			} else if (time > 4 && time % 4 == 0) {
				pause = Math.floor(time / 4) - 1;
				return time+=pause;
			} else {
				return time;
			}
		}
	};
	const carBtn = document.querySelector('#car__button');
	carBtn.addEventListener('click', () => {
		car.distance = document.querySelector('#distance').value;
		document.querySelector('#car__out').textContent = `Время в пути: ${car.time()}`;
	});
	const carInfoBtn = document.querySelector('#car-info__button');
	carInfoBtn.addEventListener('click', () => {
		document.querySelector('#car__out').textContent = car.show();
	});
// ==================2=================
let fraction1 = {};
let fraction2 = {};
function reduce(numerator,denominator){
	if (isNaN(fraction1.numerator) || isNaN(fraction1.denominator) || isNaN(fraction2.numerator) || isNaN(fraction2.denominator)) {
		return `Введите число`;
	}
	var gcd = function gcd(a,b){
		return b ? gcd(b, a%b) : a;
	};
	gcd = gcd(numerator,denominator);
	return `${numerator/gcd}/${denominator/gcd}`;
}
function multiply(num1, den1, num2, den2) {
	return(reduce((num1 * num2), (den1 * den2)));
}
function division(num1, den1, num2, den2) {
	return(reduce((num1 * den2), (den1 * num2)));
}
function add(num1, den1, num2, den2) {
	let newden = den1 * den2;
	let newnum = ((num1 * den2) + (num2 * den1));
	if (newnum == 0) {
		return 0;
	} else if (newnum == newden) {
		return 1;
	}
	return(reduce(newnum, newden));
}
function substract(num1, den1, num2, den2) {
	let newden = den1 * den2;
	let newnum = ((num1 * den2) - (num2 * den1));
	if (newnum == 0) {
		return 0;
	} else if (newnum == newden) {
		return 1;
	}
	return(reduce(newnum, newden));
}
const fracBtn = document.querySelector('#fraction__button');
fracBtn.addEventListener('click', () => {
	fraction1.numerator = document.querySelector('#numerator1').value;
	fraction1.denominator = document.querySelector('#denominator1').value;
	fraction2.numerator = document.querySelector('#numerator2').value;
	fraction2.denominator = document.querySelector('#denominator2').value;
	let operator = document.querySelector('#operator').value;
	let fractionOut = 0;
	switch(operator){
		case '+' : fractionOut = add(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator);  break;
		case '-' : fractionOut = substract(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator);  break;
		case '*' : fractionOut = multiply(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator);  break;
		case '/' : fractionOut = division(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator);  break;
		default : alert("Не корректная операция");
	}
	document.querySelector('#fraction__out').textContent = `Результат вычислений: ${fractionOut}.`;
});
const reduceBtn = document.querySelector('#reduce__button');
reduceBtn.addEventListener('click', () => {
	fraction1.numerator = document.querySelector('#numerator1').value;
	fraction1.denominator = document.querySelector('#denominator1').value;
	fraction2.numerator = document.querySelector('#numerator2').value;
	fraction2.denominator = document.querySelector('#denominator2').value;
	document.querySelector('#fraction__out').textContent = `Результат: ${reduce(fraction1.numerator, fraction1.denominator)}, ${reduce(fraction2.numerator, fraction2.denominator)}.`;
});
// ==================3=================
let time = {
	hours: 12,
	minutes: '05',
	seconds: '05',
	show: function (){
		return `${this.hours}:${this.minutes}:${this.seconds}`;
	},
};
function secondsAdd(sec) {
	if (isNaN(sec)) {
			return 'введите число'; 
		}
	let secSum = +time.seconds + +sec;
	if (secSum < 10) {
		time.seconds = '0' + secSum;
	} else if (secSum == 60) {
		time.seconds = '00';
		let minSum = +time.minutes + Math.floor(secSum/60);
		if (minSum < 10) {
			time.minutes = '0' + minSum;
		} else {
			time.minutes = minSum;
		}
	} else if (secSum > 60) {
		if (secSum % 60 < 10) {
			time.seconds = '0' + (secSum % 60);
		} else if (secSum % 60 >= 10) {
			time.seconds = secSum % 60;
		}
		let minSum = +time.minutes + Math.floor(secSum/60);
		if (minSum < 10) {
			time.minutes = '0' + minSum;
		} else {
			time.minutes = minSum;
		}

	} else {
		time.seconds = secSum;
	}
	return time.show();
}
function minutesAdd(min) {
	if (isNaN(min)) {
			return 'введите число'; 
		}
	let minSum = +time.minutes + +min;
	if (minSum < 10) {
		time.minutes = '0' + minSum;
	} else if (minSum == 60) {
		time.minutes = '00';
		let hourSum = +time.hours + Math.floor(minSum/60);
		if (hourSum < 10) {
			time.hours = '0' + hourSum;
		} else {
			time.hours = hourSum;
		}
	} else if (minSum > 60) {
		if (minSum % 60 < 10) {
			time.minutes = '0' + (minSum % 60);
		} else if (minSum % 60 >= 10) {
			time.minutes = minSum % 60;
		}
		let hourSum = +time.hours + Math.floor(minSum/60);
		if (hourSum < 10) {
			time.hours = '0' + hourSum;
		} else {
			time.hours = hourSum;
		}

	} else {
		time.minutes = minSum;
	}
	return time.show();
}
function hoursAdd(hour) {
	if (isNaN(hour)) {
			return 'введите число'; 
		}
	let sum = +time.hours + +hour;
	if (sum > 24 &&(sum % 24 < 10)) {
		time.hours = '0' + sum % 24;
	} else if (sum == 24) {
		time.hours = '00';
	} else if (sum < 10) {
		time.hours = '0' + sum;
	} else {
		time.hours = sum % 24;
	}
	return time.show();
}
document.querySelector('#time__out').textContent = `Время в обьекте: ${time.show()}.`;
const resultBtn = document.querySelector('#result__button');
resultBtn.addEventListener('click', () => {
	let timeAdd = document.querySelector('#timeAdd').value;
	let operation = document.querySelector('#timeOperation').value;
	let timeOut = 0;
	switch(operation){
		case 'h' : timeOut = hoursAdd(timeAdd);  break;
		case 'm' : timeOut = minutesAdd(timeAdd);  break;
		case 's' : timeOut = secondsAdd(timeAdd);  break;
		default : alert("Не корректная операция");
	}
	document.querySelector('#result__out').textContent = `Результат: ${timeOut}.`;
});