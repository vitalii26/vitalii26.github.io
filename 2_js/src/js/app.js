// let name = prompt('Как вас зовут?', '');
// alert(`Привет, ${name}!`);

//================================

// let birthYear = parseInt(prompt('Введите год вашего рождения', ''));
// const currentYear = 2019;
// if (isFinite(birthYear)) {
// 	alert(`Ваш возраст: ${currentYear - birthYear}`);
// } else {
// alert('Введите число');
// }

//=================================

// let sideLength = prompt('Укажите длинну стороны квадрата:', '');
// alert(`Периметр квадрата: ${sideLength * 4}`);

//=================================

// let circleRadius = prompt('Укажите радиус окружности:', '');
// alert(`Площадь окружности: ${Math.round((Math.pow(circleRadius, 2) * Math.PI) * 100) / 100}`);

//=================================

// let distance = prompt('Укажите расстояние в километрах между городами:', '');
// let time = prompt('Укажите количество часов на дорогу:', '');
// if (distance != null && time != null) {
// alert(`Необходимая скорость: ${distance / time} км/час`);
// } else {
// 	alert('Введите значение');
// }

//=================================

// let dollars = prompt('Сколько долларов вы хотите обменять?', '');
// const rate = 1.1;
// alert(`Вы получите ${Math.round(dollars * rate * 100) / 100} евро`);

//=================================

// let flashMemory = prompt('Укажите обьем флешки в гигабайтах', '');
// alert(`Помещается ${Math.floor(flashMemory * 1024 / 820)} файлов`);

//=================================

// let moneySum = prompt('Сколько гривен у вас есть?', '');
// let chocolatePrice = prompt('Какая цена шоколадки?', '');
// alert(`Вы можете купить ${Math.floor(moneySum / chocolatePrice)} шоколадок и у вас останется ${Math.round((moneySum % chocolatePrice) * 100) / 100} гривен`);

//=================================

// let num = prompt('Введите трехзначное число', '');
// let result = '';

// while (num > 0) {
// 	result += (num % 10);
// 	num = parseInt(num / 10);
// }
// alert(result);


//=================================

// let deposit = prompt('Введите сумму вклада', '');
// const month = 2;
// const percent = 0.05;
// alert(`Сумма начисленная по процентам: ${Math.floor((deposit * month / 12) * percent * 100) / 100}`);




// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// console.log(a.length);
// console.log(a.push(11, 13, 15, 17));
// console.log(a);
// b.push('i', 'j');
// console.log(b);
// b.pop();
// b.pop();
// b.pop();
// console.log(b);
// delete b[3];
// console.log(b);
// a.splice(3, 3, 'hi');
// console.log(a);
// a.unshift(3);
// console.log(a);
// const one = document.querySelector('.one');
// one.style.width = '150px';
// one.style.paddingBottom = '40px';
// one.classList.add('two', 'three');
// one.classList.remove('three');
// const toggle = document.querySelector('.toggle');
// toggle.onclick = function() {
// 	this.classList.toggle('three');
// }
// console.log(one.getAttribute('data'));
// one.setAttribute('data-num', 6);

// const gas = document.querySelectorAll('.gas');
// for (let i = 0; i < gas.length; i++) {
// 	gas[i].onclick = function() {
// 		let gallons = document.querySelector('.gallons').value;
// 		let amount = this.getAttribute('data');
// 		console.log(gallons * amount);
// 	}
//  }

//  let a = document.createElement('div');
//  a.innerHTML = 'Hello!';
//  a.classList.add('four');

//  document.querySelector('.test').appendChild(a);
//   console.log(a);
// let sum = 0;
// let k = 0;
// while (k <= 3) {
// 	sum += k;
// 	k++;
// }
// console.log('sum: ' + sum);
// let out = document.querySelector('.out');
// let p = 0;
// let outStr = '';
// let flag = 3;
// while (p < 4) {
// 	let p1 = 0;
// 	while (p1 < 4) {
// 		if (p1 < flag) {
// 			outStr += '0';
// 		} else {
// 			outStr += '*';
// 		}
// 		p1++;
// 	}
// 	flag--;
// 	outStr += '<br>'
// 	p++;
// }
// out.innerHTML = outStr;
// const exercise = document.querySelector('.exercise');
// console.log(exercise);
// console.log(exercise.innerHTML);
// console.log(exercise.innerText);
// console.log(exercise.textContent);
// document.querySelector('.out-1').innerHTML = exercise.innerHTML;
// document.querySelector('.out-1').innerText = exercise.innerText;
// document.querySelector('.out-1').textContent = exercise.textContent;
// let f1 = document.querySelector('.f-1');
// function one() {
// 	console.log('work');
// }
// one();
// // f1.onclick = one;
// f1.onclick = () => {
// 	console.log('hello');
// }
// console.log(1 + one());
// console.log(one());
// function two() {
// 	console.log('work 22222');
// 	return 54;
// }

