// document.querySelector('.i-1').addEventListener('keypress', (e) => {
// 	console.log(e.code);
// });
document.querySelector('.i-1').addEventListener('keydown', (e) => {
	console.log('keydown');
	console.log(e.code);
	return false;
})
//////////////////////////////////////
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