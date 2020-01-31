(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// document.querySelector('.i-1').addEventListener('keypress', (e) => {
// 	console.log(e.code);
// });
document.querySelector('.i-1').addEventListener('keydown', function (e) {
  console.log('keydown');
  console.log(e.code);
  return false;
}); //////////////////////////////////////
// const one = document.getElementById('one');
// one.addEventListener('click', () => {
// 	console.log('click');
// });
// one.addEventListener('contextmenu', (e) => {
// 	e.preventDefault();
// 	console.log('doubleclick');
// });
// const two = document.getElementById('two');
// two.addEventListener('mouseenter', () => {
// 	two.style.backgroundColor = 'red';
// });
// two.addEventListener('mouseleave', () => {
// 	two.style.backgroundColor = 'green';
// });
// two.addEventListener('mousedown', () => {
// 	two.style.backgroundColor = 'orange';
// });
// two.addEventListener('mouseup', () => {
// 	two.style.backgroundColor = 'blue';
// });
// let p = 10;
// const prBtn = document.getElementById('prbtn');
// prBtn.addEventListener('click', () => {
// 	p++;
// 	document.getElementById('progress').value = p;
// });
///////////////////////////////////
// const myList = document.getElementById('myList');
// const listBinding = new ListBinding(myList);
// listBinding.update();
// listBinding.add('fsdfds');
// listBinding.add('fsdfds');
// listBinding.add('fsdfds');
// listBinding.remove(1);
//////////////////////////
// class Animal {
// 	constructor (name) {
// 		this.name = name;
// 	}
// 	makeSound () {
// 		console.log('Generic Animal Sound!');
// 	}
// }
// class Dog extends Animal {
// 	constructor (name) {
// 		super(name);
// 	}
// 	makeSound () {
// 		super.makeSound();
// 		console.log('Woof! Woof!');
// 	}
// }
// const a1 = new Animal('Don');
// const a2 = new Dog('Jeff');
// a1.makeSound();
// a2.makeSound();
//////////////////////////////
// class Person {
// 	constructor(_name, _age) {
// 		this.name = _name;
// 		this.age = _age;
// 	}
// 	describe () {
// 		console.log(`I am a ${this.name} and I am ${this.age} years old`);
// 	}
// }
// class Programmer extends Person {
// 	constructor (_name, _age, _yearsOfExperience) {
// 		super (_name, _age);
// 		this.yearsOfExperience = _yearsOfExperience;
// 	}
// 	code () {
// 		console.log(`${this.name} is codding`);
// 	}
// }
// const programmers = [
// 	new Programmer('Dom', 56, 12),
// 	new Programmer('Jeff', 24, 5),
// 	new Programmer('Tiffany', 37, 12)
// ];
// function developSoftware (programmers) {
// 	for (let programmer of programmers) {
// 		programmer.code();
// 	}
// }
// developSoftware(programmers);
//////////////////////////////////
// class Square {
// 	constructor (_width) {
// 		this.width = _width;
// 		this.height = _width;
// 	}
// 	static equals (a, b) {
// 		return a.width * a.height === b.width * b.height;
// 	}
// 	static isValidDimensions (width, height) {
// 		return width === height;
// 	}
// }
// let square1 = new Square(8);
// let square2 = new Square(8);
// console.log(Square.equals(square1, square2));
// console.log(Square.isValidDimensions(6, 6));
/////////////////////////////////
// class Square {
// 	constructor (_width) {
// 		this.width = _width;
// 		this.height = _width;
// 		this.numOfRequestsForArea = 0;
// 	}
// 	get area () {
// 		this.numOfRequestsForArea++;
// 		return this.width * this.height;
// 	}
// 	set area (area) {
// 		this.width = Math.sqrt(area);
// 		this.height = this.width;
// 	}
// }
// let square1 = new Square(4);
// square1.area = 25;
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.numOfRequestsForArea);
/////////////////////////////
// class Rectangle {
// 	constructor (_width, _height, _color) {
// 		console.log('sfdsd');
// 		this.width = _width;
// 		this.height = _height;
// 		this.color = _color;
// 	}
// 	getArea () {
// 		return  this.width  * this.height;
// 	}
// 	printDescription () {
// 		console.log(`I am a rectangle of ${this.width} width and ${this.height} height!!!`);
// 	}
// }
// const myRectangle1 = new Rectangle(18, 5, 'blue');
// const myRectangle2 = new Rectangle(22, 14, 'blue');
// console.log(myRectangle1);
// console.log(myRectangle2);
// console.log(myRectangle1.getArea());
// console.log(myRectangle2.getArea());
// console.log(myRectangle1.printDescription());
// console.log(myRectangle2.printDescription());
/////////////////////////////////
// class Component {
// 	constructor(selector) {
// 		this.$el = document.querySelector(selector);
// 	}
// 	hide() {
// 		this.$el.style.display = 'none';
// 	}
// 	show() {
// 		this.$el.style.display = 'block';
// 	}
// }
// class Box extends Component {
// 	constructor(options) {
// 		super(options.selector)
// 		this.$el.style.width = this.$el.style.height = options.size + 'px';
// 		this.$el.style.backgroundColor = options.color;
// 	}
// }
// const box1 = new Box({
// 	selector: '#box1',
// 	size: 100,
// 	color: 'red'
// })
// const box2 = new Box({
// 	selector: '#box2',
// 	size: 120,
// 	color: 'blue'
// })
// box1.hide();
// box1.show();
// box2.hide();
// box2.show();
// class Circle extends Box {
// 	constructor(options) {
// 		super(options)
// 		this.$el.style.borderRadius = '50%';
// 	}
// }
// const c = new Circle({
// 	selector: '#circle',
// 	size: 150,
// 	color: 'green'
// })
// class Animal {
// 	constructor(options) {
// 		this.name = options.name;
// 		this.age = options.age;
// 		this.hasTail = options.hasTail;
// 	}
// 	voice() {
// 		console.log('I am animal');
// 	}
// }
// class Cat extends Animal {
// 	constructor(options) {
// 		super(options)
// 		this.color = options.color
// 	}
// 	voice() {
// 		super.voice()
// 		console.log('I am cat');
// 	}
// 	get ageInfo() {
// 		return this.age * 3;
// 	}
// 	set ageInfo(newAge) {
// 		this.age = newAge;
// 	}
// }
// const cat = new Cat({
// 	name: 'Cat',
// 	age: 7,
// 	hasTail: true
// });
// console.log(cat.age);
// cat.ageInfo = 14;
// console.log(cat.age);
// console.log(cat.ageInfo);
// const animal = new Animal({name: 'animal', age: 5, hasTail: true});
// console.log(animal);
// class Header {
// 	constructor (img, h1, h2) {
// 		this.src = img;
// 		this.h1 = h1;
// 		this.h2 = h2;
// 	}
// 	render(x) {
// 		// x - куда отисовывать
// 		console.log(this.h1);
// 		let out = '';
// 		out += `<img src="${this.src}" alt="" class="logo">`;
// 		out += `<h1>${this.h1}</h1>`;
// 		out += `<h2>${this.h2}</h2>`;
// 		document.getElementById(x).innerHTML = out;
// 	}
// 	static hello() {
// 		console.log('work static' + a);
// 	}
// }
// const img = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png`;
// let header = new Header(img, 'Hello', 'world');
// header.render('header');
// console.log(header);
// class Header2 extends Header {
// 	constructor(img, h1, h2, hero) {
// 		super(img, h1, h2);
// 		this._hero = hero;
// 	}
// 	get hero() {
// 		return this._hero;
// 	}
// 	set hero(c) {
// 		this._hero = c;
// 	}
// }
// const header2 = new Header2(img ,'new hello', 'new site', 'ggogogogogogo');
// header2.hero = 'Google';
// console.log(header2.hero);
// // header2.render('header');
// console.log(header2);
// class > object
//method > 
// class Alert {
// 	constructor (a, c, d) {
// 		this.message = a;
// 		this.cssClass = c;
// 		this.out = d;
// 	}
// 	showAlert() {
// 		document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
// 	}
// 	myAlert() {
// 		alert(this.message);
// 	}
// }
// class Alert2 extends Alert {
// 	constructor(a, c, d, icon) {
// 		super (a, c, d);
// 		this.icon = icon;
// 	}
// 	showIconAlert() {
// 		document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><i class="material-icons">${this.icon}
// 	</i>${this.message}</p>`;
// 	}
// 	myAlert() {
// 		alert('hi' + this.message);
// 	}
// }
// let m = new Alert('My messsage', 'red', '.test');
// console.log(m);
// m.showAlert();
// let m2 = new Alert2('My messsage', 'red', '.test', 'account_balance');
// // m2.showAlert();
// m2.showIconAlert();
// m2.myAlert();
/////////////////////////////////////////
// let shoppingList = [];
// if (localStorage.getItem('list') != undefined) {
// 	shoppingList = JSON.parse(localStorage.getItem('list'));
// 	out();
// }
// document.getElementById('sl-add').addEventListener('click', () => {
// 	let slName = document.getElementById('sl-name').value;
// 	let slQty = document.getElementById('sl-qty').value;
// 	let temp = {};
// 	temp.name = slName;
// 	temp.quantity = slQty;
// 	temp.check = false;
// 	let i = shoppingList.length;
// 	shoppingList[i] = temp;
// 	console.log(shoppingList.find(item => item.name === temp.name))
// 	// shoppingList.forEach(function(item) {
// 	// 	if (temp.name === item.name ){
// 	// 		console.log(item.name);
// 	// 	} else {
// 	// 		
// 	// 	}
// 	// });
// 	out();
// 	localStorage.setItem('list', JSON.stringify(shoppingList));
// });
// function out() {
// 	let out = '';
// 	for (let key in shoppingList) {
// 		if (shoppingList[key].check === true) {
// 			out += `<input id="${shoppingList[key].name}" type="checkbox" checked>`;
// 		} else {
// 			out += `<input id="${shoppingList[key].name}" type="checkbox">`;
// 		}
// 		out += `${shoppingList[key].name} ${shoppingList[key].quantity} <br>`;
// 	}
// 	document.getElementById('sl-out').innerHTML = out;
// }
////////////////////////////////////////////////////
// let a ='hello,hi,goodday';
// console.log(a.split(','));
// let b = [8, 9, 7];
// b.forEach(function(elem, index) {
// 	console.log(index);
// 	console.log(elem * 2);
// 	console.log('----');
// });
// let a = [4, 5, 12, 200, 1, 0, -2];
// let b = a.map((item, index) => {
// 	console.log(index);
// 	return item * 5;
// });
// let c = a.filter(function(item, index) {
// 	if (item > 0) {
// 		return true;
// 	}
// })
// console.log(c);
// let arr = [4, 7, 9];
// let divS = document.getElementsByTagName('p');
// let qS = document.querySelectorAll('p');
// console.log(divS);
// console.log(qS);
// console.log(arr);
// for (let prop of qS) {
// 	console.log(prop);
// }
// for (let key in qS) {
// 	console.log(qS[key]);
// }
// for (let i = 0; i < qS.length; i++) {
// 	console.log(qS[i]);
// }
// let a = [4, 5, 6];
// let b = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9],
// ];
// let d = [1, 0, 0, 0, 0];
// let k = 0;
// document.querySelector('button').onclick = () => {
// 	if (k+1 < 5) {
// 		d[k] = 0;
// 		d[k+1] = 1;
// 		k++;
// 		document.querySelector('.out-2').innerHTML = d;
// 	}
// }
// console.log(b);
// for (let i = 0; i < b.length; i++) {
// 	// console.log(b[i]);
// 	let c = b[i];
// 	for (let j = c.length - 1; j >= 0; j--) {
// 		console.log(c[j]);
// 	}
// }
// let out = '';
// for (let i = 0; i < b.length; i++) {
// 	for (let j = 0; j < b[i].length; j++) {
// 		out += b[i][j];
// 	}
// 	out += '<br>'
// }
// document.querySelector('.out').innerHTML = out;
// let out = '';
// for (let i = 0; i < b.length; i++) {
// 	for (let j = 0; j < b[i].length; j++) {
// 		if (b[i][j] > 4) {
// 			out += b[i][j] + ' ';
// 		}
// 	}
// 	out += '<br>';
// }
// console.log(out);
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(a.length);
// console.log(a.push(10, 11, 15, 44));
// console.log(a);
// b.push('j', 'h');
// console.log(b);
// console.log(b.pop());
// console.log(b.pop());
// console.log(b);
// // удалить элемент внутри массива
// delete a[3];
// console.log(a);
// a.splice(3, 4, 'hi');
// console.log(a);
// let a = document.createElement('div');
// a.innerHTML = 'Hello!';
// a.classList.add('one');
// a.onclick = function () {
// 	alert('Hello');
// }
// document.querySelector('.test').appendChild(a);
// console.log(a);
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

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy8yX2pzL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLEVBQStCLGdCQUEvQixDQUFnRCxTQUFoRCxFQUEyRCxVQUFDLENBQUQsRUFBTztBQUNqRSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWjtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFDLENBQUMsSUFBZDtBQUNBLFNBQU8sS0FBUDtBQUNBLENBSkQsRSxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaS0xJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4vLyBcdGNvbnNvbGUubG9nKGUuY29kZSk7XHJcbi8vIH0pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaS0xJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ2tleWRvd24nKTtcclxuXHRjb25zb2xlLmxvZyhlLmNvZGUpO1xyXG5cdHJldHVybiBmYWxzZTtcclxufSlcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gY29uc3Qgb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZScpO1xyXG4vLyBvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vIFx0Y29uc29sZS5sb2coJ2NsaWNrJyk7XHJcbi8vIH0pO1xyXG4vLyBvbmUuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSkgPT4ge1xyXG4vLyBcdGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gXHRjb25zb2xlLmxvZygnZG91YmxlY2xpY2snKTtcclxuLy8gfSk7XHJcbi8vIGNvbnN0IHR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d28nKTtcclxuLy8gdHdvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbi8vIFx0dHdvLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xyXG4vLyB9KTtcclxuLy8gdHdvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbi8vIFx0dHdvLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XHJcbi8vIH0pO1xyXG4vLyB0d28uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xyXG4vLyBcdHR3by5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnb3JhbmdlJztcclxuLy8gfSk7XHJcbi8vIHR3by5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4vLyBcdHR3by5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XHJcbi8vIH0pO1xyXG4vLyBsZXQgcCA9IDEwO1xyXG4vLyBjb25zdCBwckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmJ0bicpO1xyXG4vLyBwckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gXHRwKys7XHJcbi8vIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzJykudmFsdWUgPSBwO1xyXG4vLyB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gY29uc3QgbXlMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TGlzdCcpO1xyXG4vLyBjb25zdCBsaXN0QmluZGluZyA9IG5ldyBMaXN0QmluZGluZyhteUxpc3QpO1xyXG4vLyBsaXN0QmluZGluZy51cGRhdGUoKTtcclxuLy8gbGlzdEJpbmRpbmcuYWRkKCdmc2RmZHMnKTtcclxuLy8gbGlzdEJpbmRpbmcuYWRkKCdmc2RmZHMnKTtcclxuLy8gbGlzdEJpbmRpbmcuYWRkKCdmc2RmZHMnKTtcclxuLy8gbGlzdEJpbmRpbmcucmVtb3ZlKDEpO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBjbGFzcyBBbmltYWwge1xyXG4vLyBcdGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbi8vIFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0bWFrZVNvdW5kICgpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKCdHZW5lcmljIEFuaW1hbCBTb3VuZCEnKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7XHJcbi8vIFx0Y29uc3RydWN0b3IgKG5hbWUpIHtcclxuLy8gXHRcdHN1cGVyKG5hbWUpO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0bWFrZVNvdW5kICgpIHtcclxuLy8gXHRcdHN1cGVyLm1ha2VTb3VuZCgpO1xyXG4vLyBcdFx0Y29uc29sZS5sb2coJ1dvb2YhIFdvb2YhJyk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbi8vIGNvbnN0IGExID0gbmV3IEFuaW1hbCgnRG9uJyk7XHJcbi8vIGNvbnN0IGEyID0gbmV3IERvZygnSmVmZicpO1xyXG4vLyBhMS5tYWtlU291bmQoKTtcclxuLy8gYTIubWFrZVNvdW5kKCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBjbGFzcyBQZXJzb24ge1xyXG4vLyBcdGNvbnN0cnVjdG9yKF9uYW1lLCBfYWdlKSB7XHJcbi8vIFx0XHR0aGlzLm5hbWUgPSBfbmFtZTtcclxuLy8gXHRcdHRoaXMuYWdlID0gX2FnZTtcclxuLy8gXHR9XHJcbi8vIFx0ZGVzY3JpYmUgKCkge1xyXG4vLyBcdFx0Y29uc29sZS5sb2coYEkgYW0gYSAke3RoaXMubmFtZX0gYW5kIEkgYW0gJHt0aGlzLmFnZX0geWVhcnMgb2xkYCk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBQcm9ncmFtbWVyIGV4dGVuZHMgUGVyc29uIHtcclxuLy8gXHRjb25zdHJ1Y3RvciAoX25hbWUsIF9hZ2UsIF95ZWFyc09mRXhwZXJpZW5jZSkge1xyXG4vLyBcdFx0c3VwZXIgKF9uYW1lLCBfYWdlKTtcclxuXHJcbi8vIFx0XHR0aGlzLnllYXJzT2ZFeHBlcmllbmNlID0gX3llYXJzT2ZFeHBlcmllbmNlO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0Y29kZSAoKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGlzIGNvZGRpbmdgKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuLy8gY29uc3QgcHJvZ3JhbW1lcnMgPSBbXHJcbi8vIFx0bmV3IFByb2dyYW1tZXIoJ0RvbScsIDU2LCAxMiksXHJcbi8vIFx0bmV3IFByb2dyYW1tZXIoJ0plZmYnLCAyNCwgNSksXHJcbi8vIFx0bmV3IFByb2dyYW1tZXIoJ1RpZmZhbnknLCAzNywgMTIpXHJcbi8vIF07XHJcblxyXG4vLyBmdW5jdGlvbiBkZXZlbG9wU29mdHdhcmUgKHByb2dyYW1tZXJzKSB7XHJcbi8vIFx0Zm9yIChsZXQgcHJvZ3JhbW1lciBvZiBwcm9ncmFtbWVycykge1xyXG4vLyBcdFx0cHJvZ3JhbW1lci5jb2RlKCk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbi8vIGRldmVsb3BTb2Z0d2FyZShwcm9ncmFtbWVycyk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGNsYXNzIFNxdWFyZSB7XHJcbi8vIFx0Y29uc3RydWN0b3IgKF93aWR0aCkge1xyXG4vLyBcdFx0dGhpcy53aWR0aCA9IF93aWR0aDtcclxuLy8gXHRcdHRoaXMuaGVpZ2h0ID0gX3dpZHRoO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0c3RhdGljIGVxdWFscyAoYSwgYikge1xyXG4vLyBcdFx0cmV0dXJuIGEud2lkdGggKiBhLmhlaWdodCA9PT0gYi53aWR0aCAqIGIuaGVpZ2h0O1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0c3RhdGljIGlzVmFsaWREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XHJcbi8vIFx0XHRyZXR1cm4gd2lkdGggPT09IGhlaWdodDtcclxuLy8gXHR9XHJcblxyXG4vLyB9XHJcblxyXG4vLyBsZXQgc3F1YXJlMSA9IG5ldyBTcXVhcmUoOCk7XHJcbi8vIGxldCBzcXVhcmUyID0gbmV3IFNxdWFyZSg4KTtcclxuLy8gY29uc29sZS5sb2coU3F1YXJlLmVxdWFscyhzcXVhcmUxLCBzcXVhcmUyKSk7XHJcbi8vIGNvbnNvbGUubG9nKFNxdWFyZS5pc1ZhbGlkRGltZW5zaW9ucyg2LCA2KSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBjbGFzcyBTcXVhcmUge1xyXG4vLyBcdGNvbnN0cnVjdG9yIChfd2lkdGgpIHtcclxuLy8gXHRcdHRoaXMud2lkdGggPSBfd2lkdGg7XHJcbi8vIFx0XHR0aGlzLmhlaWdodCA9IF93aWR0aDtcclxuLy8gXHRcdHRoaXMubnVtT2ZSZXF1ZXN0c0ZvckFyZWEgPSAwO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0Z2V0IGFyZWEgKCkge1xyXG4vLyBcdFx0dGhpcy5udW1PZlJlcXVlc3RzRm9yQXJlYSsrO1xyXG4vLyBcdFx0cmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcclxuLy8gXHR9XHJcblxyXG4vLyBcdHNldCBhcmVhIChhcmVhKSB7XHJcbi8vIFx0XHR0aGlzLndpZHRoID0gTWF0aC5zcXJ0KGFyZWEpO1xyXG4vLyBcdFx0dGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gbGV0IHNxdWFyZTEgPSBuZXcgU3F1YXJlKDQpO1xyXG4vLyBzcXVhcmUxLmFyZWEgPSAyNTtcclxuLy8gY29uc29sZS5sb2coc3F1YXJlMS5hcmVhKTtcclxuLy8gY29uc29sZS5sb2coc3F1YXJlMS5hcmVhKTtcclxuLy8gY29uc29sZS5sb2coc3F1YXJlMS5hcmVhKTtcclxuLy8gY29uc29sZS5sb2coc3F1YXJlMS5hcmVhKTtcclxuLy8gY29uc29sZS5sb2coc3F1YXJlMS5udW1PZlJlcXVlc3RzRm9yQXJlYSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGNsYXNzIFJlY3RhbmdsZSB7XHJcbi8vIFx0Y29uc3RydWN0b3IgKF93aWR0aCwgX2hlaWdodCwgX2NvbG9yKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZygnc2Zkc2QnKTtcclxuXHJcbi8vIFx0XHR0aGlzLndpZHRoID0gX3dpZHRoO1xyXG4vLyBcdFx0dGhpcy5oZWlnaHQgPSBfaGVpZ2h0O1xyXG4vLyBcdFx0dGhpcy5jb2xvciA9IF9jb2xvcjtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGdldEFyZWEgKCkge1xyXG4vLyBcdFx0cmV0dXJuICB0aGlzLndpZHRoICAqIHRoaXMuaGVpZ2h0O1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0cHJpbnREZXNjcmlwdGlvbiAoKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhgSSBhbSBhIHJlY3RhbmdsZSBvZiAke3RoaXMud2lkdGh9IHdpZHRoIGFuZCAke3RoaXMuaGVpZ2h0fSBoZWlnaHQhISFgKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG15UmVjdGFuZ2xlMSA9IG5ldyBSZWN0YW5nbGUoMTgsIDUsICdibHVlJyk7XHJcbi8vIGNvbnN0IG15UmVjdGFuZ2xlMiA9IG5ldyBSZWN0YW5nbGUoMjIsIDE0LCAnYmx1ZScpO1xyXG4vLyBjb25zb2xlLmxvZyhteVJlY3RhbmdsZTEpO1xyXG4vLyBjb25zb2xlLmxvZyhteVJlY3RhbmdsZTIpO1xyXG4vLyBjb25zb2xlLmxvZyhteVJlY3RhbmdsZTEuZ2V0QXJlYSgpKTtcclxuLy8gY29uc29sZS5sb2cobXlSZWN0YW5nbGUyLmdldEFyZWEoKSk7XHJcbi8vIGNvbnNvbGUubG9nKG15UmVjdGFuZ2xlMS5wcmludERlc2NyaXB0aW9uKCkpO1xyXG4vLyBjb25zb2xlLmxvZyhteVJlY3RhbmdsZTIucHJpbnREZXNjcmlwdGlvbigpKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGNsYXNzIENvbXBvbmVudCB7XHJcbi8vIFx0Y29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuLy8gXHRcdHRoaXMuJGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRoaWRlKCkge1xyXG4vLyBcdFx0dGhpcy4kZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuLy8gXHR9XHJcblxyXG4vLyBcdHNob3coKSB7XHJcbi8vIFx0XHR0aGlzLiRlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuLy8gXHR9XHJcbi8vIH1cclxuLy8gY2xhc3MgQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbi8vIFx0XHRzdXBlcihvcHRpb25zLnNlbGVjdG9yKVxyXG5cclxuLy8gXHRcdHRoaXMuJGVsLnN0eWxlLndpZHRoID0gdGhpcy4kZWwuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5zaXplICsgJ3B4JztcclxuLy8gXHRcdHRoaXMuJGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBib3gxID0gbmV3IEJveCh7XHJcbi8vIFx0c2VsZWN0b3I6ICcjYm94MScsXHJcbi8vIFx0c2l6ZTogMTAwLFxyXG4vLyBcdGNvbG9yOiAncmVkJ1xyXG4vLyB9KVxyXG4vLyBjb25zdCBib3gyID0gbmV3IEJveCh7XHJcbi8vIFx0c2VsZWN0b3I6ICcjYm94MicsXHJcbi8vIFx0c2l6ZTogMTIwLFxyXG4vLyBcdGNvbG9yOiAnYmx1ZSdcclxuLy8gfSlcclxuLy8gYm94MS5oaWRlKCk7XHJcbi8vIGJveDEuc2hvdygpO1xyXG4vLyBib3gyLmhpZGUoKTtcclxuLy8gYm94Mi5zaG93KCk7XHJcbi8vIGNsYXNzIENpcmNsZSBleHRlbmRzIEJveCB7XHJcbi8vIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4vLyBcdFx0c3VwZXIob3B0aW9ucylcclxuXHJcbi8vIFx0XHR0aGlzLiRlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGMgPSBuZXcgQ2lyY2xlKHtcclxuLy8gXHRzZWxlY3RvcjogJyNjaXJjbGUnLFxyXG4vLyBcdHNpemU6IDE1MCxcclxuLy8gXHRjb2xvcjogJ2dyZWVuJ1xyXG4vLyB9KVxyXG5cclxuLy8gY2xhc3MgQW5pbWFsIHtcclxuLy8gXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbi8vIFx0XHR0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XHJcbi8vIFx0XHR0aGlzLmFnZSA9IG9wdGlvbnMuYWdlO1xyXG4vLyBcdFx0dGhpcy5oYXNUYWlsID0gb3B0aW9ucy5oYXNUYWlsO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0dm9pY2UoKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZygnSSBhbSBhbmltYWwnKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuLy8gY2xhc3MgQ2F0IGV4dGVuZHMgQW5pbWFsIHtcclxuLy8gXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbi8vIFx0XHRzdXBlcihvcHRpb25zKVxyXG4vLyBcdFx0dGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3JcclxuLy8gXHR9XHJcbi8vIFx0dm9pY2UoKSB7XHJcbi8vIFx0XHRzdXBlci52b2ljZSgpXHJcbi8vIFx0XHRjb25zb2xlLmxvZygnSSBhbSBjYXQnKTtcclxuLy8gXHR9XHJcbi8vIFx0Z2V0IGFnZUluZm8oKSB7XHJcbi8vIFx0XHRyZXR1cm4gdGhpcy5hZ2UgKiAzO1xyXG4vLyBcdH1cclxuLy8gXHRzZXQgYWdlSW5mbyhuZXdBZ2UpIHtcclxuLy8gXHRcdHRoaXMuYWdlID0gbmV3QWdlO1xyXG4vLyBcdH1cclxuLy8gfVxyXG4vLyBjb25zdCBjYXQgPSBuZXcgQ2F0KHtcclxuLy8gXHRuYW1lOiAnQ2F0JyxcclxuLy8gXHRhZ2U6IDcsXHJcbi8vIFx0aGFzVGFpbDogdHJ1ZVxyXG4vLyB9KTtcclxuLy8gY29uc29sZS5sb2coY2F0LmFnZSk7XHJcbi8vIGNhdC5hZ2VJbmZvID0gMTQ7XHJcbi8vIGNvbnNvbGUubG9nKGNhdC5hZ2UpO1xyXG4vLyBjb25zb2xlLmxvZyhjYXQuYWdlSW5mbyk7XHJcblxyXG4vLyBjb25zdCBhbmltYWwgPSBuZXcgQW5pbWFsKHtuYW1lOiAnYW5pbWFsJywgYWdlOiA1LCBoYXNUYWlsOiB0cnVlfSk7XHJcbi8vIGNvbnNvbGUubG9nKGFuaW1hbCk7XHJcbi8vIGNsYXNzIEhlYWRlciB7XHJcbi8vIFx0Y29uc3RydWN0b3IgKGltZywgaDEsIGgyKSB7XHJcbi8vIFx0XHR0aGlzLnNyYyA9IGltZztcclxuLy8gXHRcdHRoaXMuaDEgPSBoMTtcclxuLy8gXHRcdHRoaXMuaDIgPSBoMjtcclxuLy8gXHR9XHJcbi8vIFx0cmVuZGVyKHgpIHtcclxuLy8gXHRcdC8vIHggLSDQutGD0LTQsCDQvtGC0LjRgdC+0LLRi9Cy0LDRgtGMXHJcbi8vIFx0XHRjb25zb2xlLmxvZyh0aGlzLmgxKTtcclxuLy8gXHRcdGxldCBvdXQgPSAnJztcclxuLy8gXHRcdG91dCArPSBgPGltZyBzcmM9XCIke3RoaXMuc3JjfVwiIGFsdD1cIlwiIGNsYXNzPVwibG9nb1wiPmA7XHJcbi8vIFx0XHRvdXQgKz0gYDxoMT4ke3RoaXMuaDF9PC9oMT5gO1xyXG4vLyBcdFx0b3V0ICs9IGA8aDI+JHt0aGlzLmgyfTwvaDI+YDtcclxuLy8gXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHgpLmlubmVySFRNTCA9IG91dDtcclxuLy8gXHR9XHJcbi8vIFx0c3RhdGljIGhlbGxvKCkge1xyXG4vLyBcdFx0Y29uc29sZS5sb2coJ3dvcmsgc3RhdGljJyArIGEpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG4vLyBjb25zdCBpbWcgPSBgaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9hL2E3L1JlYWN0LWljb24uc3ZnLzEyMDBweC1SZWFjdC1pY29uLnN2Zy5wbmdgO1xyXG4vLyBsZXQgaGVhZGVyID0gbmV3IEhlYWRlcihpbWcsICdIZWxsbycsICd3b3JsZCcpO1xyXG4vLyBoZWFkZXIucmVuZGVyKCdoZWFkZXInKTtcclxuLy8gY29uc29sZS5sb2coaGVhZGVyKTtcclxuLy8gY2xhc3MgSGVhZGVyMiBleHRlbmRzIEhlYWRlciB7XHJcbi8vIFx0Y29uc3RydWN0b3IoaW1nLCBoMSwgaDIsIGhlcm8pIHtcclxuLy8gXHRcdHN1cGVyKGltZywgaDEsIGgyKTtcclxuLy8gXHRcdHRoaXMuX2hlcm8gPSBoZXJvO1xyXG4vLyBcdH1cclxuLy8gXHRnZXQgaGVybygpIHtcclxuLy8gXHRcdHJldHVybiB0aGlzLl9oZXJvO1xyXG4vLyBcdH1cclxuLy8gXHRzZXQgaGVybyhjKSB7XHJcbi8vIFx0XHR0aGlzLl9oZXJvID0gYztcclxuLy8gXHR9XHJcbi8vIH1cclxuLy8gY29uc3QgaGVhZGVyMiA9IG5ldyBIZWFkZXIyKGltZyAsJ25ldyBoZWxsbycsICduZXcgc2l0ZScsICdnZ29nb2dvZ29nb2dvJyk7XHJcbi8vIGhlYWRlcjIuaGVybyA9ICdHb29nbGUnO1xyXG4vLyBjb25zb2xlLmxvZyhoZWFkZXIyLmhlcm8pO1xyXG4vLyAvLyBoZWFkZXIyLnJlbmRlcignaGVhZGVyJyk7XHJcbi8vIGNvbnNvbGUubG9nKGhlYWRlcjIpO1xyXG4vLyBjbGFzcyA+IG9iamVjdFxyXG4vL21ldGhvZCA+IFxyXG4vLyBjbGFzcyBBbGVydCB7XHJcbi8vIFx0Y29uc3RydWN0b3IgKGEsIGMsIGQpIHtcclxuLy8gXHRcdHRoaXMubWVzc2FnZSA9IGE7XHJcbi8vIFx0XHR0aGlzLmNzc0NsYXNzID0gYztcclxuLy8gXHRcdHRoaXMub3V0ID0gZDtcclxuLy8gXHR9XHJcbi8vIFx0c2hvd0FsZXJ0KCkge1xyXG4vLyBcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm91dCkuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiJHt0aGlzLmNzc0NsYXNzfVwiPiR7dGhpcy5tZXNzYWdlfTwvcD5gO1xyXG4vLyBcdH1cclxuLy8gXHRteUFsZXJ0KCkge1xyXG4vLyBcdFx0YWxlcnQodGhpcy5tZXNzYWdlKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuLy8gY2xhc3MgQWxlcnQyIGV4dGVuZHMgQWxlcnQge1xyXG4vLyBcdGNvbnN0cnVjdG9yKGEsIGMsIGQsIGljb24pIHtcclxuLy8gXHRcdHN1cGVyIChhLCBjLCBkKTtcclxuLy8gXHRcdHRoaXMuaWNvbiA9IGljb247XHJcbi8vIFx0fVxyXG4vLyBcdHNob3dJY29uQWxlcnQoKSB7XHJcbi8vIFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3V0KS5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCIke3RoaXMuY3NzQ2xhc3N9XCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPiR7dGhpcy5pY29ufVxyXG4vLyBcdDwvaT4ke3RoaXMubWVzc2FnZX08L3A+YDtcclxuLy8gXHR9XHJcbi8vIFx0bXlBbGVydCgpIHtcclxuLy8gXHRcdGFsZXJ0KCdoaScgKyB0aGlzLm1lc3NhZ2UpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG4vLyBsZXQgbSA9IG5ldyBBbGVydCgnTXkgbWVzc3NhZ2UnLCAncmVkJywgJy50ZXN0Jyk7XHJcbi8vIGNvbnNvbGUubG9nKG0pO1xyXG4vLyBtLnNob3dBbGVydCgpO1xyXG4vLyBsZXQgbTIgPSBuZXcgQWxlcnQyKCdNeSBtZXNzc2FnZScsICdyZWQnLCAnLnRlc3QnLCAnYWNjb3VudF9iYWxhbmNlJyk7XHJcbi8vIC8vIG0yLnNob3dBbGVydCgpO1xyXG4vLyBtMi5zaG93SWNvbkFsZXJ0KCk7XHJcbi8vIG0yLm15QWxlcnQoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIGxldCBzaG9wcGluZ0xpc3QgPSBbXTtcclxuLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykgIT0gdW5kZWZpbmVkKSB7XHJcbi8vIFx0c2hvcHBpbmdMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpKTtcclxuLy8gXHRvdXQoKTtcclxuLy8gfVxyXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2wtYWRkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vIFx0bGV0IHNsTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbC1uYW1lJykudmFsdWU7XHJcbi8vIFx0bGV0IHNsUXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsLXF0eScpLnZhbHVlO1xyXG4vLyBcdGxldCB0ZW1wID0ge307XHJcbi8vIFx0dGVtcC5uYW1lID0gc2xOYW1lO1xyXG4vLyBcdHRlbXAucXVhbnRpdHkgPSBzbFF0eTtcclxuLy8gXHR0ZW1wLmNoZWNrID0gZmFsc2U7XHJcbi8vIFx0bGV0IGkgPSBzaG9wcGluZ0xpc3QubGVuZ3RoO1xyXG4vLyBcdHNob3BwaW5nTGlzdFtpXSA9IHRlbXA7XHJcbi8vIFx0Y29uc29sZS5sb2coc2hvcHBpbmdMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRlbXAubmFtZSkpXHJcbi8vIFx0Ly8gc2hvcHBpbmdMaXN0LmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4vLyBcdC8vIFx0aWYgKHRlbXAubmFtZSA9PT0gaXRlbS5uYW1lICl7XHJcbi8vIFx0Ly8gXHRcdGNvbnNvbGUubG9nKGl0ZW0ubmFtZSk7XHJcbi8vIFx0Ly8gXHR9IGVsc2Uge1xyXG4vLyBcdC8vIFx0XHRcclxuLy8gXHQvLyBcdH1cclxuLy8gXHQvLyB9KTtcclxuLy8gXHRvdXQoKTtcclxuLy8gXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHNob3BwaW5nTGlzdCkpO1xyXG4vLyB9KTtcclxuLy8gZnVuY3Rpb24gb3V0KCkge1xyXG4vLyBcdGxldCBvdXQgPSAnJztcclxuLy8gXHRmb3IgKGxldCBrZXkgaW4gc2hvcHBpbmdMaXN0KSB7XHJcbi8vIFx0XHRpZiAoc2hvcHBpbmdMaXN0W2tleV0uY2hlY2sgPT09IHRydWUpIHtcclxuLy8gXHRcdFx0b3V0ICs9IGA8aW5wdXQgaWQ9XCIke3Nob3BwaW5nTGlzdFtrZXldLm5hbWV9XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD5gO1xyXG4vLyBcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0b3V0ICs9IGA8aW5wdXQgaWQ9XCIke3Nob3BwaW5nTGlzdFtrZXldLm5hbWV9XCIgdHlwZT1cImNoZWNrYm94XCI+YDtcclxuLy8gXHRcdH1cclxuLy8gXHRcdG91dCArPSBgJHtzaG9wcGluZ0xpc3Rba2V5XS5uYW1lfSAke3Nob3BwaW5nTGlzdFtrZXldLnF1YW50aXR5fSA8YnI+YDtcclxuLy8gXHR9XHJcbi8vIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsLW91dCcpLmlubmVySFRNTCA9IG91dDtcclxuXHJcbi8vIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gbGV0IGEgPSdoZWxsbyxoaSxnb29kZGF5JztcclxuLy8gY29uc29sZS5sb2coYS5zcGxpdCgnLCcpKTtcclxuLy8gbGV0IGIgPSBbOCwgOSwgN107XHJcbi8vIGIuZm9yRWFjaChmdW5jdGlvbihlbGVtLCBpbmRleCkge1xyXG4vLyBcdGNvbnNvbGUubG9nKGluZGV4KTtcclxuLy8gXHRjb25zb2xlLmxvZyhlbGVtICogMik7XHJcbi8vIFx0Y29uc29sZS5sb2coJy0tLS0nKTtcclxuLy8gfSk7XHJcbi8vIGxldCBhID0gWzQsIDUsIDEyLCAyMDAsIDEsIDAsIC0yXTtcclxuLy8gbGV0IGIgPSBhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZyhpbmRleCk7XHJcbi8vIFx0cmV0dXJuIGl0ZW0gKiA1O1xyXG4vLyB9KTtcclxuLy8gbGV0IGMgPSBhLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4vLyBcdGlmIChpdGVtID4gMCkge1xyXG4vLyBcdFx0cmV0dXJuIHRydWU7XHJcbi8vIFx0fVxyXG4vLyB9KVxyXG4vLyBjb25zb2xlLmxvZyhjKTtcclxuLy8gbGV0IGFyciA9IFs0LCA3LCA5XTtcclxuLy8gbGV0IGRpdlMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpO1xyXG4vLyBsZXQgcVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwJyk7XHJcbi8vIGNvbnNvbGUubG9nKGRpdlMpO1xyXG4vLyBjb25zb2xlLmxvZyhxUyk7XHJcbi8vIGNvbnNvbGUubG9nKGFycik7XHJcbi8vIGZvciAobGV0IHByb3Agb2YgcVMpIHtcclxuLy8gXHRjb25zb2xlLmxvZyhwcm9wKTtcclxuLy8gfVxyXG4vLyBmb3IgKGxldCBrZXkgaW4gcVMpIHtcclxuLy8gXHRjb25zb2xlLmxvZyhxU1trZXldKTtcclxuLy8gfVxyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHFTLmxlbmd0aDsgaSsrKSB7XHJcbi8vIFx0Y29uc29sZS5sb2cocVNbaV0pO1xyXG4vLyB9XHJcbi8vIGxldCBhID0gWzQsIDUsIDZdO1xyXG4vLyBsZXQgYiA9IFtcclxuLy8gWzEsIDIsIDNdLFxyXG4vLyBbNCwgNSwgNl0sXHJcbi8vIFs3LCA4LCA5XSxcclxuLy8gXTtcclxuLy8gbGV0IGQgPSBbMSwgMCwgMCwgMCwgMF07XHJcbi8vIGxldCBrID0gMDtcclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykub25jbGljayA9ICgpID0+IHtcclxuLy8gXHRpZiAoaysxIDwgNSkge1xyXG4vLyBcdFx0ZFtrXSA9IDA7XHJcbi8vIFx0XHRkW2srMV0gPSAxO1xyXG4vLyBcdFx0aysrO1xyXG4vLyBcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dC0yJykuaW5uZXJIVE1MID0gZDtcclxuLy8gXHR9XHJcbi8vIH1cclxuLy8gY29uc29sZS5sb2coYik7XHJcblxyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuLy8gXHQvLyBjb25zb2xlLmxvZyhiW2ldKTtcclxuLy8gXHRsZXQgYyA9IGJbaV07XHJcbi8vIFx0Zm9yIChsZXQgaiA9IGMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGNbal0pO1xyXG4vLyBcdH1cclxuLy8gfVxyXG4vLyBsZXQgb3V0ID0gJyc7XHJcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xyXG4vLyBcdGZvciAobGV0IGogPSAwOyBqIDwgYltpXS5sZW5ndGg7IGorKykge1xyXG4vLyBcdFx0b3V0ICs9IGJbaV1bal07XHJcbi8vIFx0fVxyXG4vLyBcdG91dCArPSAnPGJyPidcclxuLy8gfVxyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0JykuaW5uZXJIVE1MID0gb3V0O1xyXG5cclxuLy8gbGV0IG91dCA9ICcnO1xyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuLy8gXHRmb3IgKGxldCBqID0gMDsgaiA8IGJbaV0ubGVuZ3RoOyBqKyspIHtcclxuLy8gXHRcdGlmIChiW2ldW2pdID4gNCkge1xyXG4vLyBcdFx0XHRvdXQgKz0gYltpXVtqXSArICcgJztcclxuLy8gXHRcdH1cclxuLy8gXHR9XHJcbi8vIFx0b3V0ICs9ICc8YnI+JztcclxuLy8gfVxyXG4vLyBjb25zb2xlLmxvZyhvdXQpO1xyXG5cclxuLy8gY29uc3QgYSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuLy8gY29uc3QgYiA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnXTtcclxuLy8gY29uc29sZS5sb2coYS5sZW5ndGgpO1xyXG4vLyBjb25zb2xlLmxvZyhhLnB1c2goMTAsIDExLCAxNSwgNDQpKTtcclxuLy8gY29uc29sZS5sb2coYSk7XHJcbi8vIGIucHVzaCgnaicsICdoJyk7XHJcbi8vIGNvbnNvbGUubG9nKGIpO1xyXG4vLyBjb25zb2xlLmxvZyhiLnBvcCgpKTtcclxuLy8gY29uc29sZS5sb2coYi5wb3AoKSk7XHJcbi8vIGNvbnNvbGUubG9nKGIpO1xyXG5cclxuLy8gLy8g0YPQtNCw0LvQuNGC0Ywg0Y3Qu9C10LzQtdC90YIg0LLQvdGD0YLRgNC4INC80LDRgdGB0LjQstCwXHJcbi8vIGRlbGV0ZSBhWzNdO1xyXG4vLyBjb25zb2xlLmxvZyhhKTtcclxuLy8gYS5zcGxpY2UoMywgNCwgJ2hpJyk7XHJcbi8vIGNvbnNvbGUubG9nKGEpO1xyXG4vLyBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyBhLmlubmVySFRNTCA9ICdIZWxsbyEnO1xyXG4vLyBhLmNsYXNzTGlzdC5hZGQoJ29uZScpO1xyXG4vLyBhLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbi8vIFx0YWxlcnQoJ0hlbGxvJyk7XHJcbi8vIH1cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QnKS5hcHBlbmRDaGlsZChhKTtcclxuLy8gY29uc29sZS5sb2coYSk7XHJcbi8vIGxldCBuYW1lID0gcHJvbXB0KCfQmtCw0Log0LLQsNGBINC30L7QstGD0YI/JywgJycpO1xyXG4vLyBhbGVydChg0J/RgNC40LLQtdGCLCAke25hbWV9IWApO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gbGV0IGJpcnRoWWVhciA9IHBhcnNlSW50KHByb21wdCgn0JLQstC10LTQuNGC0LUg0LPQvtC0INCy0LDRiNC10LPQviDRgNC+0LbQtNC10L3QuNGPJywgJycpKTtcclxuLy8gY29uc3QgY3VycmVudFllYXIgPSAyMDE5O1xyXG4vLyBpZiAoaXNGaW5pdGUoYmlydGhZZWFyKSkge1xyXG4vLyBcdGFsZXJ0KGDQktCw0Ygg0LLQvtC30YDQsNGB0YI6ICR7Y3VycmVudFllYXIgLSBiaXJ0aFllYXJ9YCk7XHJcbi8vIH0gZWxzZSB7XHJcbi8vIGFsZXJ0KCfQktCy0LXQtNC40YLQtSDRh9C40YHQu9C+Jyk7XHJcbi8vIH1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBsZXQgc2lkZUxlbmd0aCA9IHByb21wdCgn0KPQutCw0LbQuNGC0LUg0LTQu9C40L3QvdGDINGB0YLQvtGA0L7QvdGLINC60LLQsNC00YDQsNGC0LA6JywgJycpO1xyXG4vLyBhbGVydChg0J/QtdGA0LjQvNC10YLRgCDQutCy0LDQtNGA0LDRgtCwOiAke3NpZGVMZW5ndGggKiA0fWApO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGxldCBjaXJjbGVSYWRpdXMgPSBwcm9tcHQoJ9Cj0LrQsNC20LjRgtC1INGA0LDQtNC40YPRgSDQvtC60YDRg9C20L3QvtGB0YLQuDonLCAnJyk7XHJcbi8vIGFsZXJ0KGDQn9C70L7RidCw0LTRjCDQvtC60YDRg9C20L3QvtGB0YLQuDogJHtNYXRoLnJvdW5kKChNYXRoLnBvdyhjaXJjbGVSYWRpdXMsIDIpICogTWF0aC5QSSkgKiAxMDApIC8gMTAwfWApO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGxldCBkaXN0YW5jZSA9IHByb21wdCgn0KPQutCw0LbQuNGC0LUg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LIg0LrQuNC70L7QvNC10YLRgNCw0YUg0LzQtdC20LTRgyDQs9C+0YDQvtC00LDQvNC4OicsICcnKTtcclxuLy8gbGV0IHRpbWUgPSBwcm9tcHQoJ9Cj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INGH0LDRgdC+0LIg0L3QsCDQtNC+0YDQvtCz0YM6JywgJycpO1xyXG4vLyBpZiAoZGlzdGFuY2UgIT0gbnVsbCAmJiB0aW1lICE9IG51bGwpIHtcclxuLy8gYWxlcnQoYNCd0LXQvtCx0YXQvtC00LjQvNCw0Y8g0YHQutC+0YDQvtGB0YLRjDogJHtkaXN0YW5jZSAvIHRpbWV9INC60Lwv0YfQsNGBYCk7XHJcbi8vIH0gZWxzZSB7XHJcbi8vIFx0YWxlcnQoJ9CS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUnKTtcclxuLy8gfVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGxldCBkb2xsYXJzID0gcHJvbXB0KCfQodC60L7Qu9GM0LrQviDQtNC+0LvQu9Cw0YDQvtCyINCy0Ysg0YXQvtGC0LjRgtC1INC+0LHQvNC10L3Rj9GC0Yw/JywgJycpO1xyXG4vLyBjb25zdCByYXRlID0gMS4xO1xyXG4vLyBhbGVydChg0JLRiyDQv9C+0LvRg9GH0LjRgtC1ICR7TWF0aC5yb3VuZChkb2xsYXJzICogcmF0ZSAqIDEwMCkgLyAxMDB9INC10LLRgNC+YCk7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gbGV0IGZsYXNoTWVtb3J5ID0gcHJvbXB0KCfQo9C60LDQttC40YLQtSDQvtCx0YzQtdC8INGE0LvQtdGI0LrQuCDQsiDQs9C40LPQsNCx0LDQudGC0LDRhScsICcnKTtcclxuLy8gYWxlcnQoYNCf0L7QvNC10YnQsNC10YLRgdGPICR7TWF0aC5mbG9vcihmbGFzaE1lbW9yeSAqIDEwMjQgLyA4MjApfSDRhNCw0LnQu9C+0LJgKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBsZXQgbW9uZXlTdW0gPSBwcm9tcHQoJ9Ch0LrQvtC70YzQutC+INCz0YDQuNCy0LXQvSDRgyDQstCw0YEg0LXRgdGC0Yw/JywgJycpO1xyXG4vLyBsZXQgY2hvY29sYXRlUHJpY2UgPSBwcm9tcHQoJ9Ca0LDQutCw0Y8g0YbQtdC90LAg0YjQvtC60L7Qu9Cw0LTQutC4PycsICcnKTtcclxuLy8gYWxlcnQoYNCS0Ysg0LzQvtC20LXRgtC1INC60YPQv9C40YLRjCAke01hdGguZmxvb3IobW9uZXlTdW0gLyBjaG9jb2xhdGVQcmljZSl9INGI0L7QutC+0LvQsNC00L7QuiDQuCDRgyDQstCw0YEg0L7RgdGC0LDQvdC10YLRgdGPICR7TWF0aC5yb3VuZCgobW9uZXlTdW0gJSBjaG9jb2xhdGVQcmljZSkgKiAxMDApIC8gMTAwfSDQs9GA0LjQstC10L1gKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBsZXQgbnVtID0gcHJvbXB0KCfQktCy0LXQtNC40YLQtSDRgtGA0LXRhdC30L3QsNGH0L3QvtC1INGH0LjRgdC70L4nLCAnJyk7XHJcbi8vIGxldCByZXN1bHQgPSAnJztcclxuXHJcbi8vIHdoaWxlIChudW0gPiAwKSB7XHJcbi8vIFx0cmVzdWx0ICs9IChudW0gJSAxMCk7XHJcbi8vIFx0bnVtID0gcGFyc2VJbnQobnVtIC8gMTApO1xyXG4vLyB9XHJcbi8vIGFsZXJ0KHJlc3VsdCk7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGxldCBkZXBvc2l0ID0gcHJvbXB0KCfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDINCy0LrQu9Cw0LTQsCcsICcnKTtcclxuLy8gY29uc3QgbW9udGggPSAyO1xyXG4vLyBjb25zdCBwZXJjZW50ID0gMC4wNTtcclxuLy8gYWxlcnQoYNCh0YPQvNC80LAg0L3QsNGH0LjRgdC70LXQvdC90LDRjyDQv9C+INC/0YDQvtGG0LXQvdGC0LDQvDogJHtNYXRoLmZsb29yKChkZXBvc2l0ICogbW9udGggLyAxMikgKiBwZXJjZW50ICogMTAwKSAvIDEwMH1gKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IGEgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcbi8vIGNvbnN0IGIgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCddO1xyXG5cclxuLy8gY29uc29sZS5sb2coYS5sZW5ndGgpO1xyXG4vLyBjb25zb2xlLmxvZyhhLnB1c2goMTEsIDEzLCAxNSwgMTcpKTtcclxuLy8gY29uc29sZS5sb2coYSk7XHJcbi8vIGIucHVzaCgnaScsICdqJyk7XHJcbi8vIGNvbnNvbGUubG9nKGIpO1xyXG4vLyBiLnBvcCgpO1xyXG4vLyBiLnBvcCgpO1xyXG4vLyBiLnBvcCgpO1xyXG4vLyBjb25zb2xlLmxvZyhiKTtcclxuLy8gZGVsZXRlIGJbM107XHJcbi8vIGNvbnNvbGUubG9nKGIpO1xyXG4vLyBhLnNwbGljZSgzLCAzLCAnaGknKTtcclxuLy8gY29uc29sZS5sb2coYSk7XHJcbi8vIGEudW5zaGlmdCgzKTtcclxuLy8gY29uc29sZS5sb2coYSk7XHJcbi8vIGNvbnN0IG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUnKTtcclxuLy8gb25lLnN0eWxlLndpZHRoID0gJzE1MHB4JztcclxuLy8gb25lLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnNDBweCc7XHJcbi8vIG9uZS5jbGFzc0xpc3QuYWRkKCd0d28nLCAndGhyZWUnKTtcclxuLy8gb25lLmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XHJcbi8vIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcclxuLy8gdG9nZ2xlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuLy8gXHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3RocmVlJyk7XHJcbi8vIH1cclxuLy8gY29uc29sZS5sb2cob25lLmdldEF0dHJpYnV0ZSgnZGF0YScpKTtcclxuLy8gb25lLnNldEF0dHJpYnV0ZSgnZGF0YS1udW0nLCA2KTtcclxuXHJcbi8vIGNvbnN0IGdhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYXMnKTtcclxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBnYXMubGVuZ3RoOyBpKyspIHtcclxuLy8gXHRnYXNbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4vLyBcdFx0bGV0IGdhbGxvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbG9ucycpLnZhbHVlO1xyXG4vLyBcdFx0bGV0IGFtb3VudCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhnYWxsb25zICogYW1vdW50KTtcclxuLy8gXHR9XHJcbi8vICB9XHJcblxyXG4vLyAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gIGEuaW5uZXJIVE1MID0gJ0hlbGxvISc7XHJcbi8vICBhLmNsYXNzTGlzdC5hZGQoJ2ZvdXInKTtcclxuXHJcbi8vICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdCcpLmFwcGVuZENoaWxkKGEpO1xyXG4vLyAgIGNvbnNvbGUubG9nKGEpO1xyXG4vLyBsZXQgc3VtID0gMDtcclxuLy8gbGV0IGsgPSAwO1xyXG4vLyB3aGlsZSAoayA8PSAzKSB7XHJcbi8vIFx0c3VtICs9IGs7XHJcbi8vIFx0aysrO1xyXG4vLyB9XHJcbi8vIGNvbnNvbGUubG9nKCdzdW06ICcgKyBzdW0pO1xyXG4vLyBsZXQgb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dCcpO1xyXG4vLyBsZXQgcCA9IDA7XHJcbi8vIGxldCBvdXRTdHIgPSAnJztcclxuLy8gbGV0IGZsYWcgPSAzO1xyXG4vLyB3aGlsZSAocCA8IDQpIHtcclxuLy8gXHRsZXQgcDEgPSAwO1xyXG4vLyBcdHdoaWxlIChwMSA8IDQpIHtcclxuLy8gXHRcdGlmIChwMSA8IGZsYWcpIHtcclxuLy8gXHRcdFx0b3V0U3RyICs9ICcwJztcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdG91dFN0ciArPSAnKic7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRwMSsrO1xyXG4vLyBcdH1cclxuLy8gXHRmbGFnLS07XHJcbi8vIFx0b3V0U3RyICs9ICc8YnI+J1xyXG4vLyBcdHArKztcclxuLy8gfVxyXG4vLyBvdXQuaW5uZXJIVE1MID0gb3V0U3RyO1xyXG4vLyBjb25zdCBleGVyY2lzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGVyY2lzZScpO1xyXG4vLyBjb25zb2xlLmxvZyhleGVyY2lzZSk7XHJcbi8vIGNvbnNvbGUubG9nKGV4ZXJjaXNlLmlubmVySFRNTCk7XHJcbi8vIGNvbnNvbGUubG9nKGV4ZXJjaXNlLmlubmVyVGV4dCk7XHJcbi8vIGNvbnNvbGUubG9nKGV4ZXJjaXNlLnRleHRDb250ZW50KTtcclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dC0xJykuaW5uZXJIVE1MID0gZXhlcmNpc2UuaW5uZXJIVE1MO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0LTEnKS5pbm5lclRleHQgPSBleGVyY2lzZS5pbm5lclRleHQ7XHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXQtMScpLnRleHRDb250ZW50ID0gZXhlcmNpc2UudGV4dENvbnRlbnQ7XHJcbi8vIGxldCBmMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mLTEnKTtcclxuLy8gZnVuY3Rpb24gb25lKCkge1xyXG4vLyBcdGNvbnNvbGUubG9nKCd3b3JrJyk7XHJcbi8vIH1cclxuLy8gb25lKCk7XHJcbi8vIC8vIGYxLm9uY2xpY2sgPSBvbmU7XHJcbi8vIGYxLm9uY2xpY2sgPSAoKSA9PiB7XHJcbi8vIFx0Y29uc29sZS5sb2coJ2hlbGxvJyk7XHJcbi8vIH1cclxuLy8gY29uc29sZS5sb2coMSArIG9uZSgpKTtcclxuLy8gY29uc29sZS5sb2cob25lKCkpO1xyXG4vLyBmdW5jdGlvbiB0d28oKSB7XHJcbi8vIFx0Y29uc29sZS5sb2coJ3dvcmsgMjIyMjInKTtcclxuLy8gXHRyZXR1cm4gNTQ7XHJcbi8vIH1cclxuXHJcbi8vIHR3bygpO1xyXG4vLyBjb25zb2xlLmxvZygxICsgdHdvKCkpO1xyXG5cclxuLy8gbGV0IGEgPSA4O1xyXG4vLyBsZXQgYiA9IDk7XHJcbi8vIGZ1bmN0aW9uIG11bHRpcGx5KCkge1xyXG4vLyBcdGNvbnNvbGUubG9nKGEqYik7XHJcbi8vIFx0cmV0dXJuIGEgKiBiO1xyXG4vLyB9XHJcbi8vIGxldCBjMSA9IG11bHRpcGx5KCk7XHJcbi8vIGxldCBjMiA9IDEwICogbXVsdGlwbHkoKTtcclxuLy8gY29uc29sZS5sb2coYzEsIGMyKTtcclxuLy8gZnVuY3Rpb24gbXVsdGkyKHgsIHkpIHtcclxuLy8gXHRyZXR1cm4geCAqIHk7XHJcbi8vIH1cclxuLy8gY29uc29sZS5sb2cobXVsdGkyKDMsIDIpKTtcclxuLy8gY29uc29sZS5sb2cobXVsdGkyKDIwLCAyKSk7XHJcbi8vIGNvbnNvbGUubG9nKG11bHRpMigyMCwgYSkpO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZi0yJykub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4vLyBcdGNvbnNvbGUubG9nKCcrKysrKysnKTtcclxuLy8gfVxyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZi0yJykub25jbGljayA9ICgpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZygnLS0tLS0tJyk7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHJcbi8vIH1cclxuLy8gKGEsIGIpID0+IHt9XHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbi8vIFx0bGV0IHJhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG4vLyBcdGNvbnNvbGUubG9nKHJhZCk7XHJcbi8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByYWQubGVuZ3RoOyBpKyspIHtcclxuLy8gXHRcdGlmIChyYWRbaV0uY2hlY2tlZCkge1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhyYWRbaV0udmFsdWUpO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH1cclxuLy8gfVx0XHJcbi8vIGxldCBvdXQgPSAnJztcclxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbi8vIFx0Ly8gaWYgKGkgPT0gNikgYnJlYWs7XHJcbi8vIFx0b3V0ICs9IGkgKyAnICc7XHJcbi8vIFx0aWYgKGkgPT0gNikgYnJlYWs7XHJcbi8vIH1cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dCcpLmlubmVySFRNTCA9IG91dDtcclxuLy8gbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vbmUnKTtcclxuLy8gY29uc29sZS5sb2coZGl2KTtcclxuLy8gLy8gZGl2LnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcclxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBkaXYubGVuZ3RoOyBpKyspIHtcclxuLy8gXHRjb25zb2xlLmxvZyhkaXZbaV0pO1xyXG4vLyBcdGRpdltpXS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JlZCc7XHJcbi8vIFx0ZGl2W2ldLm9uY2xpY2sgPSB0d287XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gdHdvKCkge1xyXG4vLyBcdGNvbnNvbGUubG9nKCdXb3JrISEnKVxyXG4vLyB9XHJcbi8vIGxldCBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb25lJyk7XHJcbi8vIGNvbnNvbGUubG9nKGIpO1xyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuLy8gXHRiW2ldLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgYmxhY2snO1xyXG4vLyB9XHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tMScpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbi8vIFx0Y29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrJykudmFsdWUpO1xyXG4vLyBcdGxldCBteUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrJyk7XHJcbi8vIFx0Y29uc29sZS5sb2cobXlDaGVja2JveC5jaGVja2VkKTtcclxuLy8gXHRpZiAobXlDaGVja2JveC5jaGVja2VkKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZygnT2snKTtcclxuLy8gXHR9IGVsc2Uge1xyXG4vLyBcdFx0Y29uc29sZS5sb2coJ05vdCBPaycpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLTInKS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbi8vIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gXHQvLyBsZXQgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d28nKTtcclxuLy8gXHQvLyBjb25zb2xlLmxvZyh0ZXh0LnZhbHVlKTtcclxuLy8gXHQvLyB0ZXh0LnZhbHVlID0gJ29uZSc7XHJcbi8vIFx0bGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbi8vIFx0Y29uc29sZS5sb2coZm9ybSk7XHJcbi8vIFx0Y29uc29sZS5sb2coZm9ybS5lbGVtZW50cy5uMS52YWx1ZSk7XHJcbi8vIFx0Y29uc29sZS5sb2coZm9ybS5lbGVtZW50cy50aHJlZS52YWx1ZSk7XHJcbi8vIH1cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykub25jbGljayA9ICgpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25lJykudmFsdWUpO1xyXG4vLyBcdC8vU3R5bGVzXHJcbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXHJcbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uZScpLnZhbHVlO1xyXG4vLyB9XHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUnKS5vbmlucHV0ID0gKCkgPT4ge1xyXG4vLyBcdGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUnKS52YWx1ZSk7XHJcbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbicpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUnKS52YWx1ZTtcclxuLy8gfVxyXG4vLyBsZXQgYSA9IDk7XHJcbi8vIGlmIChhICE9IDkpIHtcclxuLy8gXHRjb25zb2xlLmxvZygneWVzJyk7XHJcbi8vIH0gZWxzZSB7XHJcbi8vIFx0Y29uc29sZS5sb2coJ25vJyk7XHJcbi8vIH1cclxuLy8gU2xpZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBsZXQgbGVmdEJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1sZWZ0Jyk7XHJcbi8vIGxlZnRCdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlTGVmdCk7XHJcbi8vIGF1dG9TbGlkZXIoKTtcclxuLy8gbGV0IGxlZnQgPSAwO1xyXG4vLyBsZXQgdGltZXI7XHJcbi8vIGZ1bmN0aW9uIGF1dG9TbGlkZXIgKCkge1xyXG4vLyBcdHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbi8vIFx0XHR2YXIgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lJyk7XHJcbi8vIFx0XHRsZWZ0IC09IDM2MDtcclxuLy8gXHRcdGlmIChsZWZ0IDwgLTEwODApIHtcclxuLy8gXHRcdFx0bGVmdCA9IDA7XHJcbi8vIFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRsaW5lLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcclxuLy8gXHRcdGF1dG9TbGlkZXIoKTtcclxuLy8gXHR9LCAyMDAwKTtcclxuLy8gfVxyXG5cclxuLy8gU2xpZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBtMS5sZW5ndGg7IGkrKykge1xyXG4vLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXQnKS5pbm5lckhUTUwgKz0gbTFbaV0gKyAnPGJyPic7XHJcbi8vIH1cclxuXHJcbi8vIGxldCBwcm9nTnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEpO1xyXG4vLyBcdC8vIGxldCB0ZW1wT3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAtb3V0Jyk7XHJcbi8vIFx0Ly8gdGVtcE91dC5pbm5lckhUTUwgPSBwcm9nTnVtO1xyXG5cclxuLy8gZnVuY3Rpb24gZnVuMSgpIHtcclxuXHJcbi8vIFx0bGV0IG51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteW51bScpLnZhbHVlO1xyXG4vLyBcdGxldCBvdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dCcpO1xyXG5cclxuLy8gXHRpZiAobnVtID09IHByb2dOdW0pIHtcclxuLy8gXHRcdG91dDEuaW5uZXJIVE1MID0gJ1lvdSB3aW4nO1xyXG4vLyBcdH0gZWxzZSBpZiAobnVtID4gcHJvZ051bSkge1xyXG4vLyBcdFx0b3V0MS5pbm5lckhUTUwgPSAnWW91ciBudW1iZXIgdmVyeSBiaWcnO1xyXG4vLyBcdH0gZWxzZSB7XHJcbi8vIFx0XHRvdXQxLmlubmVySFRNTCA9ICdZb3VyIG51bWJlciBsaXR0bGUnO1xyXG4vLyBcdH1cclxuLy8gfVxyXG4vLyBsZXQgYnRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcclxuLy8gYnRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bjEpOyJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k4eVgycHpMM055WXk5cWN5OWhjSEF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenRCUTBGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xFMUJRWFpDTEVWQlFTdENMR2RDUVVFdlFpeERRVUZuUkN4VFFVRm9SQ3hGUVVFeVJDeFZRVUZETEVOQlFVUXNSVUZCVHp0QlFVTnFSU3hGUVVGQkxFOUJRVThzUTBGQlF5eEhRVUZTTEVOQlFWa3NVMEZCV2p0QlFVTkJMRVZCUVVFc1QwRkJUeXhEUVVGRExFZEJRVklzUTBGQldTeERRVUZETEVOQlFVTXNTVUZCWkR0QlFVTkJMRk5CUVU4c1MwRkJVRHRCUVVOQkxFTkJTa1FzUlN4RFFVdEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVVZCTzBGQlEwRTdRVUZGUVR0QlFVVkJPMEZCUTBFN1FVRkZRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVVZCTzBGQlEwRTdRVUZGUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJSVUU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkhRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlMwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUlVFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRvS1h0bWRXNWpkR2x2YmlCeUtHVXNiaXgwS1h0bWRXNWpkR2x2YmlCdktHa3NaaWw3YVdZb0lXNWJhVjBwZTJsbUtDRmxXMmxkS1h0MllYSWdZejFjSW1aMWJtTjBhVzl1WENJOVBYUjVjR1Z2WmlCeVpYRjFhWEpsSmlaeVpYRjFhWEpsTzJsbUtDRm1KaVpqS1hKbGRIVnliaUJqS0drc0lUQXBPMmxtS0hVcGNtVjBkWEp1SUhVb2FTd2hNQ2s3ZG1GeUlHRTlibVYzSUVWeWNtOXlLRndpUTJGdWJtOTBJR1pwYm1RZ2JXOWtkV3hsSUNkY0lpdHBLMXdpSjF3aUtUdDBhSEp2ZHlCaExtTnZaR1U5WENKTlQwUlZURVZmVGs5VVgwWlBWVTVFWENJc1lYMTJZWElnY0QxdVcybGRQWHRsZUhCdmNuUnpPbnQ5ZlR0bFcybGRXekJkTG1OaGJHd29jQzVsZUhCdmNuUnpMR1oxYm1OMGFXOXVLSElwZTNaaGNpQnVQV1ZiYVYxYk1WMWJjbDA3Y21WMGRYSnVJRzhvYm54OGNpbDlMSEFzY0M1bGVIQnZjblJ6TEhJc1pTeHVMSFFwZlhKbGRIVnliaUJ1VzJsZExtVjRjRzl5ZEhOOVptOXlLSFpoY2lCMVBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVXNhVDB3TzJrOGRDNXNaVzVuZEdnN2FTc3JLVzhvZEZ0cFhTazdjbVYwZFhKdUlHOTljbVYwZFhKdUlISjlLU2dwSWl3aUx5OGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxta3RNU2NwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJ0bGVYQnlaWE56Snl3Z0tHVXBJRDArSUh0Y2NseHVMeThnWEhSamIyNXpiMnhsTG14dlp5aGxMbU52WkdVcE8xeHlYRzR2THlCOUtUdGNjbHh1Wkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbWt0TVNjcExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oydGxlV1J2ZDI0bkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEdOdmJuTnZiR1V1Ykc5bktDZHJaWGxrYjNkdUp5azdYSEpjYmx4MFkyOXVjMjlzWlM1c2IyY29aUzVqYjJSbEtUdGNjbHh1WEhSeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYm4wcFhISmNiaTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEhKY2JpOHZJR052Ym5OMElHOXVaU0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R2Ym1VbktUdGNjbHh1THk4Z2IyNWxMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLQ2tnUFQ0Z2UxeHlYRzR2THlCY2RHTnZibk52YkdVdWJHOW5LQ2RqYkdsamF5Y3BPMXh5WEc0dkx5QjlLVHRjY2x4dUx5OGdiMjVsTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOdmJuUmxlSFJ0Wlc1MUp5d2dLR1VwSUQwK0lIdGNjbHh1THk4Z1hIUmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmk4dklGeDBZMjl1YzI5c1pTNXNiMmNvSjJSdmRXSnNaV05zYVdOckp5azdYSEpjYmk4dklIMHBPMXh5WEc0dkx5QmpiMjV6ZENCMGQyOGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25kSGR2SnlrN1hISmNiaTh2SUhSM2J5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHRiM1Z6WldWdWRHVnlKeXdnS0NrZ1BUNGdlMXh5WEc0dkx5QmNkSFIzYnk1emRIbHNaUzVpWVdOclozSnZkVzVrUTI5c2IzSWdQU0FuY21Wa0p6dGNjbHh1THk4Z2ZTazdYSEpjYmk4dklIUjNieTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R0YjNWelpXeGxZWFpsSnl3Z0tDa2dQVDRnZTF4eVhHNHZMeUJjZEhSM2J5NXpkSGxzWlM1aVlXTnJaM0p2ZFc1a1EyOXNiM0lnUFNBblozSmxaVzRuTzF4eVhHNHZMeUI5S1R0Y2NseHVMeThnZEhkdkxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyMXZkWE5sWkc5M2JpY3NJQ2dwSUQwK0lIdGNjbHh1THk4Z1hIUjBkMjh1YzNSNWJHVXVZbUZqYTJkeWIzVnVaRU52Ykc5eUlEMGdKMjl5WVc1blpTYzdYSEpjYmk4dklIMHBPMXh5WEc0dkx5QjBkMjh1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYlc5MWMyVjFjQ2NzSUNncElEMCtJSHRjY2x4dUx5OGdYSFIwZDI4dWMzUjViR1V1WW1GamEyZHliM1Z1WkVOdmJHOXlJRDBnSjJKc2RXVW5PMXh5WEc0dkx5QjlLVHRjY2x4dUx5OGdiR1YwSUhBZ1BTQXhNRHRjY2x4dUx5OGdZMjl1YzNRZ2NISkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duY0hKaWRHNG5LVHRjY2x4dUx5OGdjSEpDZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb0tTQTlQaUI3WEhKY2JpOHZJRngwY0Nzck8xeHlYRzR2THlCY2RHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nkd2NtOW5jbVZ6Y3ljcExuWmhiSFZsSUQwZ2NEdGNjbHh1THk4Z2ZTazdYSEpjYmk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEhKY2JpOHZJR052Ym5OMElHMTVUR2x6ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdGVVeHBjM1FuS1R0Y2NseHVMeThnWTI5dWMzUWdiR2x6ZEVKcGJtUnBibWNnUFNCdVpYY2dUR2x6ZEVKcGJtUnBibWNvYlhsTWFYTjBLVHRjY2x4dUx5OGdiR2x6ZEVKcGJtUnBibWN1ZFhCa1lYUmxLQ2s3WEhKY2JpOHZJR3hwYzNSQ2FXNWthVzVuTG1Ga1pDZ25abk5rWm1Sekp5azdYSEpjYmk4dklHeHBjM1JDYVc1a2FXNW5MbUZrWkNnblpuTmtabVJ6SnlrN1hISmNiaTh2SUd4cGMzUkNhVzVrYVc1bkxtRmtaQ2duWm5Oa1ptUnpKeWs3WEhKY2JpOHZJR3hwYzNSQ2FXNWthVzVuTG5KbGJXOTJaU2d4S1R0Y2NseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNjbHh1THk4Z1kyeGhjM01nUVc1cGJXRnNJSHRjY2x4dUx5OGdYSFJqYjI1emRISjFZM1J2Y2lBb2JtRnRaU2tnZTF4eVhHNHZMeUJjZEZ4MGRHaHBjeTV1WVcxbElEMGdibUZ0WlR0Y2NseHVMeThnWEhSOVhISmNibHh5WEc0dkx5QmNkRzFoYTJWVGIzVnVaQ0FvS1NCN1hISmNiaTh2SUZ4MFhIUmpiMjV6YjJ4bExteHZaeWduUjJWdVpYSnBZeUJCYm1sdFlXd2dVMjkxYm1RaEp5azdYSEpjYmk4dklGeDBmVnh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeUJqYkdGemN5QkViMmNnWlhoMFpXNWtjeUJCYm1sdFlXd2dlMXh5WEc0dkx5QmNkR052Ym5OMGNuVmpkRzl5SUNodVlXMWxLU0I3WEhKY2JpOHZJRngwWEhSemRYQmxjaWh1WVcxbEtUdGNjbHh1THk4Z1hIUjlYSEpjYmx4eVhHNHZMeUJjZEcxaGEyVlRiM1Z1WkNBb0tTQjdYSEpjYmk4dklGeDBYSFJ6ZFhCbGNpNXRZV3RsVTI5MWJtUW9LVHRjY2x4dUx5OGdYSFJjZEdOdmJuTnZiR1V1Ykc5bktDZFhiMjltSVNCWGIyOW1JU2NwTzF4eVhHNHZMeUJjZEgxY2NseHVMeThnZlZ4eVhHNHZMeUJqYjI1emRDQmhNU0E5SUc1bGR5QkJibWx0WVd3b0owUnZiaWNwTzF4eVhHNHZMeUJqYjI1emRDQmhNaUE5SUc1bGR5QkViMmNvSjBwbFptWW5LVHRjY2x4dUx5OGdZVEV1YldGclpWTnZkVzVrS0NrN1hISmNiaTh2SUdFeUxtMWhhMlZUYjNWdVpDZ3BPMXh5WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNjbHh1THk4Z1kyeGhjM01nVUdWeWMyOXVJSHRjY2x4dUx5OGdYSFJqYjI1emRISjFZM1J2Y2loZmJtRnRaU3dnWDJGblpTa2dlMXh5WEc0dkx5QmNkRngwZEdocGN5NXVZVzFsSUQwZ1gyNWhiV1U3WEhKY2JpOHZJRngwWEhSMGFHbHpMbUZuWlNBOUlGOWhaMlU3WEhKY2JpOHZJRngwZlZ4eVhHNHZMeUJjZEdSbGMyTnlhV0psSUNncElIdGNjbHh1THk4Z1hIUmNkR052Ym5OdmJHVXViRzluS0dCSklHRnRJR0VnSkh0MGFHbHpMbTVoYldWOUlHRnVaQ0JKSUdGdElDUjdkR2hwY3k1aFoyVjlJSGxsWVhKeklHOXNaR0FwTzF4eVhHNHZMeUJjZEgxY2NseHVMeThnZlZ4eVhHNWNjbHh1THk4Z1kyeGhjM01nVUhKdlozSmhiVzFsY2lCbGVIUmxibVJ6SUZCbGNuTnZiaUI3WEhKY2JpOHZJRngwWTI5dWMzUnlkV04wYjNJZ0tGOXVZVzFsTENCZllXZGxMQ0JmZVdWaGNuTlBaa1Y0Y0dWeWFXVnVZMlVwSUh0Y2NseHVMeThnWEhSY2RITjFjR1Z5SUNoZmJtRnRaU3dnWDJGblpTazdYSEpjYmx4eVhHNHZMeUJjZEZ4MGRHaHBjeTU1WldGeWMwOW1SWGh3WlhKcFpXNWpaU0E5SUY5NVpXRnljMDltUlhod1pYSnBaVzVqWlR0Y2NseHVMeThnWEhSOVhISmNibHh5WEc0dkx5QmNkR052WkdVZ0tDa2dlMXh5WEc0dkx5QmNkRngwWTI5dWMyOXNaUzVzYjJjb1lDUjdkR2hwY3k1dVlXMWxmU0JwY3lCamIyUmthVzVuWUNrN1hISmNiaTh2SUZ4MGZWeHlYRzR2THlCOVhISmNiaTh2SUdOdmJuTjBJSEJ5YjJkeVlXMXRaWEp6SUQwZ1cxeHlYRzR2THlCY2RHNWxkeUJRY205bmNtRnRiV1Z5S0NkRWIyMG5MQ0ExTml3Z01USXBMRnh5WEc0dkx5QmNkRzVsZHlCUWNtOW5jbUZ0YldWeUtDZEtaV1ptSnl3Z01qUXNJRFVwTEZ4eVhHNHZMeUJjZEc1bGR5QlFjbTluY21GdGJXVnlLQ2RVYVdabVlXNTVKeXdnTXpjc0lERXlLVnh5WEc0dkx5QmRPMXh5WEc1Y2NseHVMeThnWm5WdVkzUnBiMjRnWkdWMlpXeHZjRk52Wm5SM1lYSmxJQ2h3Y205bmNtRnRiV1Z5Y3lrZ2UxeHlYRzR2THlCY2RHWnZjaUFvYkdWMElIQnliMmR5WVcxdFpYSWdiMllnY0hKdlozSmhiVzFsY25NcElIdGNjbHh1THk4Z1hIUmNkSEJ5YjJkeVlXMXRaWEl1WTI5a1pTZ3BPMXh5WEc0dkx5QmNkSDFjY2x4dUx5OGdmVnh5WEc0dkx5QmtaWFpsYkc5d1UyOW1kSGRoY21Vb2NISnZaM0poYlcxbGNuTXBPMXh5WEc1Y2NseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkwxeHlYRzR2THlCamJHRnpjeUJUY1hWaGNtVWdlMXh5WEc0dkx5QmNkR052Ym5OMGNuVmpkRzl5SUNoZmQybGtkR2dwSUh0Y2NseHVMeThnWEhSY2RIUm9hWE11ZDJsa2RHZ2dQU0JmZDJsa2RHZzdYSEpjYmk4dklGeDBYSFIwYUdsekxtaGxhV2RvZENBOUlGOTNhV1IwYUR0Y2NseHVMeThnWEhSOVhISmNibHh5WEc0dkx5QmNkSE4wWVhScFl5QmxjWFZoYkhNZ0tHRXNJR0lwSUh0Y2NseHVMeThnWEhSY2RISmxkSFZ5YmlCaExuZHBaSFJvSUNvZ1lTNW9aV2xuYUhRZ1BUMDlJR0l1ZDJsa2RHZ2dLaUJpTG1obGFXZG9kRHRjY2x4dUx5OGdYSFI5WEhKY2JseHlYRzR2THlCY2RITjBZWFJwWXlCcGMxWmhiR2xrUkdsdFpXNXphVzl1Y3lBb2QybGtkR2dzSUdobGFXZG9kQ2tnZTF4eVhHNHZMeUJjZEZ4MGNtVjBkWEp1SUhkcFpIUm9JRDA5UFNCb1pXbG5hSFE3WEhKY2JpOHZJRngwZlZ4eVhHNWNjbHh1THk4Z2ZWeHlYRzVjY2x4dUx5OGdiR1YwSUhOeGRXRnlaVEVnUFNCdVpYY2dVM0YxWVhKbEtEZ3BPMXh5WEc0dkx5QnNaWFFnYzNGMVlYSmxNaUE5SUc1bGR5QlRjWFZoY21Vb09DazdYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LRk54ZFdGeVpTNWxjWFZoYkhNb2MzRjFZWEpsTVN3Z2MzRjFZWEpsTWlrcE8xeHlYRzR2THlCamIyNXpiMnhsTG14dlp5aFRjWFZoY21VdWFYTldZV3hwWkVScGJXVnVjMmx2Ym5Nb05pd2dOaWtwTzF4eVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk5Y2NseHVMeThnWTJ4aGMzTWdVM0YxWVhKbElIdGNjbHh1THk4Z1hIUmpiMjV6ZEhKMVkzUnZjaUFvWDNkcFpIUm9LU0I3WEhKY2JpOHZJRngwWEhSMGFHbHpMbmRwWkhSb0lEMGdYM2RwWkhSb08xeHlYRzR2THlCY2RGeDBkR2hwY3k1b1pXbG5hSFFnUFNCZmQybGtkR2c3WEhKY2JpOHZJRngwWEhSMGFHbHpMbTUxYlU5bVVtVnhkV1Z6ZEhOR2IzSkJjbVZoSUQwZ01EdGNjbHh1THk4Z1hIUjlYSEpjYmx4eVhHNHZMeUJjZEdkbGRDQmhjbVZoSUNncElIdGNjbHh1THk4Z1hIUmNkSFJvYVhNdWJuVnRUMlpTWlhGMVpYTjBjMFp2Y2tGeVpXRXJLenRjY2x4dUx5OGdYSFJjZEhKbGRIVnliaUIwYUdsekxuZHBaSFJvSUNvZ2RHaHBjeTVvWldsbmFIUTdYSEpjYmk4dklGeDBmVnh5WEc1Y2NseHVMeThnWEhSelpYUWdZWEpsWVNBb1lYSmxZU2tnZTF4eVhHNHZMeUJjZEZ4MGRHaHBjeTUzYVdSMGFDQTlJRTFoZEdndWMzRnlkQ2hoY21WaEtUdGNjbHh1THk4Z1hIUmNkSFJvYVhNdWFHVnBaMmgwSUQwZ2RHaHBjeTUzYVdSMGFEdGNjbHh1THk4Z1hIUjlYSEpjYmk4dklIMWNjbHh1WEhKY2JpOHZJR3hsZENCemNYVmhjbVV4SUQwZ2JtVjNJRk54ZFdGeVpTZzBLVHRjY2x4dUx5OGdjM0YxWVhKbE1TNWhjbVZoSUQwZ01qVTdYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LSE54ZFdGeVpURXVZWEpsWVNrN1hISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktITnhkV0Z5WlRFdVlYSmxZU2s3WEhKY2JpOHZJR052Ym5OdmJHVXViRzluS0hOeGRXRnlaVEV1WVhKbFlTazdYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LSE54ZFdGeVpURXVZWEpsWVNrN1hISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktITnhkV0Z5WlRFdWJuVnRUMlpTWlhGMVpYTjBjMFp2Y2tGeVpXRXBPMXh5WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkwxeHlYRzR2THlCamJHRnpjeUJTWldOMFlXNW5iR1VnZTF4eVhHNHZMeUJjZEdOdmJuTjBjblZqZEc5eUlDaGZkMmxrZEdnc0lGOW9aV2xuYUhRc0lGOWpiMnh2Y2lrZ2UxeHlYRzR2THlCY2RGeDBZMjl1YzI5c1pTNXNiMmNvSjNObVpITmtKeWs3WEhKY2JseHlYRzR2THlCY2RGeDBkR2hwY3k1M2FXUjBhQ0E5SUY5M2FXUjBhRHRjY2x4dUx5OGdYSFJjZEhSb2FYTXVhR1ZwWjJoMElEMGdYMmhsYVdkb2REdGNjbHh1THk4Z1hIUmNkSFJvYVhNdVkyOXNiM0lnUFNCZlkyOXNiM0k3WEhKY2JpOHZJRngwZlZ4eVhHNWNjbHh1THk4Z1hIUm5aWFJCY21WaElDZ3BJSHRjY2x4dUx5OGdYSFJjZEhKbGRIVnliaUFnZEdocGN5NTNhV1IwYUNBZ0tpQjBhR2x6TG1obGFXZG9kRHRjY2x4dUx5OGdYSFI5WEhKY2JseHlYRzR2THlCY2RIQnlhVzUwUkdWelkzSnBjSFJwYjI0Z0tDa2dlMXh5WEc0dkx5QmNkRngwWTI5dWMyOXNaUzVzYjJjb1lFa2dZVzBnWVNCeVpXTjBZVzVuYkdVZ2IyWWdKSHQwYUdsekxuZHBaSFJvZlNCM2FXUjBhQ0JoYm1RZ0pIdDBhR2x6TG1obGFXZG9kSDBnYUdWcFoyaDBJU0VoWUNrN1hISmNiaTh2SUZ4MGZWeHlYRzR2THlCOVhISmNibHh5WEc0dkx5QmpiMjV6ZENCdGVWSmxZM1JoYm1kc1pURWdQU0J1WlhjZ1VtVmpkR0Z1WjJ4bEtERTRMQ0ExTENBbllteDFaU2NwTzF4eVhHNHZMeUJqYjI1emRDQnRlVkpsWTNSaGJtZHNaVElnUFNCdVpYY2dVbVZqZEdGdVoyeGxLREl5TENBeE5Dd2dKMkpzZFdVbktUdGNjbHh1THk4Z1kyOXVjMjlzWlM1c2IyY29iWGxTWldOMFlXNW5iR1V4S1R0Y2NseHVMeThnWTI5dWMyOXNaUzVzYjJjb2JYbFNaV04wWVc1bmJHVXlLVHRjY2x4dUx5OGdZMjl1YzI5c1pTNXNiMmNvYlhsU1pXTjBZVzVuYkdVeExtZGxkRUZ5WldFb0tTazdYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LRzE1VW1WamRHRnVaMnhsTWk1blpYUkJjbVZoS0NrcE8xeHlYRzR2THlCamIyNXpiMnhsTG14dlp5aHRlVkpsWTNSaGJtZHNaVEV1Y0hKcGJuUkVaWE5qY21sd2RHbHZiaWdwS1R0Y2NseHVMeThnWTI5dWMyOXNaUzVzYjJjb2JYbFNaV04wWVc1bmJHVXlMbkJ5YVc1MFJHVnpZM0pwY0hScGIyNG9LU2s3WEhKY2JpOHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2TDF4eVhHNHZMeUJqYkdGemN5QkRiMjF3YjI1bGJuUWdlMXh5WEc0dkx5QmNkR052Ym5OMGNuVmpkRzl5S0hObGJHVmpkRzl5S1NCN1hISmNiaTh2SUZ4MFhIUjBhR2x6TGlSbGJDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb2MyVnNaV04wYjNJcE8xeHlYRzR2THlCY2RIMWNjbHh1WEhKY2JpOHZJRngwYUdsa1pTZ3BJSHRjY2x4dUx5OGdYSFJjZEhSb2FYTXVKR1ZzTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuYm05dVpTYzdYSEpjYmk4dklGeDBmVnh5WEc1Y2NseHVMeThnWEhSemFHOTNLQ2tnZTF4eVhHNHZMeUJjZEZ4MGRHaHBjeTRrWld3dWMzUjViR1V1WkdsemNHeGhlU0E5SUNkaWJHOWpheWM3WEhKY2JpOHZJRngwZlZ4eVhHNHZMeUI5WEhKY2JpOHZJR05zWVhOeklFSnZlQ0JsZUhSbGJtUnpJRU52YlhCdmJtVnVkQ0I3WEhKY2JpOHZJRngwWTI5dWMzUnlkV04wYjNJb2IzQjBhVzl1Y3lrZ2UxeHlYRzR2THlCY2RGeDBjM1Z3WlhJb2IzQjBhVzl1Y3k1elpXeGxZM1J2Y2lsY2NseHVYSEpjYmk4dklGeDBYSFIwYUdsekxpUmxiQzV6ZEhsc1pTNTNhV1IwYUNBOUlIUm9hWE11SkdWc0xuTjBlV3hsTG1obGFXZG9kQ0E5SUc5d2RHbHZibk11YzJsNlpTQXJJQ2R3ZUNjN1hISmNiaTh2SUZ4MFhIUjBhR2x6TGlSbGJDNXpkSGxzWlM1aVlXTnJaM0p2ZFc1a1EyOXNiM0lnUFNCdmNIUnBiMjV6TG1OdmJHOXlPMXh5WEc0dkx5QmNkSDFjY2x4dUx5OGdmVnh5WEc1Y2NseHVMeThnWTI5dWMzUWdZbTk0TVNBOUlHNWxkeUJDYjNnb2UxeHlYRzR2THlCY2RITmxiR1ZqZEc5eU9pQW5JMkp2ZURFbkxGeHlYRzR2THlCY2RITnBlbVU2SURFd01DeGNjbHh1THk4Z1hIUmpiMnh2Y2pvZ0ozSmxaQ2RjY2x4dUx5OGdmU2xjY2x4dUx5OGdZMjl1YzNRZ1ltOTRNaUE5SUc1bGR5QkNiM2dvZTF4eVhHNHZMeUJjZEhObGJHVmpkRzl5T2lBbkkySnZlREluTEZ4eVhHNHZMeUJjZEhOcGVtVTZJREV5TUN4Y2NseHVMeThnWEhSamIyeHZjam9nSjJKc2RXVW5YSEpjYmk4dklIMHBYSEpjYmk4dklHSnZlREV1YUdsa1pTZ3BPMXh5WEc0dkx5QmliM2d4TG5Ob2IzY29LVHRjY2x4dUx5OGdZbTk0TWk1b2FXUmxLQ2s3WEhKY2JpOHZJR0p2ZURJdWMyaHZkeWdwTzF4eVhHNHZMeUJqYkdGemN5QkRhWEpqYkdVZ1pYaDBaVzVrY3lCQ2IzZ2dlMXh5WEc0dkx5QmNkR052Ym5OMGNuVmpkRzl5S0c5d2RHbHZibk1wSUh0Y2NseHVMeThnWEhSY2RITjFjR1Z5S0c5d2RHbHZibk1wWEhKY2JseHlYRzR2THlCY2RGeDBkR2hwY3k0a1pXd3VjM1I1YkdVdVltOXlaR1Z5VW1Ga2FYVnpJRDBnSnpVd0pTYzdYSEpjYmk4dklGeDBmVnh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeUJqYjI1emRDQmpJRDBnYm1WM0lFTnBjbU5zWlNoN1hISmNiaTh2SUZ4MGMyVnNaV04wYjNJNklDY2pZMmx5WTJ4bEp5eGNjbHh1THk4Z1hIUnphWHBsT2lBeE5UQXNYSEpjYmk4dklGeDBZMjlzYjNJNklDZG5jbVZsYmlkY2NseHVMeThnZlNsY2NseHVYSEpjYmk4dklHTnNZWE56SUVGdWFXMWhiQ0I3WEhKY2JpOHZJRngwWTI5dWMzUnlkV04wYjNJb2IzQjBhVzl1Y3lrZ2UxeHlYRzR2THlCY2RGeDBkR2hwY3k1dVlXMWxJRDBnYjNCMGFXOXVjeTV1WVcxbE8xeHlYRzR2THlCY2RGeDBkR2hwY3k1aFoyVWdQU0J2Y0hScGIyNXpMbUZuWlR0Y2NseHVMeThnWEhSY2RIUm9hWE11YUdGelZHRnBiQ0E5SUc5d2RHbHZibk11YUdGelZHRnBiRHRjY2x4dUx5OGdYSFI5WEhKY2JseHlYRzR2THlCY2RIWnZhV05sS0NrZ2UxeHlYRzR2THlCY2RGeDBZMjl1YzI5c1pTNXNiMmNvSjBrZ1lXMGdZVzVwYldGc0p5azdYSEpjYmk4dklGeDBmVnh5WEc0dkx5QjlYSEpjYmk4dklHTnNZWE56SUVOaGRDQmxlSFJsYm1SeklFRnVhVzFoYkNCN1hISmNiaTh2SUZ4MFkyOXVjM1J5ZFdOMGIzSW9iM0IwYVc5dWN5a2dlMXh5WEc0dkx5QmNkRngwYzNWd1pYSW9iM0IwYVc5dWN5bGNjbHh1THk4Z1hIUmNkSFJvYVhNdVkyOXNiM0lnUFNCdmNIUnBiMjV6TG1OdmJHOXlYSEpjYmk4dklGeDBmVnh5WEc0dkx5QmNkSFp2YVdObEtDa2dlMXh5WEc0dkx5QmNkRngwYzNWd1pYSXVkbTlwWTJVb0tWeHlYRzR2THlCY2RGeDBZMjl1YzI5c1pTNXNiMmNvSjBrZ1lXMGdZMkYwSnlrN1hISmNiaTh2SUZ4MGZWeHlYRzR2THlCY2RHZGxkQ0JoWjJWSmJtWnZLQ2tnZTF4eVhHNHZMeUJjZEZ4MGNtVjBkWEp1SUhSb2FYTXVZV2RsSUNvZ016dGNjbHh1THk4Z1hIUjlYSEpjYmk4dklGeDBjMlYwSUdGblpVbHVabThvYm1WM1FXZGxLU0I3WEhKY2JpOHZJRngwWEhSMGFHbHpMbUZuWlNBOUlHNWxkMEZuWlR0Y2NseHVMeThnWEhSOVhISmNiaTh2SUgxY2NseHVMeThnWTI5dWMzUWdZMkYwSUQwZ2JtVjNJRU5oZENoN1hISmNiaTh2SUZ4MGJtRnRaVG9nSjBOaGRDY3NYSEpjYmk4dklGeDBZV2RsT2lBM0xGeHlYRzR2THlCY2RHaGhjMVJoYVd3NklIUnlkV1ZjY2x4dUx5OGdmU2s3WEhKY2JpOHZJR052Ym5OdmJHVXViRzluS0dOaGRDNWhaMlVwTzF4eVhHNHZMeUJqWVhRdVlXZGxTVzVtYnlBOUlERTBPMXh5WEc0dkx5QmpiMjV6YjJ4bExteHZaeWhqWVhRdVlXZGxLVHRjY2x4dUx5OGdZMjl1YzI5c1pTNXNiMmNvWTJGMExtRm5aVWx1Wm04cE8xeHlYRzVjY2x4dUx5OGdZMjl1YzNRZ1lXNXBiV0ZzSUQwZ2JtVjNJRUZ1YVcxaGJDaDdibUZ0WlRvZ0oyRnVhVzFoYkNjc0lHRm5aVG9nTlN3Z2FHRnpWR0ZwYkRvZ2RISjFaWDBwTzF4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnloaGJtbHRZV3dwTzF4eVhHNHZMeUJqYkdGemN5QklaV0ZrWlhJZ2UxeHlYRzR2THlCY2RHTnZibk4wY25WamRHOXlJQ2hwYldjc0lHZ3hMQ0JvTWlrZ2UxeHlYRzR2THlCY2RGeDBkR2hwY3k1emNtTWdQU0JwYldjN1hISmNiaTh2SUZ4MFhIUjBhR2x6TG1neElEMGdhREU3WEhKY2JpOHZJRngwWEhSMGFHbHpMbWd5SUQwZ2FESTdYSEpjYmk4dklGeDBmVnh5WEc0dkx5QmNkSEpsYm1SbGNpaDRLU0I3WEhKY2JpOHZJRngwWEhRdkx5QjRJQzBnMExyUmc5QzAwTEFnMEw3Umd0QzQwWUhRdnRDeTBZdlFzdEN3MFlMUmpGeHlYRzR2THlCY2RGeDBZMjl1YzI5c1pTNXNiMmNvZEdocGN5NW9NU2s3WEhKY2JpOHZJRngwWEhSc1pYUWdiM1YwSUQwZ0p5YzdYSEpjYmk4dklGeDBYSFJ2ZFhRZ0t6MGdZRHhwYldjZ2MzSmpQVndpSkh0MGFHbHpMbk55WTMxY0lpQmhiSFE5WENKY0lpQmpiR0Z6Y3oxY0lteHZaMjljSWo1Z08xeHlYRzR2THlCY2RGeDBiM1YwSUNzOUlHQThhREUrSkh0MGFHbHpMbWd4ZlR3dmFERStZRHRjY2x4dUx5OGdYSFJjZEc5MWRDQXJQU0JnUEdneVBpUjdkR2hwY3k1b01uMDhMMmd5UG1BN1hISmNiaTh2SUZ4MFhIUmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNoNEtTNXBibTVsY2toVVRVd2dQU0J2ZFhRN1hISmNiaTh2SUZ4MGZWeHlYRzR2THlCY2RITjBZWFJwWXlCb1pXeHNieWdwSUh0Y2NseHVMeThnWEhSY2RHTnZibk52YkdVdWJHOW5LQ2QzYjNKcklITjBZWFJwWXljZ0t5QmhLVHRjY2x4dUx5OGdYSFI5WEhKY2JpOHZJSDFjY2x4dUx5OGdZMjl1YzNRZ2FXMW5JRDBnWUdoMGRIQnpPaTh2ZFhCc2IyRmtMbmRwYTJsdFpXUnBZUzV2Y21jdmQybHJhWEJsWkdsaEwyTnZiVzF2Ym5NdmRHaDFiV0l2WVM5aE55OVNaV0ZqZEMxcFkyOXVMbk4yWnk4eE1qQXdjSGd0VW1WaFkzUXRhV052Ymk1emRtY3VjRzVuWUR0Y2NseHVMeThnYkdWMElHaGxZV1JsY2lBOUlHNWxkeUJJWldGa1pYSW9hVzFuTENBblNHVnNiRzhuTENBbmQyOXliR1FuS1R0Y2NseHVMeThnYUdWaFpHVnlMbkpsYm1SbGNpZ25hR1ZoWkdWeUp5azdYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LR2hsWVdSbGNpazdYSEpjYmk4dklHTnNZWE56SUVobFlXUmxjaklnWlhoMFpXNWtjeUJJWldGa1pYSWdlMXh5WEc0dkx5QmNkR052Ym5OMGNuVmpkRzl5S0dsdFp5d2dhREVzSUdneUxDQm9aWEp2S1NCN1hISmNiaTh2SUZ4MFhIUnpkWEJsY2locGJXY3NJR2d4TENCb01pazdYSEpjYmk4dklGeDBYSFIwYUdsekxsOW9aWEp2SUQwZ2FHVnlienRjY2x4dUx5OGdYSFI5WEhKY2JpOHZJRngwWjJWMElHaGxjbThvS1NCN1hISmNiaTh2SUZ4MFhIUnlaWFIxY200Z2RHaHBjeTVmYUdWeWJ6dGNjbHh1THk4Z1hIUjlYSEpjYmk4dklGeDBjMlYwSUdobGNtOG9ZeWtnZTF4eVhHNHZMeUJjZEZ4MGRHaHBjeTVmYUdWeWJ5QTlJR003WEhKY2JpOHZJRngwZlZ4eVhHNHZMeUI5WEhKY2JpOHZJR052Ym5OMElHaGxZV1JsY2pJZ1BTQnVaWGNnU0dWaFpHVnlNaWhwYldjZ0xDZHVaWGNnYUdWc2JHOG5MQ0FuYm1WM0lITnBkR1VuTENBbloyZHZaMjluYjJkdloyOW5ieWNwTzF4eVhHNHZMeUJvWldGa1pYSXlMbWhsY204Z1BTQW5SMjl2WjJ4bEp6dGNjbHh1THk4Z1kyOXVjMjlzWlM1c2IyY29hR1ZoWkdWeU1pNW9aWEp2S1R0Y2NseHVMeThnTHk4Z2FHVmhaR1Z5TWk1eVpXNWtaWElvSjJobFlXUmxjaWNwTzF4eVhHNHZMeUJqYjI1emIyeGxMbXh2Wnlob1pXRmtaWEl5S1R0Y2NseHVMeThnWTJ4aGMzTWdQaUJ2WW1wbFkzUmNjbHh1THk5dFpYUm9iMlFnUGlCY2NseHVMeThnWTJ4aGMzTWdRV3hsY25RZ2UxeHlYRzR2THlCY2RHTnZibk4wY25WamRHOXlJQ2hoTENCakxDQmtLU0I3WEhKY2JpOHZJRngwWEhSMGFHbHpMbTFsYzNOaFoyVWdQU0JoTzF4eVhHNHZMeUJjZEZ4MGRHaHBjeTVqYzNORGJHRnpjeUE5SUdNN1hISmNiaTh2SUZ4MFhIUjBhR2x6TG05MWRDQTlJR1E3WEhKY2JpOHZJRngwZlZ4eVhHNHZMeUJjZEhOb2IzZEJiR1Z5ZENncElIdGNjbHh1THk4Z1hIUmNkR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb2RHaHBjeTV2ZFhRcExtbHVibVZ5U0ZSTlRDQTlJR0E4Y0NCamJHRnpjejFjSWlSN2RHaHBjeTVqYzNORGJHRnpjMzFjSWo0a2UzUm9hWE11YldWemMyRm5aWDA4TDNBK1lEdGNjbHh1THk4Z1hIUjlYSEpjYmk4dklGeDBiWGxCYkdWeWRDZ3BJSHRjY2x4dUx5OGdYSFJjZEdGc1pYSjBLSFJvYVhNdWJXVnpjMkZuWlNrN1hISmNiaTh2SUZ4MGZWeHlYRzR2THlCOVhISmNiaTh2SUdOc1lYTnpJRUZzWlhKME1pQmxlSFJsYm1SeklFRnNaWEowSUh0Y2NseHVMeThnWEhSamIyNXpkSEoxWTNSdmNpaGhMQ0JqTENCa0xDQnBZMjl1S1NCN1hISmNiaTh2SUZ4MFhIUnpkWEJsY2lBb1lTd2dZeXdnWkNrN1hISmNiaTh2SUZ4MFhIUjBhR2x6TG1samIyNGdQU0JwWTI5dU8xeHlYRzR2THlCY2RIMWNjbHh1THk4Z1hIUnphRzkzU1dOdmJrRnNaWEowS0NrZ2UxeHlYRzR2THlCY2RGeDBaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loMGFHbHpMbTkxZENrdWFXNXVaWEpJVkUxTUlEMGdZRHh3SUdOc1lYTnpQVndpSkh0MGFHbHpMbU56YzBOc1lYTnpmVndpUGp4cElHTnNZWE56UFZ3aWJXRjBaWEpwWVd3dGFXTnZibk5jSWo0a2UzUm9hWE11YVdOdmJuMWNjbHh1THk4Z1hIUThMMmsrSkh0MGFHbHpMbTFsYzNOaFoyVjlQQzl3UG1BN1hISmNiaTh2SUZ4MGZWeHlYRzR2THlCY2RHMTVRV3hsY25Rb0tTQjdYSEpjYmk4dklGeDBYSFJoYkdWeWRDZ25hR2tuSUNzZ2RHaHBjeTV0WlhOellXZGxLVHRjY2x4dUx5OGdYSFI5WEhKY2JpOHZJSDFjY2x4dUx5OGdiR1YwSUcwZ1BTQnVaWGNnUVd4bGNuUW9KMDE1SUcxbGMzTnpZV2RsSnl3Z0ozSmxaQ2NzSUNjdWRHVnpkQ2NwTzF4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnlodEtUdGNjbHh1THk4Z2JTNXphRzkzUVd4bGNuUW9LVHRjY2x4dUx5OGdiR1YwSUcweUlEMGdibVYzSUVGc1pYSjBNaWduVFhrZ2JXVnpjM05oWjJVbkxDQW5jbVZrSnl3Z0p5NTBaWE4wSnl3Z0oyRmpZMjkxYm5SZlltRnNZVzVqWlNjcE8xeHlYRzR2THlBdkx5QnRNaTV6YUc5M1FXeGxjblFvS1R0Y2NseHVMeThnYlRJdWMyaHZkMGxqYjI1QmJHVnlkQ2dwTzF4eVhHNHZMeUJ0TWk1dGVVRnNaWEowS0NrN1hISmNiaTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dlhISmNibHh5WEc0dkx5QnNaWFFnYzJodmNIQnBibWRNYVhOMElEMGdXMTA3WEhKY2JpOHZJR2xtSUNoc2IyTmhiRk4wYjNKaFoyVXVaMlYwU1hSbGJTZ25iR2x6ZENjcElDRTlJSFZ1WkdWbWFXNWxaQ2tnZTF4eVhHNHZMeUJjZEhOb2IzQndhVzVuVEdsemRDQTlJRXBUVDA0dWNHRnljMlVvYkc5allXeFRkRzl5WVdkbExtZGxkRWwwWlcwb0oyeHBjM1FuS1NrN1hISmNiaTh2SUZ4MGIzVjBLQ2s3WEhKY2JpOHZJSDFjY2x4dUx5OGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0ozTnNMV0ZrWkNjcExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tDa2dQVDRnZTF4eVhHNHZMeUJjZEd4bGRDQnpiRTVoYldVZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmMyd3RibUZ0WlNjcExuWmhiSFZsTzF4eVhHNHZMeUJjZEd4bGRDQnpiRkYwZVNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkemJDMXhkSGtuS1M1MllXeDFaVHRjY2x4dUx5OGdYSFJzWlhRZ2RHVnRjQ0E5SUh0OU8xeHlYRzR2THlCY2RIUmxiWEF1Ym1GdFpTQTlJSE5zVG1GdFpUdGNjbHh1THk4Z1hIUjBaVzF3TG5GMVlXNTBhWFI1SUQwZ2MyeFJkSGs3WEhKY2JpOHZJRngwZEdWdGNDNWphR1ZqYXlBOUlHWmhiSE5sTzF4eVhHNHZMeUJjZEd4bGRDQnBJRDBnYzJodmNIQnBibWRNYVhOMExteGxibWQwYUR0Y2NseHVMeThnWEhSemFHOXdjR2x1WjB4cGMzUmJhVjBnUFNCMFpXMXdPMXh5WEc0dkx5QmNkR052Ym5OdmJHVXViRzluS0hOb2IzQndhVzVuVEdsemRDNW1hVzVrS0dsMFpXMGdQVDRnYVhSbGJTNXVZVzFsSUQwOVBTQjBaVzF3TG01aGJXVXBLVnh5WEc0dkx5QmNkQzh2SUhOb2IzQndhVzVuVEdsemRDNW1iM0pGWVdOb0tHWjFibU4wYVc5dUtHbDBaVzBwSUh0Y2NseHVMeThnWEhRdkx5QmNkR2xtSUNoMFpXMXdMbTVoYldVZ1BUMDlJR2wwWlcwdWJtRnRaU0FwZTF4eVhHNHZMeUJjZEM4dklGeDBYSFJqYjI1emIyeGxMbXh2WnlocGRHVnRMbTVoYldVcE8xeHlYRzR2THlCY2RDOHZJRngwZlNCbGJITmxJSHRjY2x4dUx5OGdYSFF2THlCY2RGeDBYSEpjYmk4dklGeDBMeThnWEhSOVhISmNiaTh2SUZ4MEx5OGdmU2s3WEhKY2JpOHZJRngwYjNWMEtDazdYSEpjYmk4dklGeDBiRzlqWVd4VGRHOXlZV2RsTG5ObGRFbDBaVzBvSjJ4cGMzUW5MQ0JLVTA5T0xuTjBjbWx1WjJsbWVTaHphRzl3Y0dsdVoweHBjM1FwS1R0Y2NseHVMeThnZlNrN1hISmNiaTh2SUdaMWJtTjBhVzl1SUc5MWRDZ3BJSHRjY2x4dUx5OGdYSFJzWlhRZ2IzVjBJRDBnSnljN1hISmNiaTh2SUZ4MFptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOb2IzQndhVzVuVEdsemRDa2dlMXh5WEc0dkx5QmNkRngwYVdZZ0tITm9iM0J3YVc1blRHbHpkRnRyWlhsZExtTm9aV05ySUQwOVBTQjBjblZsS1NCN1hISmNiaTh2SUZ4MFhIUmNkRzkxZENBclBTQmdQR2x1Y0hWMElHbGtQVndpSkh0emFHOXdjR2x1WjB4cGMzUmJhMlY1WFM1dVlXMWxmVndpSUhSNWNHVTlYQ0pqYUdWamEySnZlRndpSUdOb1pXTnJaV1ErWUR0Y2NseHVMeThnWEhSY2RIMGdaV3h6WlNCN1hISmNiaTh2SUZ4MFhIUmNkRzkxZENBclBTQmdQR2x1Y0hWMElHbGtQVndpSkh0emFHOXdjR2x1WjB4cGMzUmJhMlY1WFM1dVlXMWxmVndpSUhSNWNHVTlYQ0pqYUdWamEySnZlRndpUG1BN1hISmNiaTh2SUZ4MFhIUjlYSEpjYmk4dklGeDBYSFJ2ZFhRZ0t6MGdZQ1I3YzJodmNIQnBibWRNYVhOMFcydGxlVjB1Ym1GdFpYMGdKSHR6YUc5d2NHbHVaMHhwYzNSYmEyVjVYUzV4ZFdGdWRHbDBlWDBnUEdKeVBtQTdYSEpjYmk4dklGeDBmVnh5WEc0dkx5QmNkR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHpiQzF2ZFhRbktTNXBibTVsY2toVVRVd2dQU0J2ZFhRN1hISmNibHh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dlhISmNiaTh2SUd4bGRDQmhJRDBuYUdWc2JHOHNhR2tzWjI5dlpHUmhlU2M3WEhKY2JpOHZJR052Ym5OdmJHVXViRzluS0dFdWMzQnNhWFFvSnl3bktTazdYSEpjYmk4dklHeGxkQ0JpSUQwZ1d6Z3NJRGtzSURkZE8xeHlYRzR2THlCaUxtWnZja1ZoWTJnb1puVnVZM1JwYjI0b1pXeGxiU3dnYVc1a1pYZ3BJSHRjY2x4dUx5OGdYSFJqYjI1emIyeGxMbXh2WnlocGJtUmxlQ2s3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb1pXeGxiU0FxSURJcE8xeHlYRzR2THlCY2RHTnZibk52YkdVdWJHOW5LQ2N0TFMwdEp5azdYSEpjYmk4dklIMHBPMXh5WEc0dkx5QnNaWFFnWVNBOUlGczBMQ0ExTENBeE1pd2dNakF3TENBeExDQXdMQ0F0TWwwN1hISmNiaTh2SUd4bGRDQmlJRDBnWVM1dFlYQW9LR2wwWlcwc0lHbHVaR1Y0S1NBOVBpQjdYSEpjYmk4dklGeDBZMjl1YzI5c1pTNXNiMmNvYVc1a1pYZ3BPMXh5WEc0dkx5QmNkSEpsZEhWeWJpQnBkR1Z0SUNvZ05UdGNjbHh1THk4Z2ZTazdYSEpjYmk4dklHeGxkQ0JqSUQwZ1lTNW1hV3gwWlhJb1puVnVZM1JwYjI0b2FYUmxiU3dnYVc1a1pYZ3BJSHRjY2x4dUx5OGdYSFJwWmlBb2FYUmxiU0ErSURBcElIdGNjbHh1THk4Z1hIUmNkSEpsZEhWeWJpQjBjblZsTzF4eVhHNHZMeUJjZEgxY2NseHVMeThnZlNsY2NseHVMeThnWTI5dWMyOXNaUzVzYjJjb1l5azdYSEpjYmk4dklHeGxkQ0JoY25JZ1BTQmJOQ3dnTnl3Z09WMDdYSEpjYmk4dklHeGxkQ0JrYVhaVElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkSE5DZVZSaFowNWhiV1VvSjNBbktUdGNjbHh1THk4Z2JHVjBJSEZUSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbmNDY3BPMXh5WEc0dkx5QmpiMjV6YjJ4bExteHZaeWhrYVhaVEtUdGNjbHh1THk4Z1kyOXVjMjlzWlM1c2IyY29jVk1wTzF4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnloaGNuSXBPMXh5WEc0dkx5Qm1iM0lnS0d4bGRDQndjbTl3SUc5bUlIRlRLU0I3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb2NISnZjQ2s3WEhKY2JpOHZJSDFjY2x4dUx5OGdabTl5SUNoc1pYUWdhMlY1SUdsdUlIRlRLU0I3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb2NWTmJhMlY1WFNrN1hISmNiaTh2SUgxY2NseHVMeThnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCeFV5NXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNHZMeUJjZEdOdmJuTnZiR1V1Ykc5bktIRlRXMmxkS1R0Y2NseHVMeThnZlZ4eVhHNHZMeUJzWlhRZ1lTQTlJRnMwTENBMUxDQTJYVHRjY2x4dUx5OGdiR1YwSUdJZ1BTQmJYSEpjYmk4dklGc3hMQ0F5TENBelhTeGNjbHh1THk4Z1d6UXNJRFVzSURaZExGeHlYRzR2THlCYk55d2dPQ3dnT1Ywc1hISmNiaTh2SUYwN1hISmNiaTh2SUd4bGRDQmtJRDBnV3pFc0lEQXNJREFzSURBc0lEQmRPMXh5WEc0dkx5QnNaWFFnYXlBOUlEQTdYSEpjYmk4dklHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSjJKMWRIUnZiaWNwTG05dVkyeHBZMnNnUFNBb0tTQTlQaUI3WEhKY2JpOHZJRngwYVdZZ0tHc3JNU0E4SURVcElIdGNjbHh1THk4Z1hIUmNkR1JiYTEwZ1BTQXdPMXh5WEc0dkx5QmNkRngwWkZ0ckt6RmRJRDBnTVR0Y2NseHVMeThnWEhSY2RHc3JLenRjY2x4dUx5OGdYSFJjZEdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV2ZFhRdE1pY3BMbWx1Ym1WeVNGUk5UQ0E5SUdRN1hISmNiaTh2SUZ4MGZWeHlYRzR2THlCOVhISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktHSXBPMXh5WEc1Y2NseHVMeThnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaUxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpOHZJRngwTHk4Z1kyOXVjMjlzWlM1c2IyY29ZbHRwWFNrN1hISmNiaTh2SUZ4MGJHVjBJR01nUFNCaVcybGRPMXh5WEc0dkx5QmNkR1p2Y2lBb2JHVjBJR29nUFNCakxteGxibWQwYUNBdElERTdJR29nUGowZ01Ec2dhaTB0S1NCN1hISmNiaTh2SUZ4MFhIUmpiMjV6YjJ4bExteHZaeWhqVzJwZEtUdGNjbHh1THk4Z1hIUjlYSEpjYmk4dklIMWNjbHh1THk4Z2JHVjBJRzkxZENBOUlDY25PMXh5WEc0dkx5Qm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR0l1YkdWdVozUm9PeUJwS3lzcElIdGNjbHh1THk4Z1hIUm1iM0lnS0d4bGRDQnFJRDBnTURzZ2FpQThJR0piYVYwdWJHVnVaM1JvT3lCcUt5c3BJSHRjY2x4dUx5OGdYSFJjZEc5MWRDQXJQU0JpVzJsZFcycGRPMXh5WEc0dkx5QmNkSDFjY2x4dUx5OGdYSFJ2ZFhRZ0t6MGdKenhpY2o0blhISmNiaTh2SUgxY2NseHVMeThnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbTkxZENjcExtbHVibVZ5U0ZSTlRDQTlJRzkxZER0Y2NseHVYSEpjYmk4dklHeGxkQ0J2ZFhRZ1BTQW5KenRjY2x4dUx5OGdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JpTG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmk4dklGeDBabTl5SUNoc1pYUWdhaUE5SURBN0lHb2dQQ0JpVzJsZExteGxibWQwYURzZ2Fpc3JLU0I3WEhKY2JpOHZJRngwWEhScFppQW9ZbHRwWFZ0cVhTQStJRFFwSUh0Y2NseHVMeThnWEhSY2RGeDBiM1YwSUNzOUlHSmJhVjFiYWwwZ0t5QW5JQ2M3WEhKY2JpOHZJRngwWEhSOVhISmNiaTh2SUZ4MGZWeHlYRzR2THlCY2RHOTFkQ0FyUFNBblBHSnlQaWM3WEhKY2JpOHZJSDFjY2x4dUx5OGdZMjl1YzI5c1pTNXNiMmNvYjNWMEtUdGNjbHh1WEhKY2JpOHZJR052Ym5OMElHRWdQU0JiTVN3Z01pd2dNeXdnTkN3Z05Td2dOaXdnTnl3Z09Dd2dPVjA3WEhKY2JpOHZJR052Ym5OMElHSWdQU0JiSjJFbkxDQW5ZaWNzSUNkakp5d2dKMlFuTENBblpTY3NJQ2RtSjEwN1hISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktHRXViR1Z1WjNSb0tUdGNjbHh1THk4Z1kyOXVjMjlzWlM1c2IyY29ZUzV3ZFhOb0tERXdMQ0F4TVN3Z01UVXNJRFEwS1NrN1hISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktHRXBPMXh5WEc0dkx5QmlMbkIxYzJnb0oyb25MQ0FuYUNjcE8xeHlYRzR2THlCamIyNXpiMnhsTG14dlp5aGlLVHRjY2x4dUx5OGdZMjl1YzI5c1pTNXNiMmNvWWk1d2IzQW9LU2s3WEhKY2JpOHZJR052Ym5OdmJHVXViRzluS0dJdWNHOXdLQ2twTzF4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnloaUtUdGNjbHh1WEhKY2JpOHZJQzh2SU5HRDBMVFFzTkM3MExqUmd0R01JTkdOMEx2UXRkQzgwTFhRdmRHQ0lOQ3kwTDNSZzlHQzBZRFF1Q0RRdk5DdzBZSFJnZEM0MExMUXNGeHlYRzR2THlCa1pXeGxkR1VnWVZzelhUdGNjbHh1THk4Z1kyOXVjMjlzWlM1c2IyY29ZU2s3WEhKY2JpOHZJR0V1YzNCc2FXTmxLRE1zSURRc0lDZG9hU2NwTzF4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnloaEtUdGNjbHh1THk4Z2JHVjBJR0VnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNjbHh1THk4Z1lTNXBibTVsY2toVVRVd2dQU0FuU0dWc2JHOGhKenRjY2x4dUx5OGdZUzVqYkdGemMweHBjM1F1WVdSa0tDZHZibVVuS1R0Y2NseHVMeThnWVM1dmJtTnNhV05ySUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0dkx5QmNkR0ZzWlhKMEtDZElaV3hzYnljcE8xeHlYRzR2THlCOVhISmNiaTh2SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTUwWlhOMEp5a3VZWEJ3Wlc1a1EyaHBiR1FvWVNrN1hISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktHRXBPMXh5WEc0dkx5QnNaWFFnYm1GdFpTQTlJSEJ5YjIxd2RDZ24wSnJRc05DNklOQ3kwTERSZ1NEUXQ5QyswTExSZzlHQ1B5Y3NJQ2NuS1R0Y2NseHVMeThnWVd4bGNuUW9ZTkNmMFlEUXVOQ3kwTFhSZ2l3Z0pIdHVZVzFsZlNGZ0tUdGNjbHh1WEhKY2JpOHZQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVYSEpjYmk4dklHeGxkQ0JpYVhKMGFGbGxZWElnUFNCd1lYSnpaVWx1ZENod2NtOXRjSFFvSjlDUzBMTFF0ZEMwMExqUmd0QzFJTkN6MEw3UXRDRFFzdEN3MFlqUXRkQ3owTDRnMFlEUXZ0QzIwTFRRdGRDOTBMalJqeWNzSUNjbktTazdYSEpjYmk4dklHTnZibk4wSUdOMWNuSmxiblJaWldGeUlEMGdNakF4T1R0Y2NseHVMeThnYVdZZ0tHbHpSbWx1YVhSbEtHSnBjblJvV1dWaGNpa3BJSHRjY2x4dUx5OGdYSFJoYkdWeWRDaGcwSkxRc05HSUlOQ3kwTDdRdDlHQTBMRFJnZEdDT2lBa2UyTjFjbkpsYm5SWlpXRnlJQzBnWW1seWRHaFpaV0Z5ZldBcE8xeHlYRzR2THlCOUlHVnNjMlVnZTF4eVhHNHZMeUJoYkdWeWRDZ24wSkxRc3RDMTBMVFF1TkdDMExVZzBZZlF1TkdCMEx2UXZpY3BPMXh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMejA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzVjY2x4dUx5OGdiR1YwSUhOcFpHVk1aVzVuZEdnZ1BTQndjbTl0Y0hRb0o5Q2owTHJRc05DMjBMalJndEMxSU5DMDBMdlF1TkM5MEwzUmd5RFJnZEdDMEw3UmdOQyswTDNSaXlEUXV0Q3kwTERRdE5HQTBMRFJndEN3T2ljc0lDY25LVHRjY2x4dUx5OGdZV3hsY25Rb1lOQ2YwTFhSZ05DNDBMelF0ZEdDMFlBZzBMclFzdEN3MExUUmdOQ3cwWUxRc0RvZ0pIdHphV1JsVEdWdVozUm9JQ29nTkgxZ0tUdGNjbHh1WEhKY2JpOHZQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNibHh5WEc0dkx5QnNaWFFnWTJseVkyeGxVbUZrYVhWeklEMGdjSEp2YlhCMEtDZlFvOUM2MExEUXR0QzQwWUxRdFNEUmdOQ3cwTFRRdU5HRDBZRWcwTDdRdXRHQTBZUFF0dEM5MEw3UmdkR0MwTGc2Snl3Z0p5Y3BPMXh5WEc0dkx5QmhiR1Z5ZENoZzBKL1F1OUMrMFluUXNOQzAwWXdnMEw3UXV0R0EwWVBRdHRDOTBMN1JnZEdDMExnNklDUjdUV0YwYUM1eWIzVnVaQ2dvVFdGMGFDNXdiM2NvWTJseVkyeGxVbUZrYVhWekxDQXlLU0FxSUUxaGRHZ3VVRWtwSUNvZ01UQXdLU0F2SURFd01IMWdLVHRjY2x4dVhISmNiaTh2UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmx4eVhHNHZMeUJzWlhRZ1pHbHpkR0Z1WTJVZ1BTQndjbTl0Y0hRb0o5Q2owTHJRc05DMjBMalJndEMxSU5HQTBMRFJnZEdCMFlMUXZ0R1AwTDNRdU5DMUlOQ3lJTkM2MExqUXU5QyswTHpRdGRHQzBZRFFzTkdGSU5DODBMWFF0dEMwMFlNZzBMUFF2dEdBMEw3UXROQ3cwTHpRdURvbkxDQW5KeWs3WEhKY2JpOHZJR3hsZENCMGFXMWxJRDBnY0hKdmJYQjBLQ2ZRbzlDNjBMRFF0dEM0MFlMUXRTRFF1dEMrMEx2UXVOR0gwTFhSZ2RHQzBMTFF2aURSaDlDdzBZSFF2dEN5SU5DOTBMQWcwTFRRdnRHQTBMN1FzOUdET2ljc0lDY25LVHRjY2x4dUx5OGdhV1lnS0dScGMzUmhibU5sSUNFOUlHNTFiR3dnSmlZZ2RHbHRaU0FoUFNCdWRXeHNLU0I3WEhKY2JpOHZJR0ZzWlhKMEtHRFFuZEMxMEw3UXNkR0YwTDdRdE5DNDBMelFzTkdQSU5HQjBMclF2dEdBMEw3UmdkR0MwWXc2SUNSN1pHbHpkR0Z1WTJVZ0x5QjBhVzFsZlNEUXV0QzhMOUdIMExEUmdXQXBPMXh5WEc0dkx5QjlJR1ZzYzJVZ2UxeHlYRzR2THlCY2RHRnNaWEowS0NmUWt0Q3kwTFhRdE5DNDBZTFF0U0RRdDlDOTBMRFJoOUMxMEwzUXVOQzFKeWs3WEhKY2JpOHZJSDFjY2x4dVhISmNiaTh2UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmx4eVhHNHZMeUJzWlhRZ1pHOXNiR0Z5Y3lBOUlIQnliMjF3ZENnbjBLSFF1dEMrMEx2UmpOQzYwTDRnMExUUXZ0QzcwTHZRc05HQTBMN1FzaURRc3RHTElOR0YwTDdSZ3RDNDBZTFF0U0RRdnRDeDBMelF0ZEM5MFkvUmd0R01QeWNzSUNjbktUdGNjbHh1THk4Z1kyOXVjM1FnY21GMFpTQTlJREV1TVR0Y2NseHVMeThnWVd4bGNuUW9ZTkNTMFlzZzBML1F2dEM3MFlQUmg5QzQwWUxRdFNBa2UwMWhkR2d1Y205MWJtUW9aRzlzYkdGeWN5QXFJSEpoZEdVZ0tpQXhNREFwSUM4Z01UQXdmU0RRdGRDeTBZRFF2bUFwTzF4eVhHNWNjbHh1THk4OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVhISmNiaTh2SUd4bGRDQm1iR0Z6YUUxbGJXOXllU0E5SUhCeWIyMXdkQ2duMEtQUXV0Q3cwTGJRdU5HQzBMVWcwTDdRc2RHTTBMWFF2Q0RSaE5DNzBMWFJpTkM2MExnZzBMSWcwTFBRdU5DejBMRFFzZEN3MExuUmd0Q3cwWVVuTENBbkp5azdYSEpjYmk4dklHRnNaWEowS0dEUW45QyswTHpRdGRHSjBMRFF0ZEdDMFlIUmp5QWtlMDFoZEdndVpteHZiM0lvWm14aGMyaE5aVzF2Y25rZ0tpQXhNREkwSUM4Z09ESXdLWDBnMFlUUXNOQzUwTHZRdnRDeVlDazdYSEpjYmx4eVhHNHZMejA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzVjY2x4dUx5OGdiR1YwSUcxdmJtVjVVM1Z0SUQwZ2NISnZiWEIwS0NmUW9kQzYwTDdRdTlHTTBMclF2aURRczlHQTBMalFzdEMxMEwwZzBZTWcwTExRc05HQklOQzEwWUhSZ3RHTVB5Y3NJQ2NuS1R0Y2NseHVMeThnYkdWMElHTm9iMk52YkdGMFpWQnlhV05sSUQwZ2NISnZiWEIwS0NmUW10Q3cwTHJRc05HUElOR0cwTFhRdmRDd0lOR0kwTDdRdXRDKzBMdlFzTkMwMExyUXVEOG5MQ0FuSnlrN1hISmNiaTh2SUdGc1pYSjBLR0RRa3RHTElOQzgwTDdRdHRDMTBZTFF0U0RRdXRHRDBML1F1TkdDMFl3Z0pIdE5ZWFJvTG1ac2IyOXlLRzF2Ym1WNVUzVnRJQzhnWTJodlkyOXNZWFJsVUhKcFkyVXBmU0RSaU5DKzBMclF2dEM3MExEUXROQyswTG9nMExnZzBZTWcwTExRc05HQklOQyswWUhSZ3RDdzBMM1F0ZEdDMFlIUmp5QWtlMDFoZEdndWNtOTFibVFvS0cxdmJtVjVVM1Z0SUNVZ1kyaHZZMjlzWVhSbFVISnBZMlVwSUNvZ01UQXdLU0F2SURFd01IMGcwTFBSZ05DNDBMTFF0ZEM5WUNrN1hISmNibHh5WEc0dkx6MDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNWNjbHh1THk4Z2JHVjBJRzUxYlNBOUlIQnliMjF3ZENnbjBKTFFzdEMxMExUUXVOR0MwTFVnMFlMUmdOQzEwWVhRdDlDOTBMRFJoOUM5MEw3UXRTRFJoOUM0MFlIUXU5QytKeXdnSnljcE8xeHlYRzR2THlCc1pYUWdjbVZ6ZFd4MElEMGdKeWM3WEhKY2JseHlYRzR2THlCM2FHbHNaU0FvYm5WdElENGdNQ2tnZTF4eVhHNHZMeUJjZEhKbGMzVnNkQ0FyUFNBb2JuVnRJQ1VnTVRBcE8xeHlYRzR2THlCY2RHNTFiU0E5SUhCaGNuTmxTVzUwS0c1MWJTQXZJREV3S1R0Y2NseHVMeThnZlZ4eVhHNHZMeUJoYkdWeWRDaHlaWE4xYkhRcE8xeHlYRzVjY2x4dVhISmNiaTh2UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmx4eVhHNHZMeUJzWlhRZ1pHVndiM05wZENBOUlIQnliMjF3ZENnbjBKTFFzdEMxMExUUXVOR0MwTFVnMFlIUmc5QzgwTHpSZ3lEUXN0QzYwTHZRc05DMDBMQW5MQ0FuSnlrN1hISmNiaTh2SUdOdmJuTjBJRzF2Ym5Sb0lEMGdNanRjY2x4dUx5OGdZMjl1YzNRZ2NHVnlZMlZ1ZENBOUlEQXVNRFU3WEhKY2JpOHZJR0ZzWlhKMEtHRFFvZEdEMEx6UXZOQ3dJTkM5MExEUmg5QzQwWUhRdTlDMTBMM1F2ZEN3MFk4ZzBML1F2aURRdjlHQTBMN1JodEMxMEwzUmd0Q3cwTHc2SUNSN1RXRjBhQzVtYkc5dmNpZ29aR1Z3YjNOcGRDQXFJRzF2Ym5Sb0lDOGdNVElwSUNvZ2NHVnlZMlZ1ZENBcUlERXdNQ2tnTHlBeE1EQjlZQ2s3WEhKY2JseHlYRzVjY2x4dVhISmNibHh5WEc0dkx5QmpiMjV6ZENCaElEMGdXekVzSURJc0lETXNJRFFzSURVc0lEWXNJRGNzSURnc0lEbGRPMXh5WEc0dkx5QmpiMjV6ZENCaUlEMGdXeWRoSnl3Z0oySW5MQ0FuWXljc0lDZGtKeXdnSjJVbkxDQW5aaWNzSUNkbkp5d2dKMmduWFR0Y2NseHVYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LR0V1YkdWdVozUm9LVHRjY2x4dUx5OGdZMjl1YzI5c1pTNXNiMmNvWVM1d2RYTm9LREV4TENBeE15d2dNVFVzSURFM0tTazdYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LR0VwTzF4eVhHNHZMeUJpTG5CMWMyZ29KMmtuTENBbmFpY3BPMXh5WEc0dkx5QmpiMjV6YjJ4bExteHZaeWhpS1R0Y2NseHVMeThnWWk1d2IzQW9LVHRjY2x4dUx5OGdZaTV3YjNBb0tUdGNjbHh1THk4Z1lpNXdiM0FvS1R0Y2NseHVMeThnWTI5dWMyOXNaUzVzYjJjb1lpazdYSEpjYmk4dklHUmxiR1YwWlNCaVd6TmRPMXh5WEc0dkx5QmpiMjV6YjJ4bExteHZaeWhpS1R0Y2NseHVMeThnWVM1emNHeHBZMlVvTXl3Z015d2dKMmhwSnlrN1hISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktHRXBPMXh5WEc0dkx5QmhMblZ1YzJocFpuUW9NeWs3WEhKY2JpOHZJR052Ym5OdmJHVXViRzluS0dFcE8xeHlYRzR2THlCamIyNXpkQ0J2Ym1VZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWIyNWxKeWs3WEhKY2JpOHZJRzl1WlM1emRIbHNaUzUzYVdSMGFDQTlJQ2N4TlRCd2VDYzdYSEpjYmk4dklHOXVaUzV6ZEhsc1pTNXdZV1JrYVc1blFtOTBkRzl0SUQwZ0p6UXdjSGduTzF4eVhHNHZMeUJ2Ym1VdVkyeGhjM05NYVhOMExtRmtaQ2duZEhkdkp5d2dKM1JvY21WbEp5azdYSEpjYmk4dklHOXVaUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2QwYUhKbFpTY3BPMXh5WEc0dkx5QmpiMjV6ZENCMGIyZG5iR1VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1ZEc5bloyeGxKeWs3WEhKY2JpOHZJSFJ2WjJkc1pTNXZibU5zYVdOcklEMGdablZ1WTNScGIyNG9LU0I3WEhKY2JpOHZJRngwZEdocGN5NWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZDBhSEpsWlNjcE8xeHlYRzR2THlCOVhISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktHOXVaUzVuWlhSQmRIUnlhV0oxZEdVb0oyUmhkR0VuS1NrN1hISmNiaTh2SUc5dVpTNXpaWFJCZEhSeWFXSjFkR1VvSjJSaGRHRXRiblZ0Snl3Z05pazdYSEpjYmx4eVhHNHZMeUJqYjI1emRDQm5ZWE1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdVoyRnpKeWs3WEhKY2JpOHZJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWjJGekxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpOHZJRngwWjJGelcybGRMbTl1WTJ4cFkyc2dQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVMeThnWEhSY2RHeGxkQ0JuWVd4c2IyNXpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbWRoYkd4dmJuTW5LUzUyWVd4MVpUdGNjbHh1THk4Z1hIUmNkR3hsZENCaGJXOTFiblFnUFNCMGFHbHpMbWRsZEVGMGRISnBZblYwWlNnblpHRjBZU2NwTzF4eVhHNHZMeUJjZEZ4MFkyOXVjMjlzWlM1c2IyY29aMkZzYkc5dWN5QXFJR0Z0YjNWdWRDazdYSEpjYmk4dklGeDBmVnh5WEc0dkx5QWdmVnh5WEc1Y2NseHVMeThnSUd4bGRDQmhJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hISmNiaTh2SUNCaExtbHVibVZ5U0ZSTlRDQTlJQ2RJWld4c2J5RW5PMXh5WEc0dkx5QWdZUzVqYkdGemMweHBjM1F1WVdSa0tDZG1iM1Z5SnlrN1hISmNibHh5WEc0dkx5QWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuUmxjM1FuS1M1aGNIQmxibVJEYUdsc1pDaGhLVHRjY2x4dUx5OGdJQ0JqYjI1emIyeGxMbXh2WnloaEtUdGNjbHh1THk4Z2JHVjBJSE4xYlNBOUlEQTdYSEpjYmk4dklHeGxkQ0JySUQwZ01EdGNjbHh1THk4Z2QyaHBiR1VnS0dzZ1BEMGdNeWtnZTF4eVhHNHZMeUJjZEhOMWJTQXJQU0JyTzF4eVhHNHZMeUJjZEdzckt6dGNjbHh1THk4Z2ZWeHlYRzR2THlCamIyNXpiMnhsTG14dlp5Z25jM1Z0T2lBbklDc2djM1Z0S1R0Y2NseHVMeThnYkdWMElHOTFkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV2ZFhRbktUdGNjbHh1THk4Z2JHVjBJSEFnUFNBd08xeHlYRzR2THlCc1pYUWdiM1YwVTNSeUlEMGdKeWM3WEhKY2JpOHZJR3hsZENCbWJHRm5JRDBnTXp0Y2NseHVMeThnZDJocGJHVWdLSEFnUENBMEtTQjdYSEpjYmk4dklGeDBiR1YwSUhBeElEMGdNRHRjY2x4dUx5OGdYSFIzYUdsc1pTQW9jREVnUENBMEtTQjdYSEpjYmk4dklGeDBYSFJwWmlBb2NERWdQQ0JtYkdGbktTQjdYSEpjYmk4dklGeDBYSFJjZEc5MWRGTjBjaUFyUFNBbk1DYzdYSEpjYmk4dklGeDBYSFI5SUdWc2MyVWdlMXh5WEc0dkx5QmNkRngwWEhSdmRYUlRkSElnS3owZ0p5b25PMXh5WEc0dkx5QmNkRngwZlZ4eVhHNHZMeUJjZEZ4MGNERXJLenRjY2x4dUx5OGdYSFI5WEhKY2JpOHZJRngwWm14aFp5MHRPMXh5WEc0dkx5QmNkRzkxZEZOMGNpQXJQU0FuUEdKeVBpZGNjbHh1THk4Z1hIUndLeXM3WEhKY2JpOHZJSDFjY2x4dUx5OGdiM1YwTG1sdWJtVnlTRlJOVENBOUlHOTFkRk4wY2p0Y2NseHVMeThnWTI5dWMzUWdaWGhsY21OcGMyVWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VaWGhsY21OcGMyVW5LVHRjY2x4dUx5OGdZMjl1YzI5c1pTNXNiMmNvWlhobGNtTnBjMlVwTzF4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnlobGVHVnlZMmx6WlM1cGJtNWxja2hVVFV3cE8xeHlYRzR2THlCamIyNXpiMnhsTG14dlp5aGxlR1Z5WTJselpTNXBibTVsY2xSbGVIUXBPMXh5WEc0dkx5QmpiMjV6YjJ4bExteHZaeWhsZUdWeVkybHpaUzUwWlhoMFEyOXVkR1Z1ZENrN1hISmNiaTh2SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV2ZFhRdE1TY3BMbWx1Ym1WeVNGUk5UQ0E5SUdWNFpYSmphWE5sTG1sdWJtVnlTRlJOVER0Y2NseHVMeThnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbTkxZEMweEp5a3VhVzV1WlhKVVpYaDBJRDBnWlhobGNtTnBjMlV1YVc1dVpYSlVaWGgwTzF4eVhHNHZMeUJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViM1YwTFRFbktTNTBaWGgwUTI5dWRHVnVkQ0E5SUdWNFpYSmphWE5sTG5SbGVIUkRiMjUwWlc1ME8xeHlYRzR2THlCc1pYUWdaakVnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WmkweEp5azdYSEpjYmk4dklHWjFibU4wYVc5dUlHOXVaU2dwSUh0Y2NseHVMeThnWEhSamIyNXpiMnhsTG14dlp5Z25kMjl5YXljcE8xeHlYRzR2THlCOVhISmNiaTh2SUc5dVpTZ3BPMXh5WEc0dkx5QXZMeUJtTVM1dmJtTnNhV05ySUQwZ2IyNWxPMXh5WEc0dkx5Qm1NUzV2Ym1Oc2FXTnJJRDBnS0NrZ1BUNGdlMXh5WEc0dkx5QmNkR052Ym5OdmJHVXViRzluS0Nkb1pXeHNieWNwTzF4eVhHNHZMeUI5WEhKY2JpOHZJR052Ym5OdmJHVXViRzluS0RFZ0t5QnZibVVvS1NrN1hISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktHOXVaU2dwS1R0Y2NseHVMeThnWm5WdVkzUnBiMjRnZEhkdktDa2dlMXh5WEc0dkx5QmNkR052Ym5OdmJHVXViRzluS0NkM2IzSnJJREl5TWpJeUp5azdYSEpjYmk4dklGeDBjbVYwZFhKdUlEVTBPMXh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeUIwZDI4b0tUdGNjbHh1THk4Z1kyOXVjMjlzWlM1c2IyY29NU0FySUhSM2J5Z3BLVHRjY2x4dVhISmNiaTh2SUd4bGRDQmhJRDBnT0R0Y2NseHVMeThnYkdWMElHSWdQU0E1TzF4eVhHNHZMeUJtZFc1amRHbHZiaUJ0ZFd4MGFYQnNlU2dwSUh0Y2NseHVMeThnWEhSamIyNXpiMnhsTG14dlp5aGhLbUlwTzF4eVhHNHZMeUJjZEhKbGRIVnliaUJoSUNvZ1lqdGNjbHh1THk4Z2ZWeHlYRzR2THlCc1pYUWdZekVnUFNCdGRXeDBhWEJzZVNncE8xeHlYRzR2THlCc1pYUWdZeklnUFNBeE1DQXFJRzExYkhScGNHeDVLQ2s3WEhKY2JpOHZJR052Ym5OdmJHVXViRzluS0dNeExDQmpNaWs3WEhKY2JpOHZJR1oxYm1OMGFXOXVJRzExYkhScE1paDRMQ0I1S1NCN1hISmNiaTh2SUZ4MGNtVjBkWEp1SUhnZ0tpQjVPMXh5WEc0dkx5QjlYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LRzExYkhScE1pZ3pMQ0F5S1NrN1hISmNiaTh2SUdOdmJuTnZiR1V1Ykc5bktHMTFiSFJwTWlneU1Dd2dNaWtwTzF4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnlodGRXeDBhVElvTWpBc0lHRXBLVHRjY2x4dUx5OGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtWXRNaWNwTG05dVkyeHBZMnNnUFNCbWRXNWpkR2x2YmlncElIdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWduS3lzckt5c3JKeWs3WEhKY2JpOHZJSDFjY2x4dUx5OGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtWXRNaWNwTG05dVkyeHBZMnNnUFNBb0tTQTlQaUI3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb0p5MHRMUzB0TFNjcE8xeHlYRzR2THlCOVhISmNiaTh2SUdaMWJtTjBhVzl1SUNoaExDQmlLU0I3WEhKY2JseHlYRzR2THlCOVhISmNiaTh2SUNoaExDQmlLU0E5UGlCN2ZWeHlYRzR2THlCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2RpZFhSMGIyNG5LUzV2Ym1Oc2FXTnJJRDBnS0NrZ1BUNGdlMXh5WEc0dkx5QmNkR3hsZENCeVlXUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2RwYm5CMWRGdDBlWEJsUFZ3aWNtRmthVzljSWwwbktUdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWh5WVdRcE8xeHlYRzR2THlCY2RHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2djbUZrTG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmk4dklGeDBYSFJwWmlBb2NtRmtXMmxkTG1Ob1pXTnJaV1FwSUh0Y2NseHVMeThnWEhSY2RGeDBZMjl1YzI5c1pTNXNiMmNvY21Ga1cybGRMblpoYkhWbEtUdGNjbHh1THk4Z1hIUmNkSDFjY2x4dUx5OGdYSFI5WEhKY2JpOHZJSDFjZEZ4eVhHNHZMeUJzWlhRZ2IzVjBJRDBnSnljN1hISmNiaTh2SUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z01UQTdJR2tyS3lrZ2UxeHlYRzR2THlCY2RDOHZJR2xtSUNocElEMDlJRFlwSUdKeVpXRnJPMXh5WEc0dkx5QmNkRzkxZENBclBTQnBJQ3NnSnlBbk8xeHlYRzR2THlCY2RHbG1JQ2hwSUQwOUlEWXBJR0p5WldGck8xeHlYRzR2THlCOVhISmNiaTh2SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU52ZFhRbktTNXBibTVsY2toVVRVd2dQU0J2ZFhRN1hISmNiaTh2SUd4bGRDQmthWFlnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWIyNWxKeWs3WEhKY2JpOHZJR052Ym5OdmJHVXViRzluS0dScGRpazdYSEpjYmk4dklDOHZJR1JwZGk1emRIbHNaUzVpWVdOclozSnZkVzVrSUQwZ0ozSmxaQ2M3WEhKY2JpOHZJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWkdsMkxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb1pHbDJXMmxkS1R0Y2NseHVMeThnWEhSa2FYWmJhVjB1YzNSNWJHVXVZbUZqYTJkeWIzVnVaQ0E5SUNkeVpXUW5PMXh5WEc0dkx5QmNkR1JwZGx0cFhTNXZibU5zYVdOcklEMGdkSGR2TzF4eVhHNHZMeUI5WEhKY2JpOHZJR1oxYm1OMGFXOXVJSFIzYnlncElIdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWduVjI5eWF5RWhKeWxjY2x4dUx5OGdmVnh5WEc0dkx5QnNaWFFnWWlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUnpRbmxEYkdGemMwNWhiV1VvSjI5dVpTY3BPMXh5WEc0dkx5QmpiMjV6YjJ4bExteHZaeWhpS1R0Y2NseHVMeThnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaUxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpOHZJRngwWWx0cFhTNXpkSGxzWlM1aWIzSmtaWElnUFNBbk1YQjRJSE52Ykdsa0lHSnNZV05ySnp0Y2NseHVMeThnZlZ4eVhHNHZMeUJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VZblJ1TFRFbktTNXZibU5zYVdOcklEMGdLQ2tnUFQ0Z2UxeHlYRzR2THlCY2RHTnZibk52YkdVdWJHOW5LR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWphR1ZqYXljcExuWmhiSFZsS1R0Y2NseHVMeThnWEhSc1pYUWdiWGxEYUdWamEySnZlQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVqYUdWamF5Y3BPMXh5WEc0dkx5QmNkR052Ym5OdmJHVXViRzluS0cxNVEyaGxZMnRpYjNndVkyaGxZMnRsWkNrN1hISmNiaTh2SUZ4MGFXWWdLRzE1UTJobFkydGliM2d1WTJobFkydGxaQ2tnZTF4eVhHNHZMeUJjZEZ4MFkyOXVjMjlzWlM1c2IyY29KMDlySnlrN1hISmNiaTh2SUZ4MGZTQmxiSE5sSUh0Y2NseHVMeThnWEhSY2RHTnZibk52YkdVdWJHOW5LQ2RPYjNRZ1Qyc25LVHRjY2x4dUx5OGdYSFI5WEhKY2JpOHZJSDFjY2x4dUx5OGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtSjBiaTB5SnlrdWIyNWpiR2xqYXlBOUlDaGxkbVZ1ZENrZ1BUNGdlMXh5WEc0dkx5QmNkR1YyWlc1MExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNiaTh2SUZ4MEx5OGdiR1YwSUhSbGVIUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pkSGR2SnlrN1hISmNiaTh2SUZ4MEx5OGdZMjl1YzI5c1pTNXNiMmNvZEdWNGRDNTJZV3gxWlNrN1hISmNiaTh2SUZ4MEx5OGdkR1Y0ZEM1MllXeDFaU0E5SUNkdmJtVW5PMXh5WEc0dkx5QmNkR3hsZENCbWIzSnRJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25abTl5YlNjcE8xeHlYRzR2THlCY2RHTnZibk52YkdVdWJHOW5LR1p2Y20wcE8xeHlYRzR2THlCY2RHTnZibk52YkdVdWJHOW5LR1p2Y20wdVpXeGxiV1Z1ZEhNdWJqRXVkbUZzZFdVcE8xeHlYRzR2THlCY2RHTnZibk52YkdVdWJHOW5LR1p2Y20wdVpXeGxiV1Z1ZEhNdWRHaHlaV1V1ZG1Gc2RXVXBPMXh5WEc0dkx5QjlYSEpjYmk4dklHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSjJKMWRIUnZiaWNwTG05dVkyeHBZMnNnUFNBb0tTQTlQaUI3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG05dVpTY3BMblpoYkhWbEtUdGNjbHh1THk4Z1hIUXZMMU4wZVd4bGMxeHlYRzR2THlCY2RHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSjJKMWRIUnZiaWNwTG5OMGVXeGxMbUpoWTJ0bmNtOTFibVJEYjJ4dmNpQTlJRnh5WEc0dkx5QmNkR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXZibVVuS1M1MllXeDFaVHRjY2x4dUx5OGdmVnh5WEc0dkx5QmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWIyNWxKeWt1YjI1cGJuQjFkQ0E5SUNncElEMCtJSHRjY2x4dUx5OGdYSFJqYjI1emIyeGxMbXh2Wnloa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YjI1bEp5a3VkbUZzZFdVcE8xeHlYRzR2THlCY2RHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSjNOd1lXNG5LUzVwYm01bGNraFVUVXdnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YjI1bEp5a3VkbUZzZFdVN1hISmNiaTh2SUgxY2NseHVMeThnYkdWMElHRWdQU0E1TzF4eVhHNHZMeUJwWmlBb1lTQWhQU0E1S1NCN1hISmNiaTh2SUZ4MFkyOXVjMjlzWlM1c2IyY29KM2xsY3ljcE8xeHlYRzR2THlCOUlHVnNjMlVnZTF4eVhHNHZMeUJjZEdOdmJuTnZiR1V1Ykc5bktDZHVieWNwTzF4eVhHNHZMeUI5WEhKY2JpOHZJRk5zYVdSbGNpMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjY2x4dUx5OGdiR1YwSUd4bFpuUkNkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV6Ykdsa1pYSXRiR1ZtZENjcE8xeHlYRzR2THlCc1pXWjBRblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0J6Ykdsa1pVeGxablFwTzF4eVhHNHZMeUJoZFhSdlUyeHBaR1Z5S0NrN1hISmNiaTh2SUd4bGRDQnNaV1owSUQwZ01EdGNjbHh1THk4Z2JHVjBJSFJwYldWeU8xeHlYRzR2THlCbWRXNWpkR2x2YmlCaGRYUnZVMnhwWkdWeUlDZ3BJSHRjY2x4dUx5OGdYSFIwYVcxbGNpQTlJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzR2THlCY2RGeDBkbUZ5SUd4cGJtVWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViR2x1WlNjcE8xeHlYRzR2THlCY2RGeDBiR1ZtZENBdFBTQXpOakE3WEhKY2JpOHZJRngwWEhScFppQW9iR1ZtZENBOElDMHhNRGd3S1NCN1hISmNiaTh2SUZ4MFhIUmNkR3hsWm5RZ1BTQXdPMXh5WEc0dkx5QmNkRngwWEhSamJHVmhjbFJwYldWdmRYUW9kR2x0WlhJcE8xeHlYRzR2THlCY2RGeDBmVnh5WEc0dkx5QmNkRngwYkdsdVpTNXpkSGxzWlM1c1pXWjBJRDBnYkdWbWRDQXJJQ2R3ZUNjN1hISmNiaTh2SUZ4MFhIUmhkWFJ2VTJ4cFpHVnlLQ2s3WEhKY2JpOHZJRngwZlN3Z01qQXdNQ2s3WEhKY2JpOHZJSDFjY2x4dVhISmNiaTh2SUZOc2FXUmxjaTB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2NseHVYSEpjYmk4dklHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diVEV1YkdWdVozUm9PeUJwS3lzcElIdGNjbHh1THk4Z1hIUmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWIzVjBKeWt1YVc1dVpYSklWRTFNSUNzOUlHMHhXMmxkSUNzZ0p6eGljajRuTzF4eVhHNHZMeUI5WEhKY2JseHlYRzR2THlCc1pYUWdjSEp2WjA1MWJTQTlJRTFoZEdndVpteHZiM0lvS0UxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUF4TUNrZ0t5QXhLVHRjY2x4dUx5OGdYSFF2THlCc1pYUWdkR1Z0Y0U5MWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZDBaVzF3TFc5MWRDY3BPMXh5WEc0dkx5QmNkQzh2SUhSbGJYQlBkWFF1YVc1dVpYSklWRTFNSUQwZ2NISnZaMDUxYlR0Y2NseHVYSEpjYmk4dklHWjFibU4wYVc5dUlHWjFiakVvS1NCN1hISmNibHh5WEc0dkx5QmNkR3hsZENCdWRXMGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25iWGx1ZFcwbktTNTJZV3gxWlR0Y2NseHVMeThnWEhSc1pYUWdiM1YwTVNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdmRYUW5LVHRjY2x4dVhISmNiaTh2SUZ4MGFXWWdLRzUxYlNBOVBTQndjbTluVG5WdEtTQjdYSEpjYmk4dklGeDBYSFJ2ZFhReExtbHVibVZ5U0ZSTlRDQTlJQ2RaYjNVZ2QybHVKenRjY2x4dUx5OGdYSFI5SUdWc2MyVWdhV1lnS0c1MWJTQStJSEJ5YjJkT2RXMHBJSHRjY2x4dUx5OGdYSFJjZEc5MWRERXVhVzV1WlhKSVZFMU1JRDBnSjFsdmRYSWdiblZ0WW1WeUlIWmxjbmtnWW1sbkp6dGNjbHh1THk4Z1hIUjlJR1ZzYzJVZ2UxeHlYRzR2THlCY2RGeDBiM1YwTVM1cGJtNWxja2hVVFV3Z1BTQW5XVzkxY2lCdWRXMWlaWElnYkdsMGRHeGxKenRjY2x4dUx5OGdYSFI5WEhKY2JpOHZJSDFjY2x4dUx5OGdiR1YwSUdKMGIyNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZblJ1SnlrN1hISmNiaTh2SUdKMGIyNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQm1kVzR4S1RzaVhYMD0ifQ==