// two();
// console.log(1 + two());

// let a = 8;
// let b = 9;
// function multiply() {
// 	console.log(a*b);
// 	return a * b;
// }
// let c1 = multiply();
// let c2 = 10 * multiply();
// console.log(c1, c2);
// function multi2(x, y) {
// 	return x * y;
// }
// console.log(multi2(3, 2));
// console.log(multi2(20, 2));
// console.log(multi2(20, a));
// document.querySelector('.f-2').onclick = function() {
// 	console.log('++++++');
// }
// document.querySelector('.f-2').onclick = () => {
// 	console.log('------');
// }
// function (a, b) {

// }
// (a, b) => {}
// document.querySelector('button').onclick = () => {
// 	let rad = document.querySelectorAll('input[type="radio"]');
// 	console.log(rad);
// 	for (let i = 0; i < rad.length; i++) {
// 		if (rad[i].checked) {
// 			console.log(rad[i].value);
// 		}
// 	}
// }	
// let out = '';
// for (let i = 0; i < 10; i++) {
// 	// if (i == 6) break;
// 	out += i + ' ';
// 	if (i == 6) break;
// }
// document.querySelector('#out').innerHTML = out;
// let div = document.querySelectorAll('.one');
// console.log(div);
// // div.style.background = 'red';
// for (let i = 0; i < div.length; i++) {
// 	console.log(div[i]);
// 	div[i].style.background = 'red';
// 	div[i].onclick = two;
// }
// function two() {
// 	console.log('Work!!')
// }
// let b = document.getElementsByClassName('one');
// console.log(b);
// for (let i = 0; i < b.length; i++) {
// 	b[i].style.border = '1px solid black';
// }
// document.querySelector('.btn-1').onclick = () => {
// 	console.log(document.querySelector('.check').value);
// 	let myCheckbox = document.querySelector('.check');
// 	console.log(myCheckbox.checked);
// 	if (myCheckbox.checked) {
// 		console.log('Ok');
// 	} else {
// 		console.log('Not Ok');
// 	}
// }
// document.querySelector('.btn-2').onclick = (event) => {
// 	event.preventDefault();
// 	// let text = document.querySelector('#two');
// 	// console.log(text.value);
// 	// text.value = 'one';
// 	let form = document.querySelector('form');
// 	console.log(form);
// 	console.log(form.elements.n1.value);
// 	console.log(form.elements.three.value);
// }
// document.querySelector('button').onclick = () => {
// 	console.log(document.querySelector('.one').value);
// 	//Styles
// 	document.querySelector('button').style.backgroundColor = 
// 	document.querySelector('.one').value;
// }
// document.querySelector('.one').oninput = () => {
// 	console.log(document.querySelector('.one').value);
// 	document.querySelector('span').innerHTML = document.querySelector('.one').value;
// }
// let a = 9;
// if (a != 9) {
// 	console.log('yes');
// } else {
// 	console.log('no');
// }
// Slider----------------------------------------
// let leftBt = document.querySelector('.slider-left');
// leftBt.addEventListener('click', slideLeft);
// autoSlider();
// let left = 0;
// let timer;
// function autoSlider () {
// 	timer = setTimeout(function () {
// 		var line = document.querySelector('.line');
// 		left -= 360;
// 		if (left < -1080) {
// 			left = 0;
// 			clearTimeout(timer);
// 		}
// 		line.style.left = left + 'px';
// 		autoSlider();
// 	}, 2000);
// }

// Slider----------------------------------------

// for (let i = 0; i < m1.length; i++) {
// 	document.querySelector('.out').innerHTML += m1[i] + '<br>';
// }

// let progNum = Math.floor((Math.random() * 10) + 1);
// 	// let tempOut = document.getElementById('temp-out');
// 	// tempOut.innerHTML = progNum;

// function fun1() {

// 	let num = document.getElementById('mynum').value;
// 	let out1 = document.getElementById('out');

// 	if (num == progNum) {
// 		out1.innerHTML = 'You win';
// 	} else if (num > progNum) {
// 		out1.innerHTML = 'Your number very big';
// 	} else {
// 		out1.innerHTML = 'Your number little';
// 	}
// }
// let bton = document.getElementById('btn');
// bton.addEventListener('click', fun1);