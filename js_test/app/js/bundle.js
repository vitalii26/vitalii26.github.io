(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var requestUrl = 'https://jsonplaceholder.typicode.com/users'; //fetch///

function sendRequest(method, url) {
  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var headers = {
    'Content-Type': 'application/json'
  };
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (error) {
      var e = new Error('Shit!!');
      e.data = error;
      throw e;
    });
  });
} // sendRequest('GET', requestUrl)
// .then(data => console.log(data))
// .catch(err => console.log(error))


var body = {
  name: 'Vladilen',
  age: '26'
};
sendRequest('POST', requestUrl, body).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.log(err);
}); ///XMLHttpRequests/////
// const xhr = new XMLHttpRequest()
// xhr.open('GET', requestUrl);
// xhr.responseType = 'json';
// xhr.onload = () => {
// 	if (xhr.status >= 400) {
// 		console.error(xhr.response);
// 	}
// 	console.log(xhr.response);
// }
// xhr.onerror = () => {
// 	console.log(xhr.response);
// }
// xhr.send()
// function sendRequest(method, url, body = null) {
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest()
// 		xhr.open(method, url);
// 		xhr.responseType = 'json';
// 		xhr.setRequestHeader('Content-Type', 'application/json');
// 		xhr.onload = () => {
// 			if (xhr.status >= 400) {
// 				reject(xhr.response);
// 			}
// 			console.log(xhr.response);
// 		}
// 		xhr.onerror = () => {
// 			reject(xhr.response);
// 		}
// 		xhr.send(JSON.stringify(body))
// 	})
// }
// // sendRequest('GET', requestUrl)
// // .then(data => console.log(data))
// // .catch(err => console.log(error))
// const body = {
// 	name: 'Vladilen',
// 	age: '26'
// };
// sendRequest('POST', requestUrl, body)
// .then(data => console.log(data))
// .catch(err => console.log(error))
/////Proxy//////
////Object
// const person = {
// 	name: 'Vitalii',
// 	age: 26,
// 	job: 'none'
// }
// const objectProxy = new Proxy(person, {
// 	get(target, prop) {
// 		console.log(`Getting prop ${prop}`)
// 		return target[prop];
// 	},
// 	set(target, prop, value) {
// 		if (prop in target) {
// 			target[prop] = value
// 		} else {
// 			throw new Error(`No ${prop} field in target`);
// 		}
// 	}
// });
// console.log(objectProxy.name);
//////////////////////
// const delay = ms => {
// 	return new Promise(resolve => setTimeout(() => resolve(), ms));
// }
// const url = 'https://jsonplaceholder.typicode.com/todos';
// function fetchTodos() {
// 	console.log('Fetch todo started');
// 	return delay(2000)
// 	.then(() => {
// 		return fetch(url);
// 	}).then(response => response.json())
// }
// fetchTodos()
// 	.then(data => {
// 		console.log('Data', data);
// 	})
// 	.catch(e => console.error(e));
// async  function fetchAsyncTodos() {
// 	console.log('Fetch todo started')
// 	await delay(2000)
// 	const response = await fetch(url)
// 	const data = await response.json()
// 	console.log('Data', data);
// }
// fetchAsyncTodos()
///////////////////
// class Component {
// 	constructor(selector) {
// 		this.$el = document.querySelector(selector)
// 	}
// 	hide() {
// 		this.$el.style.display = 'none'
// 	}
// 	show() {
// 		this.$el.style.display = 'block'
// 	}
// }
// class Box extends Component {
// 	constructor(options) {
// 		super(options.selector)
// 		this.$el.style.width = this.$el.style.height = options.size + 'px';
// 		this.$el.style.backgroundColor = options.color
// }
// }
// const box1 = new Box({
// 	selector: '#box1',
// 	size: 100,
// 	color: 'red'
// })
// const animal = {
// 	name: 'Animal',
// 	age: 5,
// 	hasTail: true
// }
// console.log(animal);
// class Animal {
// 	constructor(options) {
// 		this.name = options.name
// 		this.age = options.age
// 		this.hasTail = options.hasTail
// 	}
// 	voice() {
// 		console.log('I am Animal!');
// 	}
// }
// // const animal = new Animal({
// // 	name: 'animal',
// // 	age: 5,
// // 	hasTail: true
// // })
// // console.log(animal);
// // animal.voice();
// class Cat extends Animal {
// 	constructor(options) {
// 		super(options)
// 		this.color = options.color
// 	}
// 	voice() {
// 		super.voice()
// 		console.log(`I am ${this.name}`);
// 	}
// 	get ageInfo() {
// 		return this.age * 7;
// 	}
// 	set ageInfo(newAge) {
// 		this.age = newAge;
// 	}
// }
// const cat = new Cat({
// 	name: 'Cat',
// 	age: 7,
// 	hasTail: true,
// 	color: 'black'
// });
// console.log(cat);
// cat.voice();
// console.log(cat.ageInfo);
// cat.ageInfo = 12;
// console.log(cat.ageInfo);
///////////////////
// const person = Object.create(
// 	{
// 		calculateAge() {
// 			console.log('Age', new Date().getFullYear() - this.birthYear);
// 		}
// 	}, {
// 	name: {
// 		value: 'Vitalii',
// 		enumerable: true,
// 		writable: true,
// 		configurable: true
// 	},
// 	birthYear: {
// 		value: 1993,
// 		enumerable: false,
// 		writable: false,
// 		configurable: false
// 	},
// 	age: {
// 		get() {
// 			return new Date().getFullYear() - this.birthYear
// 		},
// 		set(value) {
// 			document.body.style.background = 'red';
// 			console.log('Set age', value);
// 		}
// 	}
// })
// console.log(person);
// person.calculateAge();
// const person = {
// 	name: 'Vitalii',
// 	birthYear: 1993
// }
// person.name = 'Maxim'
// delete person.name;
// console.log(person);
// console.log(person.age);
// person.age = 29;
// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log(key, person[key]);
// 	}
// }
///////////////////////
// console.log('Request data...')
// setTimeout(() => {
// 	console.log('Preparing data...');
// 	const backendData = {
// 		server: 'aws',
// 		port: 2000,
// 		status: 'working'
// 	}
// 	setTimeout(() => {
// 		backendData.modified = true;
// 		console.log('Data received', backendData)
// 	}, 2000);
// }, 2000)
// const p = new Promise(function(resolve, reject) {
// 	setTimeout(() => {
// 		console.log('Preparing data...');
// 		const backendData = {
// 			server: 'aws',
// 			port: 2000,
// 			status: 'working'
// 		}
// 		resolve(backendData);
// 	}, 2000);
// })
// p.then((data) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			data.modified = true;
// 			resolve(data);
// 		}, 2000);
// 	})
// })
// .then((clientData => {
// 	console.log('Data received', clientData);
// 	clientData.fromPromise = true;
// 	return clientData;
// }))
// .then(data => {
// 	console.log('Modified', data);
// })
// .catch(err => console.error('Error: ', err))
// .finally(() => console.log('Finally'))
// const sleep = ms => {
// return new Promise(resolve => {
//  setTimeout(() => resolve(), ms)
// });
// }
// sleep(2000).then(() => console.log('After 2 seconds'));
// sleep(3000).then(() => console.log('After 3 seconds'));
// Promise.all([sleep(2000), sleep(5000)])
// .then(() => {
// 	console.log('All promises')
// })
// Promise.race([sleep(2000), sleep(5000)])
// .then(() => {
// 	console.log('Race promises')
// })
// fetch('http://getbghf.php')
// .then(data => {
// 	console.log(data);
// 	// data.text().then(data2 => {
// 	// 	console.log(data2);
// 	// })
// 	return data.text();
// })
// .then (data => {
// 	console.log(data);
// })
///////////////XMLHttpRequests
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 		myFunction(this.responseText);
// 	}
// }
// xhttp.open('GET', 'http://getbghf', true);
// xhttp.send();
// function myFunction(data) {
// 	console.log(data);
// }
// let xhttp2 = new XMLHttpRequest();
// xhttp2.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 		myFunction2(this.responseText);
// 	}
// }
// xhttp2.open('POST', 'http://getbghf', true);
// xhttp2.setRequestHeader('content-type', "application/x-www-form-urlencoded");
// xhttp2.send('auth="sdfsdf&dfg=fgdfgf');
// function myFunction2(data) {
// 	console.log(data);
// }
////////////////
// let a = 7;
// console.log(a);
// let b = new Promise(function(resolve, reject) {
// 	setTimeout(() => {
// 		resolve(a = 99);
// 	}, 2000);
// });
// b.then(function() {
// 	console.log(a);
// })
///////////////////////////////
// const sleep = ms => {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(), ms)
// 	})
// }
// // sleep(2000).then(() => console.log('After 2 seconds'));
// // sleep(3000).then(() => console.log('After 3 seconds'));
// Promise.all([sleep(2000), sleep(5000)])
// .then(() => {
// 	console.log('All promises');
// })
// Promise.race([sleep(2000), sleep(5000)])
// .then(() => {
// 	console.log('Race promises');
// })
// console.log('Request data...');
// setTimeout(() => {
// 	console.log('Preparing data');
// 	const backendData = {
// 		server: 'avs',
// 		port: 2000,
// 		status: 'working'
// 	}
// 	setTimeout(() => {
// 		backendData.modified = true;
// 		console.log('Data received', backendData);
// 	}, 2000);
// }, 2000);
// const p = new Promise(function(resolve, reject) {
// 	setTimeout(() => {
// 		console.log('Preparing data');
// 		const backendData = {
// 			server: 'avs',
// 			port: 2000,
// 			status: 'working'
// 		}
// 		resolve(backendData);
// 	}, 2000);
// });
// p.then((data) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			data.modified = true;
// 			reject(data);
// 		}, 2000);
// 	})
// })
// .then(clientData => {
// 	console.log('Data received', clientData);
// 	clientData.fromPromise = true;
// 	return clientData;
// })
// .then(data => {
// 	console.log('Modified', data);
// })
// .catch(err => console.error('Error, err'))
// .finally(() => console.log('Finally'))
// console.log('Request data...');
// setTimeout(() => {
// 	console.log('Preparing data....');
// 	const backendData = {
// 		server: 'avs',
// 		port: 2000,
// 		status: 'working'
// 	}
// 	setTimeout(() => {
// 		backendData.modified = true;
// 		console.log('Data received', backendData)
// 	}, 2000);
// }, 2000);
// const p = new Promise(function(resolve, reject) {
// })
// Асинхронность
// console.log('start');
// console.log('start2');
// function timeout2sec() {
// 	console.log('timeout2sec');
// }
// window.setTimeout(timeout2sec, 2000);
// window.setTimeout(function() {
// 	console.log('Inside timeout, after 5 seconds');
// }, 5000);
// console.log('end');
/////////////////
// function createCalcFunction(n) {
// 	return function() {
// 		console.log(1000 * n);
// 	}
// }
// const person = {
// 	name: 'Vitalii'
// }
// function info(phone, email) {
// 	console.log(`Name: ${this.name}, tel: ${phone}, email: ${email}`);
// }
///Demo
// info.bind(person)('123123', 'v@mail.ru');
// info.bind(person, '123123')('v@mail.ru');
// info.bind(person, '123123', 'v@mail.ru')();
// Easy
// function bind(fn, context, ...rest) {
// 	return fn.bind(context, ...rest);
// }
// 2 Without inline methods
// function bind(fn, context, ...rest) {
// 	return function(...args) {
// 		const uniqId = Date.now().toString();
// 		context[uniqId] = fn;
// 		const result = context[uniqId](...rest.concat(args));
// 		delete context[uniqId];
// 		return result;
// 	}
// }
//// 3 ES 5
// function bind(fn, context) {
// 	const rest = Array.prototype.slice.call(arguments, 2);
// 	return function() {
// 		const args = Array.prototype.slice.call(arguments);
// 		return fn.apply(context, rest.concat(args));
// 	}
// }
/////// ES 6
// function bind(fn, context, ...rest) {
// 	return function(...args) {
// 		// return fn.apply(context, rest.concat(args));
// 		return fn.call(context, ...rest.concat(args));
// 	}
// }
// bind(info, person)('123123', 'v@mail.ru');
// bind(info, person, '123123')( 'v@mail.ru');
// bind(info, person, '123123', 'v@mail.ru')();
// console.log(person);
///CALL
// function call(fn, context, ...args) {
// 	const uniqId = Date.now().toString();
// 	context[uniqId] = fn;
// 	const result = context[uniqId](...args);
// 	delete context[uniqId];
// 	return result;
// }
// call(info, person, '1234', 'call@dfg');
//Apply
// function apply(fn, context, array) {
// 	const uniqId = Date.now().toString();
// 	context[uniqId] = fn;
// 	const result = context[uniqId](...array);
// 	delete context[uniqId];
// 	return result;
// }
// apply(info, person, ['123123', 'wefef@fg']);
///////////////////
// const calc = createCalcFunction(42);
// calc();
// function createIncrementor(n) {
// 	return function(num) {
// 		return n + num;
// 	}
// }
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.log(addOne(10));
// console.log(addOne(42));
// console.log(addTen(42));
// function urlGenerator(domain) {
// 	return function(url) {
// 		return `https://${url}.${domain}`;
// 	}
// }
// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');
// console.log(comUrl('petya'));
// console.log(ruUrl('petya'));
// function bind(context, fn) {
// 	return function(...args) {
// 		fn.apply(context, args);
// 	}
// }
/////////////////
// const person = {
// 	name: 'Vitalii'
// }
// function info(phone, email) {
// 	console.log(`Имя: ${this.name}, тел: ${phone}, E-mail: ${email}`);
// }
// 1 Простой
// function bind(fn, context, ...rest) {
// 	return fn.bind(context, ...rest);
// }
//2 without inline methods
// function bind(fn, context, ...rest) {
// 	return function(...args) {
// 		const uniqId = Date.now().toString();
// 		context[uniqId] = fn;
// 		const result = context[uniqId](...rest.concat(args));
// 		delete context[uniqId];
// 		return result;
// 	}
// }
//3 ES 5
// function bind(fn, context) {
// 	const rest = Array.prototype.slice.call(arguments, argArray 2);
// 	return function() {
// 		return fn.apply(context, arguments);
// 	}
// }
// bind(info, person)('122345', 'v@mail.ru');
// bind(info, person, '122345')('v@mail.ru');
// bind(info, person, '122345','v@mail.ru')();
/////////////////////////////////
// info.bind(person)('122345', 'v@mail.ru');
// info.bind(person, '121232')('v@mail.ru');
// info.bind(person, '121232', 'v@mail.ru')();
// function hello() {
// 	console.log('Hello', this);
// }
// hello();
// const person = {
// 	name: 'Vitalii',
// 	age: 26,
// 	sayHello: hello,
// 	sayHelloWindow: hello.bind(window),
// 	logInfo: function(job, phone) {
// 		console.group(`${this.name} info: `)
// 		console.log(`Name is ${this.name} and age is ${this.age}`);
// 		console.log(`Job is ${job}`);
// 		console.log(`Phone is ${phone}`);
// 		console.groupEnd();
// 	}
// }
// const lena = {
// 	name: 'Elena',
// 	age: 23
// }
// // person.logInfo.bind(lena, 'Frontend', '89903294')();
// // person.logInfo.call(lena, 'Frontend', '89903294');
// person.logInfo.apply(lena, ['Frontend', '89903294']);
// //====================
// const array = [1, 2, 3, 4, 5];
// // function multBy(arr, n) {
// // 	return arr.map(function(i) {
// // 		return i * n;
// // 	});
// // }
// Array.prototype.multBy = function(n) {
// 	return this.map(function(i) {
// 		return i * n;
// 	});
// }
// console.log(array.multBy(2));
// const arr2 = [5, 10, 15];
// console.log(arr2.multBy(3));

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9qc190ZXN0L3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sVUFBVSxHQUFHLDRDQUFuQixDLENBQ0E7O0FBQ0EsU0FBUyxXQUFULENBQXFCLE1BQXJCLEVBQTZCLEdBQTdCLEVBQStDO0FBQUEsTUFBYixJQUFhLHVFQUFOLElBQU07QUFDOUMsTUFBTSxPQUFPLEdBQUc7QUFDZixvQkFBZ0I7QUFERCxHQUFoQjtBQUdBLFNBQU8sS0FBSyxDQUFDLEdBQUQsRUFBTTtBQUNqQixJQUFBLE1BQU0sRUFBRSxNQURTO0FBRWpCLElBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBZixDQUZXO0FBR2pCLElBQUEsT0FBTyxFQUFFO0FBSFEsR0FBTixDQUFMLENBSUosSUFKSSxDQUlDLFVBQUEsUUFBUSxFQUFJO0FBQ25CLFFBQUksUUFBUSxDQUFDLEVBQWIsRUFBaUI7QUFDaEIsYUFBTyxRQUFRLENBQUMsSUFBVCxFQUFQO0FBQ0E7O0FBQ0QsV0FBTyxRQUFRLENBQUMsSUFBVCxHQUFnQixJQUFoQixDQUFxQixVQUFBLEtBQUssRUFBSTtBQUNwQyxVQUFNLENBQUMsR0FBRyxJQUFJLEtBQUosQ0FBVSxRQUFWLENBQVY7QUFDQSxNQUFBLENBQUMsQ0FBQyxJQUFGLEdBQVMsS0FBVDtBQUNBLFlBQU0sQ0FBTjtBQUNBLEtBSk0sQ0FBUDtBQUtBLEdBYk0sQ0FBUDtBQWNBLEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUVBLElBQU0sSUFBSSxHQUFHO0FBQ1osRUFBQSxJQUFJLEVBQUUsVUFETTtBQUVaLEVBQUEsR0FBRyxFQUFFO0FBRk8sQ0FBYjtBQUtBLFdBQVcsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixJQUFyQixDQUFYLENBQ0MsSUFERCxDQUNNLFVBQUEsSUFBSTtBQUFBLFNBQUksT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaLENBQUo7QUFBQSxDQURWLFdBRU8sVUFBQSxHQUFHO0FBQUEsU0FBSSxPQUFPLENBQUMsR0FBUixDQUFZLEdBQVosQ0FBSjtBQUFBLENBRlYsRSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJztcclxuLy9mZXRjaC8vL1xyXG5mdW5jdGlvbiBzZW5kUmVxdWVzdChtZXRob2QsIHVybCwgYm9keSA9IG51bGwpIHtcclxuXHRjb25zdCBoZWFkZXJzID0ge1xyXG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdH1cclxuXHRyZXR1cm4gZmV0Y2godXJsLCB7XHJcblx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG5cdFx0aGVhZGVyczogaGVhZGVyc1xyXG5cdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0aWYgKHJlc3BvbnNlLm9rKSB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZXJyb3IgPT4ge1xyXG5cdFx0XHRjb25zdCBlID0gbmV3IEVycm9yKCdTaGl0ISEnKTtcclxuXHRcdFx0ZS5kYXRhID0gZXJyb3I7XHJcblx0XHRcdHRocm93IGU7XHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vIHNlbmRSZXF1ZXN0KCdHRVQnLCByZXF1ZXN0VXJsKVxyXG4vLyAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxyXG4vLyAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuXHJcbmNvbnN0IGJvZHkgPSB7XHJcblx0bmFtZTogJ1ZsYWRpbGVuJyxcclxuXHRhZ2U6ICcyNidcclxufTtcclxuXHJcbnNlbmRSZXF1ZXN0KCdQT1NUJywgcmVxdWVzdFVybCwgYm9keSlcclxuLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxuLy8vWE1MSHR0cFJlcXVlc3RzLy8vLy9cclxuLy8gY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuLy8geGhyLm9wZW4oJ0dFVCcsIHJlcXVlc3RVcmwpO1xyXG4vLyB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG4vLyB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4vLyBcdGlmICh4aHIuc3RhdHVzID49IDQwMCkge1xyXG4vLyBcdFx0Y29uc29sZS5lcnJvcih4aHIucmVzcG9uc2UpO1xyXG4vLyBcdH1cclxuLy8gXHRjb25zb2xlLmxvZyh4aHIucmVzcG9uc2UpO1xyXG4vLyB9XHJcblxyXG4vLyB4aHIub25lcnJvciA9ICgpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZyh4aHIucmVzcG9uc2UpO1xyXG4vLyB9XHJcbi8vIHhoci5zZW5kKClcclxuXHJcbi8vIGZ1bmN0aW9uIHNlbmRSZXF1ZXN0KG1ldGhvZCwgdXJsLCBib2R5ID0gbnVsbCkge1xyXG4vLyBcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbi8vIFx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4vLyBcdFx0eGhyLm9wZW4obWV0aG9kLCB1cmwpO1xyXG4vLyBcdFx0eGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuLy8gXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4vLyBcdFx0eGhyLm9ubG9hZCA9ICgpID0+IHtcclxuLy8gXHRcdFx0aWYgKHhoci5zdGF0dXMgPj0gNDAwKSB7XHJcbi8vIFx0XHRcdFx0cmVqZWN0KHhoci5yZXNwb25zZSk7XHJcbi8vIFx0XHRcdH1cclxuLy8gXHRcdFx0Y29uc29sZS5sb2coeGhyLnJlc3BvbnNlKTtcclxuLy8gXHRcdH1cclxuXHJcbi8vIFx0XHR4aHIub25lcnJvciA9ICgpID0+IHtcclxuLy8gXHRcdFx0cmVqZWN0KHhoci5yZXNwb25zZSk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHR4aHIuc2VuZChKU09OLnN0cmluZ2lmeShib2R5KSlcclxuLy8gXHR9KVxyXG5cdFxyXG4vLyB9XHJcblxyXG4vLyAvLyBzZW5kUmVxdWVzdCgnR0VUJywgcmVxdWVzdFVybClcclxuLy8gLy8gLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuLy8gLy8gLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG4vLyBjb25zdCBib2R5ID0ge1xyXG4vLyBcdG5hbWU6ICdWbGFkaWxlbicsXHJcbi8vIFx0YWdlOiAnMjYnXHJcbi8vIH07XHJcbi8vIHNlbmRSZXF1ZXN0KCdQT1NUJywgcmVxdWVzdFVybCwgYm9keSlcclxuLy8gLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuLy8gLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG4vLy8vL1Byb3h5Ly8vLy8vXHJcbi8vLy9PYmplY3RcclxuLy8gY29uc3QgcGVyc29uID0ge1xyXG4vLyBcdG5hbWU6ICdWaXRhbGlpJyxcclxuLy8gXHRhZ2U6IDI2LFxyXG4vLyBcdGpvYjogJ25vbmUnXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG9iamVjdFByb3h5ID0gbmV3IFByb3h5KHBlcnNvbiwge1xyXG4vLyBcdGdldCh0YXJnZXQsIHByb3ApIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGBHZXR0aW5nIHByb3AgJHtwcm9wfWApXHJcbi8vIFx0XHRyZXR1cm4gdGFyZ2V0W3Byb3BdO1xyXG4vLyBcdH0sXHJcbi8vIFx0c2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcclxuLy8gXHRcdGlmIChwcm9wIGluIHRhcmdldCkge1xyXG4vLyBcdFx0XHR0YXJnZXRbcHJvcF0gPSB2YWx1ZVxyXG4vLyBcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBObyAke3Byb3B9IGZpZWxkIGluIHRhcmdldGApO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH1cclxuLy8gfSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhvYmplY3RQcm94eS5uYW1lKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBjb25zdCBkZWxheSA9IG1zID0+IHtcclxuLy8gXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgbXMpKTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgdXJsID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcyc7XHJcbi8vIGZ1bmN0aW9uIGZldGNoVG9kb3MoKSB7XHJcbi8vIFx0Y29uc29sZS5sb2coJ0ZldGNoIHRvZG8gc3RhcnRlZCcpO1xyXG4vLyBcdHJldHVybiBkZWxheSgyMDAwKVxyXG4vLyBcdC50aGVuKCgpID0+IHtcclxuLy8gXHRcdHJldHVybiBmZXRjaCh1cmwpO1xyXG4vLyBcdH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4vLyB9XHJcblxyXG4vLyBmZXRjaFRvZG9zKClcclxuLy8gXHQudGhlbihkYXRhID0+IHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKCdEYXRhJywgZGF0YSk7XHJcbi8vIFx0fSlcclxuLy8gXHQuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuXHJcbi8vIGFzeW5jICBmdW5jdGlvbiBmZXRjaEFzeW5jVG9kb3MoKSB7XHJcbi8vIFx0Y29uc29sZS5sb2coJ0ZldGNoIHRvZG8gc3RhcnRlZCcpXHJcbi8vIFx0YXdhaXQgZGVsYXkoMjAwMClcclxuLy8gXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcclxuLy8gXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbi8vIFx0Y29uc29sZS5sb2coJ0RhdGEnLCBkYXRhKTtcclxuLy8gfVxyXG5cclxuLy8gZmV0Y2hBc3luY1RvZG9zKClcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gY2xhc3MgQ29tcG9uZW50IHtcclxuLy8gXHRjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4vLyBcdFx0dGhpcy4kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG4vLyBcdH1cclxuXHJcbi8vIFx0aGlkZSgpIHtcclxuLy8gXHRcdHRoaXMuJGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuLy8gXHR9XHJcblxyXG4vLyBcdHNob3coKSB7XHJcbi8vIFx0XHR0aGlzLiRlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbi8vIFx0XHRzdXBlcihvcHRpb25zLnNlbGVjdG9yKVxyXG5cclxuLy8gXHRcdHRoaXMuJGVsLnN0eWxlLndpZHRoID0gdGhpcy4kZWwuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5zaXplICsgJ3B4JztcclxuLy8gXHRcdHRoaXMuJGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBib3gxID0gbmV3IEJveCh7XHJcbi8vIFx0c2VsZWN0b3I6ICcjYm94MScsXHJcbi8vIFx0c2l6ZTogMTAwLFxyXG4vLyBcdGNvbG9yOiAncmVkJ1xyXG4vLyB9KVxyXG5cclxuXHJcbi8vIGNvbnN0IGFuaW1hbCA9IHtcclxuLy8gXHRuYW1lOiAnQW5pbWFsJyxcclxuLy8gXHRhZ2U6IDUsXHJcbi8vIFx0aGFzVGFpbDogdHJ1ZVxyXG4vLyB9XHJcbi8vIGNvbnNvbGUubG9nKGFuaW1hbCk7XHJcbi8vIGNsYXNzIEFuaW1hbCB7XHJcblxyXG4vLyBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuLy8gXHRcdHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZVxyXG4vLyBcdFx0dGhpcy5hZ2UgPSBvcHRpb25zLmFnZVxyXG4vLyBcdFx0dGhpcy5oYXNUYWlsID0gb3B0aW9ucy5oYXNUYWlsXHJcbi8vIFx0fVxyXG5cclxuLy8gXHR2b2ljZSgpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKCdJIGFtIEFuaW1hbCEnKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIC8vIGNvbnN0IGFuaW1hbCA9IG5ldyBBbmltYWwoe1xyXG4vLyAvLyBcdG5hbWU6ICdhbmltYWwnLFxyXG4vLyAvLyBcdGFnZTogNSxcclxuLy8gLy8gXHRoYXNUYWlsOiB0cnVlXHJcbi8vIC8vIH0pXHJcbi8vIC8vIGNvbnNvbGUubG9nKGFuaW1hbCk7XHJcbi8vIC8vIGFuaW1hbC52b2ljZSgpO1xyXG5cclxuLy8gY2xhc3MgQ2F0IGV4dGVuZHMgQW5pbWFsIHtcclxuLy8gXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbi8vIFx0XHRzdXBlcihvcHRpb25zKVxyXG4vLyBcdFx0dGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3JcclxuLy8gXHR9XHJcblxyXG4vLyBcdHZvaWNlKCkge1xyXG4vLyBcdFx0c3VwZXIudm9pY2UoKVxyXG4vLyBcdFx0Y29uc29sZS5sb2coYEkgYW0gJHt0aGlzLm5hbWV9YCk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRnZXQgYWdlSW5mbygpIHtcclxuLy8gXHRcdHJldHVybiB0aGlzLmFnZSAqIDc7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRzZXQgYWdlSW5mbyhuZXdBZ2UpIHtcclxuLy8gXHRcdHRoaXMuYWdlID0gbmV3QWdlO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2F0ID0gbmV3IENhdCh7XHJcbi8vIFx0bmFtZTogJ0NhdCcsXHJcbi8vIFx0YWdlOiA3LFxyXG4vLyBcdGhhc1RhaWw6IHRydWUsXHJcbi8vIFx0Y29sb3I6ICdibGFjaydcclxuLy8gfSk7XHJcbi8vIGNvbnNvbGUubG9nKGNhdCk7XHJcbi8vIGNhdC52b2ljZSgpO1xyXG4vLyBjb25zb2xlLmxvZyhjYXQuYWdlSW5mbyk7XHJcbi8vIGNhdC5hZ2VJbmZvID0gMTI7XHJcbi8vIGNvbnNvbGUubG9nKGNhdC5hZ2VJbmZvKTtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGNvbnN0IHBlcnNvbiA9IE9iamVjdC5jcmVhdGUoXHJcbi8vIFx0e1xyXG4vLyBcdFx0Y2FsY3VsYXRlQWdlKCkge1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZygnQWdlJywgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gdGhpcy5iaXJ0aFllYXIpO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0sIHtcclxuLy8gXHRuYW1lOiB7XHJcbi8vIFx0XHR2YWx1ZTogJ1ZpdGFsaWknLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuLy8gXHRcdHdyaXRhYmxlOiB0cnVlLFxyXG4vLyBcdFx0Y29uZmlndXJhYmxlOiB0cnVlXHJcbi8vIFx0fSxcclxuLy8gXHRiaXJ0aFllYXI6IHtcclxuLy8gXHRcdHZhbHVlOiAxOTkzLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogZmFsc2UsXHJcbi8vIFx0XHR3cml0YWJsZTogZmFsc2UsXHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlXHJcbi8vIFx0fSxcclxuLy8gXHRhZ2U6IHtcclxuLy8gXHRcdGdldCgpIHtcclxuLy8gXHRcdFx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIHRoaXMuYmlydGhZZWFyXHJcbi8vIFx0XHR9LFxyXG4vLyBcdFx0c2V0KHZhbHVlKSB7XHJcbi8vIFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZygnU2V0IGFnZScsIHZhbHVlKTtcclxuLy8gXHRcdH1cclxuLy8gXHR9XHJcbi8vIH0pXHJcblxyXG4vLyBjb25zb2xlLmxvZyhwZXJzb24pO1xyXG4vLyBwZXJzb24uY2FsY3VsYXRlQWdlKCk7XHJcblxyXG4vLyBjb25zdCBwZXJzb24gPSB7XHJcbi8vIFx0bmFtZTogJ1ZpdGFsaWknLFxyXG4vLyBcdGJpcnRoWWVhcjogMTk5M1xyXG4vLyB9XHJcbi8vIHBlcnNvbi5uYW1lID0gJ01heGltJ1xyXG4vLyBkZWxldGUgcGVyc29uLm5hbWU7XHJcbi8vIGNvbnNvbGUubG9nKHBlcnNvbik7XHJcbi8vIGNvbnNvbGUubG9nKHBlcnNvbi5hZ2UpO1xyXG4vLyBwZXJzb24uYWdlID0gMjk7XHJcbi8vIGZvciAobGV0IGtleSBpbiBwZXJzb24pIHtcclxuLy8gXHRpZiAocGVyc29uLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGtleSwgcGVyc29uW2tleV0pO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGNvbnNvbGUubG9nKCdSZXF1ZXN0IGRhdGEuLi4nKVxyXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZygnUHJlcGFyaW5nIGRhdGEuLi4nKTtcclxuLy8gXHRjb25zdCBiYWNrZW5kRGF0YSA9IHtcclxuLy8gXHRcdHNlcnZlcjogJ2F3cycsXHJcbi8vIFx0XHRwb3J0OiAyMDAwLFxyXG4vLyBcdFx0c3RhdHVzOiAnd29ya2luZydcclxuLy8gXHR9XHJcbi8vIFx0c2V0VGltZW91dCgoKSA9PiB7XHJcbi8vIFx0XHRiYWNrZW5kRGF0YS5tb2RpZmllZCA9IHRydWU7XHJcbi8vIFx0XHRjb25zb2xlLmxvZygnRGF0YSByZWNlaXZlZCcsIGJhY2tlbmREYXRhKVxyXG4vLyBcdH0sIDIwMDApO1xyXG4vLyB9LCAyMDAwKVxyXG5cclxuLy8gY29uc3QgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4vLyBcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyBcdFx0Y29uc29sZS5sb2coJ1ByZXBhcmluZyBkYXRhLi4uJyk7XHJcbi8vIFx0XHRjb25zdCBiYWNrZW5kRGF0YSA9IHtcclxuLy8gXHRcdFx0c2VydmVyOiAnYXdzJyxcclxuLy8gXHRcdFx0cG9ydDogMjAwMCxcclxuLy8gXHRcdFx0c3RhdHVzOiAnd29ya2luZydcclxuLy8gXHRcdH1cclxuLy8gXHRcdHJlc29sdmUoYmFja2VuZERhdGEpO1xyXG4vLyBcdH0sIDIwMDApO1xyXG4vLyB9KVxyXG5cclxuLy8gcC50aGVuKChkYXRhKSA9PiB7XHJcbi8vIFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyBcdFx0XHRkYXRhLm1vZGlmaWVkID0gdHJ1ZTtcclxuLy8gXHRcdFx0cmVzb2x2ZShkYXRhKTtcclxuLy8gXHRcdH0sIDIwMDApO1xyXG4vLyBcdH0pXHJcbi8vIH0pXHJcbi8vIC50aGVuKChjbGllbnREYXRhID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZygnRGF0YSByZWNlaXZlZCcsIGNsaWVudERhdGEpO1xyXG5cclxuLy8gXHRjbGllbnREYXRhLmZyb21Qcm9taXNlID0gdHJ1ZTtcclxuLy8gXHRyZXR1cm4gY2xpZW50RGF0YTtcclxuLy8gfSkpXHJcbi8vIC50aGVuKGRhdGEgPT4ge1xyXG4vLyBcdGNvbnNvbGUubG9nKCdNb2RpZmllZCcsIGRhdGEpO1xyXG4vLyB9KVxyXG4vLyAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKVxyXG4vLyAuZmluYWxseSgoKSA9PiBjb25zb2xlLmxvZygnRmluYWxseScpKVxyXG5cclxuLy8gY29uc3Qgc2xlZXAgPSBtcyA9PiB7XHJcbi8vIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuLy8gIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCBtcylcclxuLy8gfSk7XHJcbi8vIH1cclxuXHJcbi8vIHNsZWVwKDIwMDApLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0FmdGVyIDIgc2Vjb25kcycpKTtcclxuLy8gc2xlZXAoMzAwMCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnQWZ0ZXIgMyBzZWNvbmRzJykpO1xyXG5cclxuLy8gUHJvbWlzZS5hbGwoW3NsZWVwKDIwMDApLCBzbGVlcCg1MDAwKV0pXHJcbi8vIC50aGVuKCgpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZygnQWxsIHByb21pc2VzJylcclxuLy8gfSlcclxuXHJcbi8vIFByb21pc2UucmFjZShbc2xlZXAoMjAwMCksIHNsZWVwKDUwMDApXSlcclxuLy8gLnRoZW4oKCkgPT4ge1xyXG4vLyBcdGNvbnNvbGUubG9nKCdSYWNlIHByb21pc2VzJylcclxuLy8gfSlcclxuXHJcbi8vIGZldGNoKCdodHRwOi8vZ2V0YmdoZi5waHAnKVxyXG4vLyAudGhlbihkYXRhID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gXHQvLyBkYXRhLnRleHQoKS50aGVuKGRhdGEyID0+IHtcclxuLy8gXHQvLyBcdGNvbnNvbGUubG9nKGRhdGEyKTtcclxuLy8gXHQvLyB9KVxyXG4vLyBcdHJldHVybiBkYXRhLnRleHQoKTtcclxuLy8gfSlcclxuLy8gLnRoZW4gKGRhdGEgPT4ge1xyXG4vLyBcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyB9KVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vWE1MSHR0cFJlcXVlc3RzXHJcbi8vIGxldCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuLy8geGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbi8vIFx0aWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4vLyBcdFx0bXlGdW5jdGlvbih0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyB4aHR0cC5vcGVuKCdHRVQnLCAnaHR0cDovL2dldGJnaGYnLCB0cnVlKTtcclxuLy8geGh0dHAuc2VuZCgpO1xyXG5cclxuLy8gZnVuY3Rpb24gbXlGdW5jdGlvbihkYXRhKSB7XHJcbi8vIFx0Y29uc29sZS5sb2coZGF0YSk7XHJcbi8vIH1cclxuXHJcbi8vIGxldCB4aHR0cDIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuLy8geGh0dHAyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4vLyBcdGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcclxuLy8gXHRcdG15RnVuY3Rpb24yKHRoaXMucmVzcG9uc2VUZXh0KTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIHhodHRwMi5vcGVuKCdQT1NUJywgJ2h0dHA6Ly9nZXRiZ2hmJywgdHJ1ZSk7XHJcbi8vIHhodHRwMi5zZXRSZXF1ZXN0SGVhZGVyKCdjb250ZW50LXR5cGUnLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuLy8geGh0dHAyLnNlbmQoJ2F1dGg9XCJzZGZzZGYmZGZnPWZnZGZnZicpO1xyXG5cclxuLy8gZnVuY3Rpb24gbXlGdW5jdGlvbjIoZGF0YSkge1xyXG4vLyBcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyB9XHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuLy8gbGV0IGEgPSA3O1xyXG5cclxuXHJcbi8vIGNvbnNvbGUubG9nKGEpO1xyXG5cclxuLy8gbGV0IGIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuLy8gXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gXHRcdHJlc29sdmUoYSA9IDk5KTtcclxuLy8gXHR9LCAyMDAwKTtcclxuLy8gfSk7XHJcbi8vIGIudGhlbihmdW5jdGlvbigpIHtcclxuLy8gXHRjb25zb2xlLmxvZyhhKTtcclxuLy8gfSlcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gY29uc3Qgc2xlZXAgPSBtcyA9PiB7XHJcbi8vIFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4vLyBcdFx0c2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIG1zKVxyXG4vLyBcdH0pXHJcbi8vIH1cclxuXHJcbi8vIC8vIHNsZWVwKDIwMDApLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0FmdGVyIDIgc2Vjb25kcycpKTtcclxuLy8gLy8gc2xlZXAoMzAwMCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnQWZ0ZXIgMyBzZWNvbmRzJykpO1xyXG5cclxuLy8gUHJvbWlzZS5hbGwoW3NsZWVwKDIwMDApLCBzbGVlcCg1MDAwKV0pXHJcbi8vIC50aGVuKCgpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZygnQWxsIHByb21pc2VzJyk7XHJcbi8vIH0pXHJcblxyXG4vLyBQcm9taXNlLnJhY2UoW3NsZWVwKDIwMDApLCBzbGVlcCg1MDAwKV0pXHJcbi8vIC50aGVuKCgpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZygnUmFjZSBwcm9taXNlcycpO1xyXG4vLyB9KVxyXG4vLyBjb25zb2xlLmxvZygnUmVxdWVzdCBkYXRhLi4uJyk7XHJcblxyXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZygnUHJlcGFyaW5nIGRhdGEnKTtcclxuXHJcbi8vIFx0Y29uc3QgYmFja2VuZERhdGEgPSB7XHJcbi8vIFx0XHRzZXJ2ZXI6ICdhdnMnLFxyXG4vLyBcdFx0cG9ydDogMjAwMCxcclxuLy8gXHRcdHN0YXR1czogJ3dvcmtpbmcnXHJcbi8vIFx0fVxyXG5cclxuLy8gXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gXHRcdGJhY2tlbmREYXRhLm1vZGlmaWVkID0gdHJ1ZTtcclxuLy8gXHRcdGNvbnNvbGUubG9nKCdEYXRhIHJlY2VpdmVkJywgYmFja2VuZERhdGEpO1xyXG4vLyBcdH0sIDIwMDApO1xyXG4vLyB9LCAyMDAwKTtcclxuXHJcbi8vIGNvbnN0IHAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuLy8gXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKCdQcmVwYXJpbmcgZGF0YScpO1xyXG4vLyBcdFx0Y29uc3QgYmFja2VuZERhdGEgPSB7XHJcbi8vIFx0XHRcdHNlcnZlcjogJ2F2cycsXHJcbi8vIFx0XHRcdHBvcnQ6IDIwMDAsXHJcbi8vIFx0XHRcdHN0YXR1czogJ3dvcmtpbmcnXHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXNvbHZlKGJhY2tlbmREYXRhKTtcclxuLy8gXHR9LCAyMDAwKTtcclxuLy8gfSk7XHJcbi8vIHAudGhlbigoZGF0YSkgPT4ge1xyXG4vLyBcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbi8vIFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gXHRcdFx0ZGF0YS5tb2RpZmllZCA9IHRydWU7XHJcbi8vIFx0XHRcdHJlamVjdChkYXRhKTtcclxuLy8gXHRcdH0sIDIwMDApO1xyXG4vLyBcdH0pXHJcblxyXG4vLyB9KVxyXG4vLyAudGhlbihjbGllbnREYXRhID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZygnRGF0YSByZWNlaXZlZCcsIGNsaWVudERhdGEpO1xyXG4vLyBcdGNsaWVudERhdGEuZnJvbVByb21pc2UgPSB0cnVlO1xyXG4vLyBcdHJldHVybiBjbGllbnREYXRhO1xyXG4vLyB9KVxyXG4vLyAudGhlbihkYXRhID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZygnTW9kaWZpZWQnLCBkYXRhKTtcclxuLy8gfSlcclxuLy8gLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciwgZXJyJykpXHJcbi8vIC5maW5hbGx5KCgpID0+IGNvbnNvbGUubG9nKCdGaW5hbGx5JykpXHJcbi8vIGNvbnNvbGUubG9nKCdSZXF1ZXN0IGRhdGEuLi4nKTtcclxuLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vIFx0Y29uc29sZS5sb2coJ1ByZXBhcmluZyBkYXRhLi4uLicpO1xyXG4vLyBcdGNvbnN0IGJhY2tlbmREYXRhID0ge1xyXG4vLyBcdFx0c2VydmVyOiAnYXZzJyxcclxuLy8gXHRcdHBvcnQ6IDIwMDAsXHJcbi8vIFx0XHRzdGF0dXM6ICd3b3JraW5nJ1xyXG4vLyBcdH1cclxuLy8gXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gXHRcdGJhY2tlbmREYXRhLm1vZGlmaWVkID0gdHJ1ZTtcclxuLy8gXHRcdGNvbnNvbGUubG9nKCdEYXRhIHJlY2VpdmVkJywgYmFja2VuZERhdGEpXHJcbi8vIFx0fSwgMjAwMCk7XHJcbi8vIH0sIDIwMDApO1xyXG4vLyBjb25zdCBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4vLyB9KVxyXG4vLyDQkNGB0LjQvdGF0YDQvtC90L3QvtGB0YLRjFxyXG4vLyBjb25zb2xlLmxvZygnc3RhcnQnKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdzdGFydDInKTtcclxuXHJcbi8vIGZ1bmN0aW9uIHRpbWVvdXQyc2VjKCkge1xyXG4vLyBcdGNvbnNvbGUubG9nKCd0aW1lb3V0MnNlYycpO1xyXG4vLyB9XHJcblxyXG4vLyB3aW5kb3cuc2V0VGltZW91dCh0aW1lb3V0MnNlYywgMjAwMCk7XHJcblxyXG4vLyB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuLy8gXHRjb25zb2xlLmxvZygnSW5zaWRlIHRpbWVvdXQsIGFmdGVyIDUgc2Vjb25kcycpO1xyXG4vLyB9LCA1MDAwKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdlbmQnKTtcclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gZnVuY3Rpb24gY3JlYXRlQ2FsY0Z1bmN0aW9uKG4pIHtcclxuLy8gXHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZygxMDAwICogbik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbi8vIGNvbnN0IHBlcnNvbiA9IHtcclxuLy8gXHRuYW1lOiAnVml0YWxpaSdcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gaW5mbyhwaG9uZSwgZW1haWwpIHtcclxuLy8gXHRjb25zb2xlLmxvZyhgTmFtZTogJHt0aGlzLm5hbWV9LCB0ZWw6ICR7cGhvbmV9LCBlbWFpbDogJHtlbWFpbH1gKTtcclxuLy8gfVxyXG5cclxuLy8vRGVtb1xyXG4vLyBpbmZvLmJpbmQocGVyc29uKSgnMTIzMTIzJywgJ3ZAbWFpbC5ydScpO1xyXG4vLyBpbmZvLmJpbmQocGVyc29uLCAnMTIzMTIzJykoJ3ZAbWFpbC5ydScpO1xyXG4vLyBpbmZvLmJpbmQocGVyc29uLCAnMTIzMTIzJywgJ3ZAbWFpbC5ydScpKCk7XHJcblxyXG4vLyBFYXN5XHJcbi8vIGZ1bmN0aW9uIGJpbmQoZm4sIGNvbnRleHQsIC4uLnJlc3QpIHtcclxuLy8gXHRyZXR1cm4gZm4uYmluZChjb250ZXh0LCAuLi5yZXN0KTtcclxuLy8gfVxyXG4vLyAyIFdpdGhvdXQgaW5saW5lIG1ldGhvZHNcclxuLy8gZnVuY3Rpb24gYmluZChmbiwgY29udGV4dCwgLi4ucmVzdCkge1xyXG4vLyBcdHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XHJcbi8vIFx0XHRjb25zdCB1bmlxSWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbi8vIFx0XHRjb250ZXh0W3VuaXFJZF0gPSBmbjtcclxuLy8gXHRcdGNvbnN0IHJlc3VsdCA9IGNvbnRleHRbdW5pcUlkXSguLi5yZXN0LmNvbmNhdChhcmdzKSk7XHJcblxyXG4vLyBcdFx0ZGVsZXRlIGNvbnRleHRbdW5pcUlkXTtcclxuLy8gXHRcdHJldHVybiByZXN1bHQ7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbi8vLy8gMyBFUyA1XHJcbi8vIGZ1bmN0aW9uIGJpbmQoZm4sIGNvbnRleHQpIHtcclxuLy8gXHRjb25zdCByZXN0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcclxuLy8gXHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcbi8vIFx0XHRjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuLy8gXHRcdHJldHVybiBmbi5hcHBseShjb250ZXh0LCByZXN0LmNvbmNhdChhcmdzKSk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLy8vLy8vIEVTIDZcclxuLy8gZnVuY3Rpb24gYmluZChmbiwgY29udGV4dCwgLi4ucmVzdCkge1xyXG4vLyBcdHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XHJcbi8vIFx0XHQvLyByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgcmVzdC5jb25jYXQoYXJncykpO1xyXG4vLyBcdFx0cmV0dXJuIGZuLmNhbGwoY29udGV4dCwgLi4ucmVzdC5jb25jYXQoYXJncykpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gYmluZChpbmZvLCBwZXJzb24pKCcxMjMxMjMnLCAndkBtYWlsLnJ1Jyk7XHJcbi8vIGJpbmQoaW5mbywgcGVyc29uLCAnMTIzMTIzJykoICd2QG1haWwucnUnKTtcclxuLy8gYmluZChpbmZvLCBwZXJzb24sICcxMjMxMjMnLCAndkBtYWlsLnJ1JykoKTtcclxuLy8gY29uc29sZS5sb2cocGVyc29uKTtcclxuLy8vQ0FMTFxyXG4vLyBmdW5jdGlvbiBjYWxsKGZuLCBjb250ZXh0LCAuLi5hcmdzKSB7XHJcbi8vIFx0Y29uc3QgdW5pcUlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4vLyBcdGNvbnRleHRbdW5pcUlkXSA9IGZuO1xyXG4vLyBcdGNvbnN0IHJlc3VsdCA9IGNvbnRleHRbdW5pcUlkXSguLi5hcmdzKTtcclxuLy8gXHRkZWxldGUgY29udGV4dFt1bmlxSWRdO1xyXG4vLyBcdHJldHVybiByZXN1bHQ7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBjYWxsKGluZm8sIHBlcnNvbiwgJzEyMzQnLCAnY2FsbEBkZmcnKTtcclxuLy9BcHBseVxyXG4vLyBmdW5jdGlvbiBhcHBseShmbiwgY29udGV4dCwgYXJyYXkpIHtcclxuLy8gXHRjb25zdCB1bmlxSWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbi8vIFx0Y29udGV4dFt1bmlxSWRdID0gZm47XHJcbi8vIFx0Y29uc3QgcmVzdWx0ID0gY29udGV4dFt1bmlxSWRdKC4uLmFycmF5KTtcclxuLy8gXHRkZWxldGUgY29udGV4dFt1bmlxSWRdO1xyXG4vLyBcdHJldHVybiByZXN1bHQ7XHJcblxyXG4vLyB9XHJcbi8vIGFwcGx5KGluZm8sIHBlcnNvbiwgWycxMjMxMjMnLCAnd2VmZWZAZmcnXSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gY29uc3QgY2FsYyA9IGNyZWF0ZUNhbGNGdW5jdGlvbig0Mik7XHJcbi8vIGNhbGMoKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZUluY3JlbWVudG9yKG4pIHtcclxuLy8gXHRyZXR1cm4gZnVuY3Rpb24obnVtKSB7XHJcbi8vIFx0XHRyZXR1cm4gbiArIG51bTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGFkZE9uZSA9IGNyZWF0ZUluY3JlbWVudG9yKDEpO1xyXG4vLyBjb25zdCBhZGRUZW4gPSBjcmVhdGVJbmNyZW1lbnRvcigxMCk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhhZGRPbmUoMTApKTtcclxuLy8gY29uc29sZS5sb2coYWRkT25lKDQyKSk7XHJcbi8vIGNvbnNvbGUubG9nKGFkZFRlbig0MikpO1xyXG5cclxuLy8gZnVuY3Rpb24gdXJsR2VuZXJhdG9yKGRvbWFpbikge1xyXG4vLyBcdHJldHVybiBmdW5jdGlvbih1cmwpIHtcclxuLy8gXHRcdHJldHVybiBgaHR0cHM6Ly8ke3VybH0uJHtkb21haW59YDtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGNvbVVybCA9IHVybEdlbmVyYXRvcignY29tJyk7XHJcbi8vIGNvbnN0IHJ1VXJsID0gdXJsR2VuZXJhdG9yKCdydScpO1xyXG4vLyBjb25zb2xlLmxvZyhjb21VcmwoJ3BldHlhJykpO1xyXG4vLyBjb25zb2xlLmxvZyhydVVybCgncGV0eWEnKSk7XHJcblxyXG4vLyBmdW5jdGlvbiBiaW5kKGNvbnRleHQsIGZuKSB7XHJcbi8vIFx0cmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuLy8gXHRcdGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gY29uc3QgcGVyc29uID0ge1xyXG4vLyBcdG5hbWU6ICdWaXRhbGlpJ1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBpbmZvKHBob25lLCBlbWFpbCkge1xyXG4vLyBcdGNvbnNvbGUubG9nKGDQmNC80Y86ICR7dGhpcy5uYW1lfSwg0YLQtdC7OiAke3Bob25lfSwgRS1tYWlsOiAke2VtYWlsfWApO1xyXG4vLyB9XHJcblxyXG4vLyAxINCf0YDQvtGB0YLQvtC5XHJcbi8vIGZ1bmN0aW9uIGJpbmQoZm4sIGNvbnRleHQsIC4uLnJlc3QpIHtcclxuLy8gXHRyZXR1cm4gZm4uYmluZChjb250ZXh0LCAuLi5yZXN0KTtcclxuLy8gfVxyXG5cclxuLy8yIHdpdGhvdXQgaW5saW5lIG1ldGhvZHNcclxuLy8gZnVuY3Rpb24gYmluZChmbiwgY29udGV4dCwgLi4ucmVzdCkge1xyXG4vLyBcdHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XHJcbi8vIFx0XHRjb25zdCB1bmlxSWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbi8vIFx0XHRjb250ZXh0W3VuaXFJZF0gPSBmbjtcclxuLy8gXHRcdGNvbnN0IHJlc3VsdCA9IGNvbnRleHRbdW5pcUlkXSguLi5yZXN0LmNvbmNhdChhcmdzKSk7XHJcbi8vIFx0XHRkZWxldGUgY29udGV4dFt1bmlxSWRdO1xyXG4vLyBcdFx0cmV0dXJuIHJlc3VsdDtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vMyBFUyA1XHJcbi8vIGZ1bmN0aW9uIGJpbmQoZm4sIGNvbnRleHQpIHtcclxuLy8gXHRjb25zdCByZXN0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBhcmdBcnJheSAyKTtcclxuLy8gXHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcbi8vIFx0XHRyZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuLy8gYmluZChpbmZvLCBwZXJzb24pKCcxMjIzNDUnLCAndkBtYWlsLnJ1Jyk7XHJcbi8vIGJpbmQoaW5mbywgcGVyc29uLCAnMTIyMzQ1JykoJ3ZAbWFpbC5ydScpO1xyXG4vLyBiaW5kKGluZm8sIHBlcnNvbiwgJzEyMjM0NScsJ3ZAbWFpbC5ydScpKCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBpbmZvLmJpbmQocGVyc29uKSgnMTIyMzQ1JywgJ3ZAbWFpbC5ydScpO1xyXG4vLyBpbmZvLmJpbmQocGVyc29uLCAnMTIxMjMyJykoJ3ZAbWFpbC5ydScpO1xyXG4vLyBpbmZvLmJpbmQocGVyc29uLCAnMTIxMjMyJywgJ3ZAbWFpbC5ydScpKCk7XHJcbi8vIGZ1bmN0aW9uIGhlbGxvKCkge1xyXG4vLyBcdGNvbnNvbGUubG9nKCdIZWxsbycsIHRoaXMpO1xyXG4vLyB9XHJcbi8vIGhlbGxvKCk7XHJcblxyXG4vLyBjb25zdCBwZXJzb24gPSB7XHJcbi8vIFx0bmFtZTogJ1ZpdGFsaWknLFxyXG4vLyBcdGFnZTogMjYsXHJcbi8vIFx0c2F5SGVsbG86IGhlbGxvLFxyXG4vLyBcdHNheUhlbGxvV2luZG93OiBoZWxsby5iaW5kKHdpbmRvdyksXHJcbi8vIFx0bG9nSW5mbzogZnVuY3Rpb24oam9iLCBwaG9uZSkge1xyXG4vLyBcdFx0Y29uc29sZS5ncm91cChgJHt0aGlzLm5hbWV9IGluZm86IGApXHJcbi8vIFx0XHRjb25zb2xlLmxvZyhgTmFtZSBpcyAke3RoaXMubmFtZX0gYW5kIGFnZSBpcyAke3RoaXMuYWdlfWApO1xyXG4vLyBcdFx0Y29uc29sZS5sb2coYEpvYiBpcyAke2pvYn1gKTtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGBQaG9uZSBpcyAke3Bob25lfWApO1xyXG4vLyBcdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgbGVuYSA9IHtcclxuLy8gXHRuYW1lOiAnRWxlbmEnLFxyXG4vLyBcdGFnZTogMjNcclxuLy8gfVxyXG5cclxuLy8gLy8gcGVyc29uLmxvZ0luZm8uYmluZChsZW5hLCAnRnJvbnRlbmQnLCAnODk5MDMyOTQnKSgpO1xyXG5cclxuLy8gLy8gcGVyc29uLmxvZ0luZm8uY2FsbChsZW5hLCAnRnJvbnRlbmQnLCAnODk5MDMyOTQnKTtcclxuLy8gcGVyc29uLmxvZ0luZm8uYXBwbHkobGVuYSwgWydGcm9udGVuZCcsICc4OTkwMzI5NCddKTtcclxuXHJcbi8vIC8vPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGNvbnN0IGFycmF5ID0gWzEsIDIsIDMsIDQsIDVdO1xyXG4vLyAvLyBmdW5jdGlvbiBtdWx0QnkoYXJyLCBuKSB7XHJcbi8vIC8vIFx0cmV0dXJuIGFyci5tYXAoZnVuY3Rpb24oaSkge1xyXG4vLyAvLyBcdFx0cmV0dXJuIGkgKiBuO1xyXG4vLyAvLyBcdH0pO1xyXG4vLyAvLyB9XHJcblxyXG4vLyBBcnJheS5wcm90b3R5cGUubXVsdEJ5ID0gZnVuY3Rpb24obikge1xyXG4vLyBcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbihpKSB7XHJcbi8vIFx0XHRyZXR1cm4gaSAqIG47XHJcbi8vIFx0fSk7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKGFycmF5Lm11bHRCeSgyKSk7XHJcbi8vIGNvbnN0IGFycjIgPSBbNSwgMTAsIDE1XTtcclxuLy8gY29uc29sZS5sb2coYXJyMi5tdWx0QnkoMykpOyJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k5cWMxOTBaWE4wTDNOeVl5OXFjeTloY0hBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3p0QlEwRkJMRWxCUVUwc1ZVRkJWU3hIUVVGSExEUkRRVUZ1UWl4RExFTkJRMEU3TzBGQlEwRXNVMEZCVXl4WFFVRlVMRU5CUVhGQ0xFMUJRWEpDTEVWQlFUWkNMRWRCUVRkQ0xFVkJRU3RETzBGQlFVRXNUVUZCWWl4SlFVRmhMSFZGUVVGT0xFbEJRVTA3UVVGRE9VTXNUVUZCVFN4UFFVRlBMRWRCUVVjN1FVRkRaaXh2UWtGQlowSTdRVUZFUkN4SFFVRm9RanRCUVVkQkxGTkJRVThzUzBGQlN5eERRVUZETEVkQlFVUXNSVUZCVFR0QlFVTnFRaXhKUVVGQkxFMUJRVTBzUlVGQlJTeE5RVVJUTzBGQlJXcENMRWxCUVVFc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZNTEVOQlFXVXNTVUZCWml4RFFVWlhPMEZCUjJwQ0xFbEJRVUVzVDBGQlR5eEZRVUZGTzBGQlNGRXNSMEZCVGl4RFFVRk1MRU5CU1Vvc1NVRktTU3hEUVVsRExGVkJRVUVzVVVGQlVTeEZRVUZKTzBGQlEyNUNMRkZCUVVrc1VVRkJVU3hEUVVGRExFVkJRV0lzUlVGQmFVSTdRVUZEYUVJc1lVRkJUeXhSUVVGUkxFTkJRVU1zU1VGQlZDeEZRVUZRTzBGQlEwRTdPMEZCUTBRc1YwRkJUeXhSUVVGUkxFTkJRVU1zU1VGQlZDeEhRVUZuUWl4SlFVRm9RaXhEUVVGeFFpeFZRVUZCTEV0QlFVc3NSVUZCU1R0QlFVTndReXhWUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEV0QlFVb3NRMEZCVlN4UlFVRldMRU5CUVZZN1FVRkRRU3hOUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZHTEVkQlFWTXNTMEZCVkR0QlFVTkJMRmxCUVUwc1EwRkJUanRCUVVOQkxFdEJTazBzUTBGQlVEdEJRVXRCTEVkQllrMHNRMEZCVUR0QlFXTkJMRU1zUTBGRlJEdEJRVU5CTzBGQlEwRTdPenRCUVVWQkxFbEJRVTBzU1VGQlNTeEhRVUZITzBGQlExb3NSVUZCUVN4SlFVRkpMRVZCUVVVc1ZVRkVUVHRCUVVWYUxFVkJRVUVzUjBGQlJ5eEZRVUZGTzBGQlJrOHNRMEZCWWp0QlFVdEJMRmRCUVZjc1EwRkJReXhOUVVGRUxFVkJRVk1zVlVGQlZDeEZRVUZ4UWl4SlFVRnlRaXhEUVVGWUxFTkJRME1zU1VGRVJDeERRVU5OTEZWQlFVRXNTVUZCU1R0QlFVRkJMRk5CUVVrc1QwRkJUeXhEUVVGRExFZEJRVklzUTBGQldTeEpRVUZhTEVOQlFVbzdRVUZCUVN4RFFVUldMRmRCUlU4c1ZVRkJRU3hIUVVGSE8wRkJRVUVzVTBGQlNTeFBRVUZQTEVOQlFVTXNSMEZCVWl4RFFVRlpMRWRCUVZvc1EwRkJTanRCUVVGQkxFTkJSbFlzUlN4RFFVbEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGSFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVVZCTzBGQlEwRTdRVUZGUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpZ3BlMloxYm1OMGFXOXVJSElvWlN4dUxIUXBlMloxYm1OMGFXOXVJRzhvYVN4bUtYdHBaaWdoYmx0cFhTbDdhV1lvSVdWYmFWMHBlM1poY2lCalBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVTdhV1lvSVdZbUptTXBjbVYwZFhKdUlHTW9hU3doTUNrN2FXWW9kU2x5WlhSMWNtNGdkU2hwTENFd0tUdDJZWElnWVQxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzJrclhDSW5YQ0lwTzNSb2NtOTNJR0V1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhoZlhaaGNpQndQVzViYVYwOWUyVjRjRzl5ZEhNNmUzMTlPMlZiYVYxYk1GMHVZMkZzYkNod0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b2NpbDdkbUZ5SUc0OVpWdHBYVnN4WFZ0eVhUdHlaWFIxY200Z2J5aHVmSHh5S1gwc2NDeHdMbVY0Y0c5eWRITXNjaXhsTEc0c2RDbDljbVYwZFhKdUlHNWJhVjB1Wlhod2IzSjBjMzFtYjNJb2RtRnlJSFU5WENKbWRXNWpkR2x2Ymx3aVBUMTBlWEJsYjJZZ2NtVnhkV2x5WlNZbWNtVnhkV2x5WlN4cFBUQTdhVHgwTG14bGJtZDBhRHRwS3lzcGJ5aDBXMmxkS1R0eVpYUjFjbTRnYjMxeVpYUjFjbTRnY24wcEtDa2lMQ0pqYjI1emRDQnlaWEYxWlhOMFZYSnNJRDBnSjJoMGRIQnpPaTh2YW5OdmJuQnNZV05sYUc5c1pHVnlMblI1Y0dsamIyUmxMbU52YlM5MWMyVnljeWM3WEhKY2JpOHZabVYwWTJndkx5OWNjbHh1Wm5WdVkzUnBiMjRnYzJWdVpGSmxjWFZsYzNRb2JXVjBhRzlrTENCMWNtd3NJR0p2WkhrZ1BTQnVkV3hzS1NCN1hISmNibHgwWTI5dWMzUWdhR1ZoWkdWeWN5QTlJSHRjY2x4dVhIUmNkQ2REYjI1MFpXNTBMVlI1Y0dVbk9pQW5ZWEJ3YkdsallYUnBiMjR2YW5OdmJpZGNjbHh1WEhSOVhISmNibHgwY21WMGRYSnVJR1psZEdOb0tIVnliQ3dnZTF4eVhHNWNkRngwYldWMGFHOWtPaUJ0WlhSb2IyUXNYSEpjYmx4MFhIUmliMlI1T2lCS1UwOU9Mbk4wY21sdVoybG1lU2hpYjJSNUtTeGNjbHh1WEhSY2RHaGxZV1JsY25NNklHaGxZV1JsY25OY2NseHVYSFI5S1M1MGFHVnVLSEpsYzNCdmJuTmxJRDArSUh0Y2NseHVYSFJjZEdsbUlDaHlaWE53YjI1elpTNXZheWtnZTF4eVhHNWNkRngwWEhSeVpYUjFjbTRnY21WemNHOXVjMlV1YW5OdmJpZ3BPMXh5WEc1Y2RGeDBmVnh5WEc1Y2RGeDBjbVYwZFhKdUlISmxjM0J2Ym5ObExtcHpiMjRvS1M1MGFHVnVLR1Z5Y205eUlEMCtJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdaU0E5SUc1bGR5QkZjbkp2Y2lnblUyaHBkQ0VoSnlrN1hISmNibHgwWEhSY2RHVXVaR0YwWVNBOUlHVnljbTl5TzF4eVhHNWNkRngwWEhSMGFISnZkeUJsTzF4eVhHNWNkRngwZlNsY2NseHVYSFI5S1Z4eVhHNTlYSEpjYmx4eVhHNHZMeUJ6Wlc1a1VtVnhkV1Z6ZENnblIwVlVKeXdnY21WeGRXVnpkRlZ5YkNsY2NseHVMeThnTG5Sb1pXNG9aR0YwWVNBOVBpQmpiMjV6YjJ4bExteHZaeWhrWVhSaEtTbGNjbHh1THk4Z0xtTmhkR05vS0dWeWNpQTlQaUJqYjI1emIyeGxMbXh2WnlobGNuSnZjaWtwWEhKY2JseHlYRzVqYjI1emRDQmliMlI1SUQwZ2UxeHlYRzVjZEc1aGJXVTZJQ2RXYkdGa2FXeGxiaWNzWEhKY2JseDBZV2RsT2lBbk1qWW5YSEpjYm4wN1hISmNibHh5WEc1elpXNWtVbVZ4ZFdWemRDZ25VRTlUVkNjc0lISmxjWFZsYzNSVmNtd3NJR0p2WkhrcFhISmNiaTUwYUdWdUtHUmhkR0VnUFQ0Z1kyOXVjMjlzWlM1c2IyY29aR0YwWVNrcFhISmNiaTVqWVhSamFDaGxjbklnUFQ0Z1kyOXVjMjlzWlM1c2IyY29aWEp5S1NsY2NseHVYSEpjYmk4dkwxaE5URWgwZEhCU1pYRjFaWE4wY3k4dkx5OHZYSEpjYmk4dklHTnZibk4wSUhob2NpQTlJRzVsZHlCWVRVeElkSFJ3VW1WeGRXVnpkQ2dwWEhKY2JpOHZJSGhvY2k1dmNHVnVLQ2RIUlZRbkxDQnlaWEYxWlhOMFZYSnNLVHRjY2x4dUx5OGdlR2h5TG5KbGMzQnZibk5sVkhsd1pTQTlJQ2RxYzI5dUp6dGNjbHh1THk4Z2VHaHlMbTl1Ykc5aFpDQTlJQ2dwSUQwK0lIdGNjbHh1THk4Z1hIUnBaaUFvZUdoeUxuTjBZWFIxY3lBK1BTQTBNREFwSUh0Y2NseHVMeThnWEhSY2RHTnZibk52YkdVdVpYSnliM0lvZUdoeUxuSmxjM0J2Ym5ObEtUdGNjbHh1THk4Z1hIUjlYSEpjYmk4dklGeDBZMjl1YzI5c1pTNXNiMmNvZUdoeUxuSmxjM0J2Ym5ObEtUdGNjbHh1THk4Z2ZWeHlYRzVjY2x4dUx5OGdlR2h5TG05dVpYSnliM0lnUFNBb0tTQTlQaUI3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb2VHaHlMbkpsYzNCdmJuTmxLVHRjY2x4dUx5OGdmVnh5WEc0dkx5QjRhSEl1YzJWdVpDZ3BYSEpjYmx4eVhHNHZMeUJtZFc1amRHbHZiaUJ6Wlc1a1VtVnhkV1Z6ZENodFpYUm9iMlFzSUhWeWJDd2dZbTlrZVNBOUlHNTFiR3dwSUh0Y2NseHVMeThnWEhSeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ1BUNGdlMXh5WEc0dkx5QmNkRngwWTI5dWMzUWdlR2h5SUQwZ2JtVjNJRmhOVEVoMGRIQlNaWEYxWlhOMEtDbGNjbHh1THk4Z1hIUmNkSGhvY2k1dmNHVnVLRzFsZEdodlpDd2dkWEpzS1R0Y2NseHVMeThnWEhSY2RIaG9jaTV5WlhOd2IyNXpaVlI1Y0dVZ1BTQW5hbk52YmljN1hISmNiaTh2SUZ4MFhIUjRhSEl1YzJWMFVtVnhkV1Z6ZEVobFlXUmxjaWduUTI5dWRHVnVkQzFVZVhCbEp5d2dKMkZ3Y0d4cFkyRjBhVzl1TDJwemIyNG5LVHRjY2x4dUx5OGdYSFJjZEhob2NpNXZibXh2WVdRZ1BTQW9LU0E5UGlCN1hISmNiaTh2SUZ4MFhIUmNkR2xtSUNoNGFISXVjM1JoZEhWeklENDlJRFF3TUNrZ2UxeHlYRzR2THlCY2RGeDBYSFJjZEhKbGFtVmpkQ2g0YUhJdWNtVnpjRzl1YzJVcE8xeHlYRzR2THlCY2RGeDBYSFI5WEhKY2JpOHZJRngwWEhSY2RHTnZibk52YkdVdWJHOW5LSGhvY2k1eVpYTndiMjV6WlNrN1hISmNiaTh2SUZ4MFhIUjlYSEpjYmx4eVhHNHZMeUJjZEZ4MGVHaHlMbTl1WlhKeWIzSWdQU0FvS1NBOVBpQjdYSEpjYmk4dklGeDBYSFJjZEhKbGFtVmpkQ2g0YUhJdWNtVnpjRzl1YzJVcE8xeHlYRzR2THlCY2RGeDBmVnh5WEc0dkx5QmNkRngwZUdoeUxuTmxibVFvU2xOUFRpNXpkSEpwYm1kcFpua29ZbTlrZVNrcFhISmNiaTh2SUZ4MGZTbGNjbHh1WEhSY2NseHVMeThnZlZ4eVhHNWNjbHh1THk4Z0x5OGdjMlZ1WkZKbGNYVmxjM1FvSjBkRlZDY3NJSEpsY1hWbGMzUlZjbXdwWEhKY2JpOHZJQzh2SUM1MGFHVnVLR1JoZEdFZ1BUNGdZMjl1YzI5c1pTNXNiMmNvWkdGMFlTa3BYSEpjYmk4dklDOHZJQzVqWVhSamFDaGxjbklnUFQ0Z1kyOXVjMjlzWlM1c2IyY29aWEp5YjNJcEtWeHlYRzVjY2x4dUx5OGdZMjl1YzNRZ1ltOWtlU0E5SUh0Y2NseHVMeThnWEhSdVlXMWxPaUFuVm14aFpHbHNaVzRuTEZ4eVhHNHZMeUJjZEdGblpUb2dKekkySjF4eVhHNHZMeUI5TzF4eVhHNHZMeUJ6Wlc1a1VtVnhkV1Z6ZENnblVFOVRWQ2NzSUhKbGNYVmxjM1JWY213c0lHSnZaSGtwWEhKY2JpOHZJQzUwYUdWdUtHUmhkR0VnUFQ0Z1kyOXVjMjlzWlM1c2IyY29aR0YwWVNrcFhISmNiaTh2SUM1allYUmphQ2hsY25JZ1BUNGdZMjl1YzI5c1pTNXNiMmNvWlhKeWIzSXBLVnh5WEc1Y2NseHVMeTh2THk5UWNtOTRlUzh2THk4dkwxeHlYRzR2THk4dlQySnFaV04wWEhKY2JpOHZJR052Ym5OMElIQmxjbk52YmlBOUlIdGNjbHh1THk4Z1hIUnVZVzFsT2lBblZtbDBZV3hwYVNjc1hISmNiaTh2SUZ4MFlXZGxPaUF5Tml4Y2NseHVMeThnWEhScWIySTZJQ2R1YjI1bEoxeHlYRzR2THlCOVhISmNibHh5WEc0dkx5QmpiMjV6ZENCdlltcGxZM1JRY205NGVTQTlJRzVsZHlCUWNtOTRlU2h3WlhKemIyNHNJSHRjY2x4dUx5OGdYSFJuWlhRb2RHRnlaMlYwTENCd2NtOXdLU0I3WEhKY2JpOHZJRngwWEhSamIyNXpiMnhsTG14dlp5aGdSMlYwZEdsdVp5QndjbTl3SUNSN2NISnZjSDFnS1Z4eVhHNHZMeUJjZEZ4MGNtVjBkWEp1SUhSaGNtZGxkRnR3Y205d1hUdGNjbHh1THk4Z1hIUjlMRnh5WEc0dkx5QmNkSE5sZENoMFlYSm5aWFFzSUhCeWIzQXNJSFpoYkhWbEtTQjdYSEpjYmk4dklGeDBYSFJwWmlBb2NISnZjQ0JwYmlCMFlYSm5aWFFwSUh0Y2NseHVMeThnWEhSY2RGeDBkR0Z5WjJWMFczQnliM0JkSUQwZ2RtRnNkV1ZjY2x4dUx5OGdYSFJjZEgwZ1pXeHpaU0I3WEhKY2JpOHZJRngwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1RtOGdKSHR3Y205d2ZTQm1hV1ZzWkNCcGJpQjBZWEpuWlhSZ0tUdGNjbHh1THk4Z1hIUmNkSDFjY2x4dUx5OGdYSFI5WEhKY2JpOHZJSDBwTzF4eVhHNWNjbHh1THk4Z1kyOXVjMjlzWlM1c2IyY29iMkpxWldOMFVISnZlSGt1Ym1GdFpTazdYSEpjYmk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNjbHh1THk4Z1kyOXVjM1FnWkdWc1lYa2dQU0J0Y3lBOVBpQjdYSEpjYmk4dklGeDBjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxLSEpsYzI5c2RtVWdQVDRnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUJ5WlhOdmJIWmxLQ2tzSUcxektTazdYSEpjYmk4dklIMWNjbHh1WEhKY2JpOHZJR052Ym5OMElIVnliQ0E5SUNkb2RIUndjem92TDJwemIyNXdiR0ZqWldodmJHUmxjaTUwZVhCcFkyOWtaUzVqYjIwdmRHOWtiM01uTzF4eVhHNHZMeUJtZFc1amRHbHZiaUJtWlhSamFGUnZaRzl6S0NrZ2UxeHlYRzR2THlCY2RHTnZibk52YkdVdWJHOW5LQ2RHWlhSamFDQjBiMlJ2SUhOMFlYSjBaV1FuS1R0Y2NseHVMeThnWEhSeVpYUjFjbTRnWkdWc1lYa29NakF3TUNsY2NseHVMeThnWEhRdWRHaGxiaWdvS1NBOVBpQjdYSEpjYmk4dklGeDBYSFJ5WlhSMWNtNGdabVYwWTJnb2RYSnNLVHRjY2x4dUx5OGdYSFI5S1M1MGFHVnVLSEpsYzNCdmJuTmxJRDArSUhKbGMzQnZibk5sTG1wemIyNG9LU2xjY2x4dUx5OGdmVnh5WEc1Y2NseHVMeThnWm1WMFkyaFViMlJ2Y3lncFhISmNiaTh2SUZ4MExuUm9aVzRvWkdGMFlTQTlQaUI3WEhKY2JpOHZJRngwWEhSamIyNXpiMnhsTG14dlp5Z25SR0YwWVNjc0lHUmhkR0VwTzF4eVhHNHZMeUJjZEgwcFhISmNiaTh2SUZ4MExtTmhkR05vS0dVZ1BUNGdZMjl1YzI5c1pTNWxjbkp2Y2lobEtTazdYSEpjYmx4eVhHNHZMeUJoYzNsdVl5QWdablZ1WTNScGIyNGdabVYwWTJoQmMzbHVZMVJ2Wkc5ektDa2dlMXh5WEc0dkx5QmNkR052Ym5OdmJHVXViRzluS0NkR1pYUmphQ0IwYjJSdklITjBZWEowWldRbktWeHlYRzR2THlCY2RHRjNZV2wwSUdSbGJHRjVLREl3TURBcFhISmNiaTh2SUZ4MFkyOXVjM1FnY21WemNHOXVjMlVnUFNCaGQyRnBkQ0JtWlhSamFDaDFjbXdwWEhKY2JpOHZJRngwWTI5dWMzUWdaR0YwWVNBOUlHRjNZV2wwSUhKbGMzQnZibk5sTG1wemIyNG9LVnh5WEc0dkx5QmNkR052Ym5OdmJHVXViRzluS0NkRVlYUmhKeXdnWkdGMFlTazdYSEpjYmk4dklIMWNjbHh1WEhKY2JpOHZJR1psZEdOb1FYTjVibU5VYjJSdmN5Z3BYSEpjYmx4eVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYSEpjYmk4dklHTnNZWE56SUVOdmJYQnZibVZ1ZENCN1hISmNiaTh2SUZ4MFkyOXVjM1J5ZFdOMGIzSW9jMlZzWldOMGIzSXBJSHRjY2x4dUx5OGdYSFJjZEhSb2FYTXVKR1ZzSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWh6Wld4bFkzUnZjaWxjY2x4dUx5OGdYSFI5WEhKY2JseHlYRzR2THlCY2RHaHBaR1VvS1NCN1hISmNiaTh2SUZ4MFhIUjBhR2x6TGlSbGJDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyNXZibVVuWEhKY2JpOHZJRngwZlZ4eVhHNWNjbHh1THk4Z1hIUnphRzkzS0NrZ2UxeHlYRzR2THlCY2RGeDBkR2hwY3k0a1pXd3VjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZGliRzlqYXlkY2NseHVMeThnWEhSOVhISmNiaTh2SUgxY2NseHVYSEpjYmk4dklHTnNZWE56SUVKdmVDQmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRDQjdYSEpjYmk4dklGeDBZMjl1YzNSeWRXTjBiM0lvYjNCMGFXOXVjeWtnZTF4eVhHNHZMeUJjZEZ4MGMzVndaWElvYjNCMGFXOXVjeTV6Wld4bFkzUnZjaWxjY2x4dVhISmNiaTh2SUZ4MFhIUjBhR2x6TGlSbGJDNXpkSGxzWlM1M2FXUjBhQ0E5SUhSb2FYTXVKR1ZzTG5OMGVXeGxMbWhsYVdkb2RDQTlJRzl3ZEdsdmJuTXVjMmw2WlNBcklDZHdlQ2M3WEhKY2JpOHZJRngwWEhSMGFHbHpMaVJsYkM1emRIbHNaUzVpWVdOclozSnZkVzVrUTI5c2IzSWdQU0J2Y0hScGIyNXpMbU52Ykc5eVhISmNiaTh2SUgxY2NseHVMeThnZlZ4eVhHNWNjbHh1THk4Z1kyOXVjM1FnWW05NE1TQTlJRzVsZHlCQ2IzZ29lMXh5WEc0dkx5QmNkSE5sYkdWamRHOXlPaUFuSTJKdmVERW5MRnh5WEc0dkx5QmNkSE5wZW1VNklERXdNQ3hjY2x4dUx5OGdYSFJqYjJ4dmNqb2dKM0psWkNkY2NseHVMeThnZlNsY2NseHVYSEpjYmx4eVhHNHZMeUJqYjI1emRDQmhibWx0WVd3Z1BTQjdYSEpjYmk4dklGeDBibUZ0WlRvZ0owRnVhVzFoYkNjc1hISmNiaTh2SUZ4MFlXZGxPaUExTEZ4eVhHNHZMeUJjZEdoaGMxUmhhV3c2SUhSeWRXVmNjbHh1THk4Z2ZWeHlYRzR2THlCamIyNXpiMnhsTG14dlp5aGhibWx0WVd3cE8xeHlYRzR2THlCamJHRnpjeUJCYm1sdFlXd2dlMXh5WEc1Y2NseHVMeThnWEhSamIyNXpkSEoxWTNSdmNpaHZjSFJwYjI1ektTQjdYSEpjYmk4dklGeDBYSFIwYUdsekxtNWhiV1VnUFNCdmNIUnBiMjV6TG01aGJXVmNjbHh1THk4Z1hIUmNkSFJvYVhNdVlXZGxJRDBnYjNCMGFXOXVjeTVoWjJWY2NseHVMeThnWEhSY2RIUm9hWE11YUdGelZHRnBiQ0E5SUc5d2RHbHZibk11YUdGelZHRnBiRnh5WEc0dkx5QmNkSDFjY2x4dVhISmNiaTh2SUZ4MGRtOXBZMlVvS1NCN1hISmNiaTh2SUZ4MFhIUmpiMjV6YjJ4bExteHZaeWduU1NCaGJTQkJibWx0WVd3aEp5azdYSEpjYmk4dklGeDBmVnh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeUF2THlCamIyNXpkQ0JoYm1sdFlXd2dQU0J1WlhjZ1FXNXBiV0ZzS0h0Y2NseHVMeThnTHk4Z1hIUnVZVzFsT2lBbllXNXBiV0ZzSnl4Y2NseHVMeThnTHk4Z1hIUmhaMlU2SURVc1hISmNiaTh2SUM4dklGeDBhR0Z6VkdGcGJEb2dkSEoxWlZ4eVhHNHZMeUF2THlCOUtWeHlYRzR2THlBdkx5QmpiMjV6YjJ4bExteHZaeWhoYm1sdFlXd3BPMXh5WEc0dkx5QXZMeUJoYm1sdFlXd3VkbTlwWTJVb0tUdGNjbHh1WEhKY2JpOHZJR05zWVhOeklFTmhkQ0JsZUhSbGJtUnpJRUZ1YVcxaGJDQjdYSEpjYmk4dklGeDBZMjl1YzNSeWRXTjBiM0lvYjNCMGFXOXVjeWtnZTF4eVhHNHZMeUJjZEZ4MGMzVndaWElvYjNCMGFXOXVjeWxjY2x4dUx5OGdYSFJjZEhSb2FYTXVZMjlzYjNJZ1BTQnZjSFJwYjI1ekxtTnZiRzl5WEhKY2JpOHZJRngwZlZ4eVhHNWNjbHh1THk4Z1hIUjJiMmxqWlNncElIdGNjbHh1THk4Z1hIUmNkSE4xY0dWeUxuWnZhV05sS0NsY2NseHVMeThnWEhSY2RHTnZibk52YkdVdWJHOW5LR0JKSUdGdElDUjdkR2hwY3k1dVlXMWxmV0FwTzF4eVhHNHZMeUJjZEgxY2NseHVYSEpjYmk4dklGeDBaMlYwSUdGblpVbHVabThvS1NCN1hISmNiaTh2SUZ4MFhIUnlaWFIxY200Z2RHaHBjeTVoWjJVZ0tpQTNPMXh5WEc0dkx5QmNkSDFjY2x4dVhISmNiaTh2SUZ4MGMyVjBJR0ZuWlVsdVptOG9ibVYzUVdkbEtTQjdYSEpjYmk4dklGeDBYSFIwYUdsekxtRm5aU0E5SUc1bGQwRm5aVHRjY2x4dUx5OGdYSFI5WEhKY2JpOHZJSDFjY2x4dVhISmNiaTh2SUdOdmJuTjBJR05oZENBOUlHNWxkeUJEWVhRb2UxeHlYRzR2THlCY2RHNWhiV1U2SUNkRFlYUW5MRnh5WEc0dkx5QmNkR0ZuWlRvZ055eGNjbHh1THk4Z1hIUm9ZWE5VWVdsc09pQjBjblZsTEZ4eVhHNHZMeUJjZEdOdmJHOXlPaUFuWW14aFkyc25YSEpjYmk4dklIMHBPMXh5WEc0dkx5QmpiMjV6YjJ4bExteHZaeWhqWVhRcE8xeHlYRzR2THlCallYUXVkbTlwWTJVb0tUdGNjbHh1THk4Z1kyOXVjMjlzWlM1c2IyY29ZMkYwTG1GblpVbHVabThwTzF4eVhHNHZMeUJqWVhRdVlXZGxTVzVtYnlBOUlERXlPMXh5WEc0dkx5QmpiMjV6YjJ4bExteHZaeWhqWVhRdVlXZGxTVzVtYnlrN1hISmNibHh5WEc1Y2NseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMMXh5WEc0dkx5QmpiMjV6ZENCd1pYSnpiMjRnUFNCUFltcGxZM1F1WTNKbFlYUmxLRnh5WEc0dkx5QmNkSHRjY2x4dUx5OGdYSFJjZEdOaGJHTjFiR0YwWlVGblpTZ3BJSHRjY2x4dUx5OGdYSFJjZEZ4MFkyOXVjMjlzWlM1c2IyY29KMEZuWlNjc0lHNWxkeUJFWVhSbEtDa3VaMlYwUm5Wc2JGbGxZWElvS1NBdElIUm9hWE11WW1seWRHaFpaV0Z5S1R0Y2NseHVMeThnWEhSY2RIMWNjbHh1THk4Z1hIUjlMQ0I3WEhKY2JpOHZJRngwYm1GdFpUb2dlMXh5WEc0dkx5QmNkRngwZG1Gc2RXVTZJQ2RXYVhSaGJHbHBKeXhjY2x4dUx5OGdYSFJjZEdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEhKY2JpOHZJRngwWEhSM2NtbDBZV0pzWlRvZ2RISjFaU3hjY2x4dUx5OGdYSFJjZEdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlZ4eVhHNHZMeUJjZEgwc1hISmNiaTh2SUZ4MFltbHlkR2haWldGeU9pQjdYSEpjYmk4dklGeDBYSFIyWVd4MVpUb2dNVGs1TXl4Y2NseHVMeThnWEhSY2RHVnVkVzFsY21GaWJHVTZJR1poYkhObExGeHlYRzR2THlCY2RGeDBkM0pwZEdGaWJHVTZJR1poYkhObExGeHlYRzR2THlCY2RGeDBZMjl1Wm1sbmRYSmhZbXhsT2lCbVlXeHpaVnh5WEc0dkx5QmNkSDBzWEhKY2JpOHZJRngwWVdkbE9pQjdYSEpjYmk4dklGeDBYSFJuWlhRb0tTQjdYSEpjYmk4dklGeDBYSFJjZEhKbGRIVnliaUJ1WlhjZ1JHRjBaU2dwTG1kbGRFWjFiR3haWldGeUtDa2dMU0IwYUdsekxtSnBjblJvV1dWaGNseHlYRzR2THlCY2RGeDBmU3hjY2x4dUx5OGdYSFJjZEhObGRDaDJZV3gxWlNrZ2UxeHlYRzR2THlCY2RGeDBYSFJrYjJOMWJXVnVkQzVpYjJSNUxuTjBlV3hsTG1KaFkydG5jbTkxYm1RZ1BTQW5jbVZrSnp0Y2NseHVMeThnWEhSY2RGeDBZMjl1YzI5c1pTNXNiMmNvSjFObGRDQmhaMlVuTENCMllXeDFaU2s3WEhKY2JpOHZJRngwWEhSOVhISmNiaTh2SUZ4MGZWeHlYRzR2THlCOUtWeHlYRzVjY2x4dUx5OGdZMjl1YzI5c1pTNXNiMmNvY0dWeWMyOXVLVHRjY2x4dUx5OGdjR1Z5YzI5dUxtTmhiR04xYkdGMFpVRm5aU2dwTzF4eVhHNWNjbHh1THk4Z1kyOXVjM1FnY0dWeWMyOXVJRDBnZTF4eVhHNHZMeUJjZEc1aGJXVTZJQ2RXYVhSaGJHbHBKeXhjY2x4dUx5OGdYSFJpYVhKMGFGbGxZWEk2SURFNU9UTmNjbHh1THk4Z2ZWeHlYRzR2THlCd1pYSnpiMjR1Ym1GdFpTQTlJQ2ROWVhocGJTZGNjbHh1THk4Z1pHVnNaWFJsSUhCbGNuTnZiaTV1WVcxbE8xeHlYRzR2THlCamIyNXpiMnhsTG14dlp5aHdaWEp6YjI0cE8xeHlYRzR2THlCamIyNXpiMnhsTG14dlp5aHdaWEp6YjI0dVlXZGxLVHRjY2x4dUx5OGdjR1Z5YzI5dUxtRm5aU0E5SURJNU8xeHlYRzR2THlCbWIzSWdLR3hsZENCclpYa2dhVzRnY0dWeWMyOXVLU0I3WEhKY2JpOHZJRngwYVdZZ0tIQmxjbk52Ymk1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYSEpjYmk4dklGeDBYSFJqYjI1emIyeGxMbXh2WnloclpYa3NJSEJsY25OdmJsdHJaWGxkS1R0Y2NseHVMeThnWEhSOVhISmNiaTh2SUgxY2NseHVYSEpjYmx4eVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2TDF4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnlnblVtVnhkV1Z6ZENCa1lYUmhMaTR1SnlsY2NseHVMeThnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb0oxQnlaWEJoY21sdVp5QmtZWFJoTGk0dUp5azdYSEpjYmk4dklGeDBZMjl1YzNRZ1ltRmphMlZ1WkVSaGRHRWdQU0I3WEhKY2JpOHZJRngwWEhSelpYSjJaWEk2SUNkaGQzTW5MRnh5WEc0dkx5QmNkRngwY0c5eWREb2dNakF3TUN4Y2NseHVMeThnWEhSY2RITjBZWFIxY3pvZ0ozZHZjbXRwYm1jblhISmNiaTh2SUZ4MGZWeHlYRzR2THlCY2RITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z2UxeHlYRzR2THlCY2RGeDBZbUZqYTJWdVpFUmhkR0V1Ylc5a2FXWnBaV1FnUFNCMGNuVmxPMXh5WEc0dkx5QmNkRngwWTI5dWMyOXNaUzVzYjJjb0owUmhkR0VnY21WalpXbDJaV1FuTENCaVlXTnJaVzVrUkdGMFlTbGNjbHh1THk4Z1hIUjlMQ0F5TURBd0tUdGNjbHh1THk4Z2ZTd2dNakF3TUNsY2NseHVYSEpjYmk4dklHTnZibk4wSUhBZ1BTQnVaWGNnVUhKdmJXbHpaU2htZFc1amRHbHZiaWh5WlhOdmJIWmxMQ0J5WldwbFkzUXBJSHRjY2x4dUx5OGdYSFJ6WlhSVWFXMWxiM1YwS0NncElEMCtJSHRjY2x4dUx5OGdYSFJjZEdOdmJuTnZiR1V1Ykc5bktDZFFjbVZ3WVhKcGJtY2daR0YwWVM0dUxpY3BPMXh5WEc0dkx5QmNkRngwWTI5dWMzUWdZbUZqYTJWdVpFUmhkR0VnUFNCN1hISmNiaTh2SUZ4MFhIUmNkSE5sY25abGNqb2dKMkYzY3ljc1hISmNiaTh2SUZ4MFhIUmNkSEJ2Y25RNklESXdNREFzWEhKY2JpOHZJRngwWEhSY2RITjBZWFIxY3pvZ0ozZHZjbXRwYm1jblhISmNiaTh2SUZ4MFhIUjlYSEpjYmk4dklGeDBYSFJ5WlhOdmJIWmxLR0poWTJ0bGJtUkVZWFJoS1R0Y2NseHVMeThnWEhSOUxDQXlNREF3S1R0Y2NseHVMeThnZlNsY2NseHVYSEpjYmk4dklIQXVkR2hsYmlnb1pHRjBZU2tnUFQ0Z2UxeHlYRzR2THlCY2RISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTZ29jbVZ6YjJ4MlpTd2djbVZxWldOMEtTQTlQaUI3WEhKY2JpOHZJRngwWEhSelpYUlVhVzFsYjNWMEtDZ3BJRDArSUh0Y2NseHVMeThnWEhSY2RGeDBaR0YwWVM1dGIyUnBabWxsWkNBOUlIUnlkV1U3WEhKY2JpOHZJRngwWEhSY2RISmxjMjlzZG1Vb1pHRjBZU2s3WEhKY2JpOHZJRngwWEhSOUxDQXlNREF3S1R0Y2NseHVMeThnWEhSOUtWeHlYRzR2THlCOUtWeHlYRzR2THlBdWRHaGxiaWdvWTJ4cFpXNTBSR0YwWVNBOVBpQjdYSEpjYmk4dklGeDBZMjl1YzI5c1pTNXNiMmNvSjBSaGRHRWdjbVZqWldsMlpXUW5MQ0JqYkdsbGJuUkVZWFJoS1R0Y2NseHVYSEpjYmk4dklGeDBZMnhwWlc1MFJHRjBZUzVtY205dFVISnZiV2x6WlNBOUlIUnlkV1U3WEhKY2JpOHZJRngwY21WMGRYSnVJR05zYVdWdWRFUmhkR0U3WEhKY2JpOHZJSDBwS1Z4eVhHNHZMeUF1ZEdobGJpaGtZWFJoSUQwK0lIdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWduVFc5a2FXWnBaV1FuTENCa1lYUmhLVHRjY2x4dUx5OGdmU2xjY2x4dUx5OGdMbU5oZEdOb0tHVnljaUE5UGlCamIyNXpiMnhsTG1WeWNtOXlLQ2RGY25KdmNqb2dKeXdnWlhKeUtTbGNjbHh1THk4Z0xtWnBibUZzYkhrb0tDa2dQVDRnWTI5dWMyOXNaUzVzYjJjb0owWnBibUZzYkhrbktTbGNjbHh1WEhKY2JpOHZJR052Ym5OMElITnNaV1Z3SUQwZ2JYTWdQVDRnZTF4eVhHNHZMeUJ5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvY21WemIyeDJaU0E5UGlCN1hISmNiaTh2SUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUhKbGMyOXNkbVVvS1N3Z2JYTXBYSEpjYmk4dklIMHBPMXh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeUJ6YkdWbGNDZ3lNREF3S1M1MGFHVnVLQ2dwSUQwK0lHTnZibk52YkdVdWJHOW5LQ2RCWm5SbGNpQXlJSE5sWTI5dVpITW5LU2s3WEhKY2JpOHZJSE5zWldWd0tETXdNREFwTG5Sb1pXNG9LQ2tnUFQ0Z1kyOXVjMjlzWlM1c2IyY29KMEZtZEdWeUlETWdjMlZqYjI1a2N5Y3BLVHRjY2x4dVhISmNiaTh2SUZCeWIyMXBjMlV1WVd4c0tGdHpiR1ZsY0NneU1EQXdLU3dnYzJ4bFpYQW9OVEF3TUNsZEtWeHlYRzR2THlBdWRHaGxiaWdvS1NBOVBpQjdYSEpjYmk4dklGeDBZMjl1YzI5c1pTNXNiMmNvSjBGc2JDQndjbTl0YVhObGN5Y3BYSEpjYmk4dklIMHBYSEpjYmx4eVhHNHZMeUJRY205dGFYTmxMbkpoWTJVb1czTnNaV1Z3S0RJd01EQXBMQ0J6YkdWbGNDZzFNREF3S1YwcFhISmNiaTh2SUM1MGFHVnVLQ2dwSUQwK0lIdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWduVW1GalpTQndjbTl0YVhObGN5Y3BYSEpjYmk4dklIMHBYSEpjYmx4eVhHNHZMeUJtWlhSamFDZ25hSFIwY0RvdkwyZGxkR0puYUdZdWNHaHdKeWxjY2x4dUx5OGdMblJvWlc0b1pHRjBZU0E5UGlCN1hISmNiaTh2SUZ4MFkyOXVjMjlzWlM1c2IyY29aR0YwWVNrN1hISmNiaTh2SUZ4MEx5OGdaR0YwWVM1MFpYaDBLQ2t1ZEdobGJpaGtZWFJoTWlBOVBpQjdYSEpjYmk4dklGeDBMeThnWEhSamIyNXpiMnhsTG14dlp5aGtZWFJoTWlrN1hISmNiaTh2SUZ4MEx5OGdmU2xjY2x4dUx5OGdYSFJ5WlhSMWNtNGdaR0YwWVM1MFpYaDBLQ2s3WEhKY2JpOHZJSDBwWEhKY2JpOHZJQzUwYUdWdUlDaGtZWFJoSUQwK0lIdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWhrWVhSaEtUdGNjbHh1THk4Z2ZTbGNjbHh1WEhKY2JpOHZMeTh2THk4dkx5OHZMeTh2TDFoTlRFaDBkSEJTWlhGMVpYTjBjMXh5WEc0dkx5QnNaWFFnZUdoMGRIQWdQU0J1WlhjZ1dFMU1TSFIwY0ZKbGNYVmxjM1FvS1R0Y2NseHVYSEpjYmk4dklIaG9kSFJ3TG05dWNtVmhaSGx6ZEdGMFpXTm9ZVzVuWlNBOUlHWjFibU4wYVc5dUtDa2dlMXh5WEc0dkx5QmNkR2xtSUNoMGFHbHpMbkpsWVdSNVUzUmhkR1VnUFQwZ05DQW1KaUIwYUdsekxuTjBZWFIxY3lBOVBTQXlNREFwSUh0Y2NseHVMeThnWEhSY2RHMTVSblZ1WTNScGIyNG9kR2hwY3k1eVpYTndiMjV6WlZSbGVIUXBPMXh5WEc0dkx5QmNkSDFjY2x4dUx5OGdmVnh5WEc1Y2NseHVMeThnZUdoMGRIQXViM0JsYmlnblIwVlVKeXdnSjJoMGRIQTZMeTluWlhSaVoyaG1KeXdnZEhKMVpTazdYSEpjYmk4dklIaG9kSFJ3TG5ObGJtUW9LVHRjY2x4dVhISmNiaTh2SUdaMWJtTjBhVzl1SUcxNVJuVnVZM1JwYjI0b1pHRjBZU2tnZTF4eVhHNHZMeUJjZEdOdmJuTnZiR1V1Ykc5bktHUmhkR0VwTzF4eVhHNHZMeUI5WEhKY2JseHlYRzR2THlCc1pYUWdlR2gwZEhBeUlEMGdibVYzSUZoTlRFaDBkSEJTWlhGMVpYTjBLQ2s3WEhKY2JpOHZJSGhvZEhSd01pNXZibkpsWVdSNWMzUmhkR1ZqYUdGdVoyVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVMeThnWEhScFppQW9kR2hwY3k1eVpXRmtlVk4wWVhSbElEMDlJRFFnSmlZZ2RHaHBjeTV6ZEdGMGRYTWdQVDBnTWpBd0tTQjdYSEpjYmk4dklGeDBYSFJ0ZVVaMWJtTjBhVzl1TWloMGFHbHpMbkpsYzNCdmJuTmxWR1Y0ZENrN1hISmNiaTh2SUZ4MGZWeHlYRzR2THlCOVhISmNibHh5WEc0dkx5QjRhSFIwY0RJdWIzQmxiaWduVUU5VFZDY3NJQ2RvZEhSd09pOHZaMlYwWW1kb1ppY3NJSFJ5ZFdVcE8xeHlYRzR2THlCNGFIUjBjREl1YzJWMFVtVnhkV1Z6ZEVobFlXUmxjaWduWTI5dWRHVnVkQzEwZVhCbEp5d2dYQ0poY0hCc2FXTmhkR2x2Ymk5NExYZDNkeTFtYjNKdExYVnliR1Z1WTI5a1pXUmNJaWs3WEhKY2JpOHZJSGhvZEhSd01pNXpaVzVrS0NkaGRYUm9QVndpYzJSbWMyUm1KbVJtWnoxbVoyUm1aMlluS1R0Y2NseHVYSEpjYmk4dklHWjFibU4wYVc5dUlHMTVSblZ1WTNScGIyNHlLR1JoZEdFcElIdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWhrWVhSaEtUdGNjbHh1THk4Z2ZWeHlYRzR2THk4dkx5OHZMeTh2THk4dkx5OHZYSEpjYmk4dklHeGxkQ0JoSUQwZ056dGNjbHh1WEhKY2JseHlYRzR2THlCamIyNXpiMnhsTG14dlp5aGhLVHRjY2x4dVhISmNiaTh2SUd4bGRDQmlJRDBnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0b2NtVnpiMngyWlN3Z2NtVnFaV04wS1NCN1hISmNiaTh2SUZ4MGMyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN1hISmNiaTh2SUZ4MFhIUnlaWE52YkhabEtHRWdQU0E1T1NrN1hISmNiaTh2SUZ4MGZTd2dNakF3TUNrN1hISmNiaTh2SUgwcE8xeHlYRzR2THlCaUxuUm9aVzRvWm5WdVkzUnBiMjRvS1NCN1hISmNiaTh2SUZ4MFkyOXVjMjlzWlM1c2IyY29ZU2s3WEhKY2JpOHZJSDBwWEhKY2JseHlYRzR2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dlhISmNiaTh2SUdOdmJuTjBJSE5zWldWd0lEMGdiWE1nUFQ0Z2UxeHlYRzR2THlCY2RISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTaHlaWE52YkhabElEMCtJSHRjY2x4dUx5OGdYSFJjZEhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnY21WemIyeDJaU2dwTENCdGN5bGNjbHh1THk4Z1hIUjlLVnh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeUF2THlCemJHVmxjQ2d5TURBd0tTNTBhR1Z1S0NncElEMCtJR052Ym5OdmJHVXViRzluS0NkQlpuUmxjaUF5SUhObFkyOXVaSE1uS1NrN1hISmNiaTh2SUM4dklITnNaV1Z3S0RNd01EQXBMblJvWlc0b0tDa2dQVDRnWTI5dWMyOXNaUzVzYjJjb0owRm1kR1Z5SURNZ2MyVmpiMjVrY3ljcEtUdGNjbHh1WEhKY2JpOHZJRkJ5YjIxcGMyVXVZV3hzS0Z0emJHVmxjQ2d5TURBd0tTd2djMnhsWlhBb05UQXdNQ2xkS1Z4eVhHNHZMeUF1ZEdobGJpZ29LU0E5UGlCN1hISmNiaTh2SUZ4MFkyOXVjMjlzWlM1c2IyY29KMEZzYkNCd2NtOXRhWE5sY3ljcE8xeHlYRzR2THlCOUtWeHlYRzVjY2x4dUx5OGdVSEp2YldselpTNXlZV05sS0Z0emJHVmxjQ2d5TURBd0tTd2djMnhsWlhBb05UQXdNQ2xkS1Z4eVhHNHZMeUF1ZEdobGJpZ29LU0E5UGlCN1hISmNiaTh2SUZ4MFkyOXVjMjlzWlM1c2IyY29KMUpoWTJVZ2NISnZiV2x6WlhNbktUdGNjbHh1THk4Z2ZTbGNjbHh1THk4Z1kyOXVjMjlzWlM1c2IyY29KMUpsY1hWbGMzUWdaR0YwWVM0dUxpY3BPMXh5WEc1Y2NseHVMeThnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb0oxQnlaWEJoY21sdVp5QmtZWFJoSnlrN1hISmNibHh5WEc0dkx5QmNkR052Ym5OMElHSmhZMnRsYm1SRVlYUmhJRDBnZTF4eVhHNHZMeUJjZEZ4MGMyVnlkbVZ5T2lBbllYWnpKeXhjY2x4dUx5OGdYSFJjZEhCdmNuUTZJREl3TURBc1hISmNiaTh2SUZ4MFhIUnpkR0YwZFhNNklDZDNiM0pyYVc1bkoxeHlYRzR2THlCY2RIMWNjbHh1WEhKY2JpOHZJRngwYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEhKY2JpOHZJRngwWEhSaVlXTnJaVzVrUkdGMFlTNXRiMlJwWm1sbFpDQTlJSFJ5ZFdVN1hISmNiaTh2SUZ4MFhIUmpiMjV6YjJ4bExteHZaeWduUkdGMFlTQnlaV05sYVhabFpDY3NJR0poWTJ0bGJtUkVZWFJoS1R0Y2NseHVMeThnWEhSOUxDQXlNREF3S1R0Y2NseHVMeThnZlN3Z01qQXdNQ2s3WEhKY2JseHlYRzR2THlCamIyNXpkQ0J3SUQwZ2JtVjNJRkJ5YjIxcGMyVW9ablZ1WTNScGIyNG9jbVZ6YjJ4MlpTd2djbVZxWldOMEtTQjdYSEpjYmk4dklGeDBjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQjdYSEpjYmk4dklGeDBYSFJqYjI1emIyeGxMbXh2WnlnblVISmxjR0Z5YVc1bklHUmhkR0VuS1R0Y2NseHVMeThnWEhSY2RHTnZibk4wSUdKaFkydGxibVJFWVhSaElEMGdlMXh5WEc0dkx5QmNkRngwWEhSelpYSjJaWEk2SUNkaGRuTW5MRnh5WEc0dkx5QmNkRngwWEhSd2IzSjBPaUF5TURBd0xGeHlYRzR2THlCY2RGeDBYSFJ6ZEdGMGRYTTZJQ2QzYjNKcmFXNW5KMXh5WEc0dkx5QmNkRngwZlZ4eVhHNHZMeUJjZEZ4MGNtVnpiMngyWlNoaVlXTnJaVzVrUkdGMFlTazdYSEpjYmk4dklGeDBmU3dnTWpBd01DazdYSEpjYmk4dklIMHBPMXh5WEc0dkx5QndMblJvWlc0b0tHUmhkR0VwSUQwK0lIdGNjbHh1THk4Z1hIUnlaWFIxY200Z2JtVjNJRkJ5YjIxcGMyVW9LSEpsYzI5c2RtVXNJSEpsYW1WamRDa2dQVDRnZTF4eVhHNHZMeUJjZEZ4MGMyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN1hISmNiaTh2SUZ4MFhIUmNkR1JoZEdFdWJXOWthV1pwWldRZ1BTQjBjblZsTzF4eVhHNHZMeUJjZEZ4MFhIUnlaV3BsWTNRb1pHRjBZU2s3WEhKY2JpOHZJRngwWEhSOUxDQXlNREF3S1R0Y2NseHVMeThnWEhSOUtWeHlYRzVjY2x4dUx5OGdmU2xjY2x4dUx5OGdMblJvWlc0b1kyeHBaVzUwUkdGMFlTQTlQaUI3WEhKY2JpOHZJRngwWTI5dWMyOXNaUzVzYjJjb0owUmhkR0VnY21WalpXbDJaV1FuTENCamJHbGxiblJFWVhSaEtUdGNjbHh1THk4Z1hIUmpiR2xsYm5SRVlYUmhMbVp5YjIxUWNtOXRhWE5sSUQwZ2RISjFaVHRjY2x4dUx5OGdYSFJ5WlhSMWNtNGdZMnhwWlc1MFJHRjBZVHRjY2x4dUx5OGdmU2xjY2x4dUx5OGdMblJvWlc0b1pHRjBZU0E5UGlCN1hISmNiaTh2SUZ4MFkyOXVjMjlzWlM1c2IyY29KMDF2WkdsbWFXVmtKeXdnWkdGMFlTazdYSEpjYmk4dklIMHBYSEpjYmk4dklDNWpZWFJqYUNobGNuSWdQVDRnWTI5dWMyOXNaUzVsY25KdmNpZ25SWEp5YjNJc0lHVnljaWNwS1Z4eVhHNHZMeUF1Wm1sdVlXeHNlU2dvS1NBOVBpQmpiMjV6YjJ4bExteHZaeWduUm1sdVlXeHNlU2NwS1Z4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnlnblVtVnhkV1Z6ZENCa1lYUmhMaTR1SnlrN1hISmNiaTh2SUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZTF4eVhHNHZMeUJjZEdOdmJuTnZiR1V1Ykc5bktDZFFjbVZ3WVhKcGJtY2daR0YwWVM0dUxpNG5LVHRjY2x4dUx5OGdYSFJqYjI1emRDQmlZV05yWlc1a1JHRjBZU0E5SUh0Y2NseHVMeThnWEhSY2RITmxjblpsY2pvZ0oyRjJjeWNzWEhKY2JpOHZJRngwWEhSd2IzSjBPaUF5TURBd0xGeHlYRzR2THlCY2RGeDBjM1JoZEhWek9pQW5kMjl5YTJsdVp5ZGNjbHh1THk4Z1hIUjlYSEpjYmk4dklGeDBjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQjdYSEpjYmk4dklGeDBYSFJpWVdOclpXNWtSR0YwWVM1dGIyUnBabWxsWkNBOUlIUnlkV1U3WEhKY2JpOHZJRngwWEhSamIyNXpiMnhsTG14dlp5Z25SR0YwWVNCeVpXTmxhWFpsWkNjc0lHSmhZMnRsYm1SRVlYUmhLVnh5WEc0dkx5QmNkSDBzSURJd01EQXBPMXh5WEc0dkx5QjlMQ0F5TURBd0tUdGNjbHh1THk4Z1kyOXVjM1FnY0NBOUlHNWxkeUJRY205dGFYTmxLR1oxYm1OMGFXOXVLSEpsYzI5c2RtVXNJSEpsYW1WamRDa2dlMXh5WEc1Y2NseHVMeThnZlNsY2NseHVMeThnMEpEUmdkQzQwTDNSaGRHQTBMN1F2ZEM5MEw3UmdkR0MwWXhjY2x4dUx5OGdZMjl1YzI5c1pTNXNiMmNvSjNOMFlYSjBKeWs3WEhKY2JseHlYRzR2THlCamIyNXpiMnhsTG14dlp5Z25jM1JoY25ReUp5azdYSEpjYmx4eVhHNHZMeUJtZFc1amRHbHZiaUIwYVcxbGIzVjBNbk5sWXlncElIdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWduZEdsdFpXOTFkREp6WldNbktUdGNjbHh1THk4Z2ZWeHlYRzVjY2x4dUx5OGdkMmx1Wkc5M0xuTmxkRlJwYldWdmRYUW9kR2x0Wlc5MWRESnpaV01zSURJd01EQXBPMXh5WEc1Y2NseHVMeThnZDJsdVpHOTNMbk5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRvS1NCN1hISmNiaTh2SUZ4MFkyOXVjMjlzWlM1c2IyY29KMGx1YzJsa1pTQjBhVzFsYjNWMExDQmhablJsY2lBMUlITmxZMjl1WkhNbktUdGNjbHh1THk4Z2ZTd2dOVEF3TUNrN1hISmNibHh5WEc0dkx5QmpiMjV6YjJ4bExteHZaeWduWlc1a0p5azdYSEpjYmk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEhKY2JpOHZJR1oxYm1OMGFXOXVJR055WldGMFpVTmhiR05HZFc1amRHbHZiaWh1S1NCN1hISmNiaTh2SUZ4MGNtVjBkWEp1SUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzR2THlCY2RGeDBZMjl1YzI5c1pTNXNiMmNvTVRBd01DQXFJRzRwTzF4eVhHNHZMeUJjZEgxY2NseHVMeThnZlZ4eVhHNHZMeUJqYjI1emRDQndaWEp6YjI0Z1BTQjdYSEpjYmk4dklGeDBibUZ0WlRvZ0oxWnBkR0ZzYVdrblhISmNiaTh2SUgxY2NseHVYSEpjYmk4dklHWjFibU4wYVc5dUlHbHVabThvY0dodmJtVXNJR1Z0WVdsc0tTQjdYSEpjYmk4dklGeDBZMjl1YzI5c1pTNXNiMmNvWUU1aGJXVTZJQ1I3ZEdocGN5NXVZVzFsZlN3Z2RHVnNPaUFrZTNCb2IyNWxmU3dnWlcxaGFXdzZJQ1I3WlcxaGFXeDlZQ2s3WEhKY2JpOHZJSDFjY2x4dVhISmNiaTh2TDBSbGJXOWNjbHh1THk4Z2FXNW1ieTVpYVc1a0tIQmxjbk52Ymlrb0p6RXlNekV5TXljc0lDZDJRRzFoYVd3dWNuVW5LVHRjY2x4dUx5OGdhVzVtYnk1aWFXNWtLSEJsY25OdmJpd2dKekV5TXpFeU15Y3BLQ2QyUUcxaGFXd3VjblVuS1R0Y2NseHVMeThnYVc1bWJ5NWlhVzVrS0hCbGNuTnZiaXdnSnpFeU16RXlNeWNzSUNkMlFHMWhhV3d1Y25VbktTZ3BPMXh5WEc1Y2NseHVMeThnUldGemVWeHlYRzR2THlCbWRXNWpkR2x2YmlCaWFXNWtLR1p1TENCamIyNTBaWGgwTENBdUxpNXlaWE4wS1NCN1hISmNiaTh2SUZ4MGNtVjBkWEp1SUdadUxtSnBibVFvWTI5dWRHVjRkQ3dnTGk0dWNtVnpkQ2s3WEhKY2JpOHZJSDFjY2x4dUx5OGdNaUJYYVhSb2IzVjBJR2x1YkdsdVpTQnRaWFJvYjJSelhISmNiaTh2SUdaMWJtTjBhVzl1SUdKcGJtUW9abTRzSUdOdmJuUmxlSFFzSUM0dUxuSmxjM1FwSUh0Y2NseHVMeThnWEhSeVpYUjFjbTRnWm5WdVkzUnBiMjRvTGk0dVlYSm5jeWtnZTF4eVhHNHZMeUJjZEZ4MFkyOXVjM1FnZFc1cGNVbGtJRDBnUkdGMFpTNXViM2NvS1M1MGIxTjBjbWx1WnlncE8xeHlYRzR2THlCY2RGeDBZMjl1ZEdWNGRGdDFibWx4U1dSZElEMGdabTQ3WEhKY2JpOHZJRngwWEhSamIyNXpkQ0J5WlhOMWJIUWdQU0JqYjI1MFpYaDBXM1Z1YVhGSlpGMG9MaTR1Y21WemRDNWpiMjVqWVhRb1lYSm5jeWtwTzF4eVhHNWNjbHh1THk4Z1hIUmNkR1JsYkdWMFpTQmpiMjUwWlhoMFczVnVhWEZKWkYwN1hISmNiaTh2SUZ4MFhIUnlaWFIxY200Z2NtVnpkV3gwTzF4eVhHNHZMeUJjZEgxY2NseHVMeThnZlZ4eVhHNHZMeTh2SURNZ1JWTWdOVnh5WEc0dkx5Qm1kVzVqZEdsdmJpQmlhVzVrS0dadUxDQmpiMjUwWlhoMEtTQjdYSEpjYmk4dklGeDBZMjl1YzNRZ2NtVnpkQ0E5SUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV6YkdsalpTNWpZV3hzS0dGeVozVnRaVzUwY3l3Z01pazdYSEpjYmk4dklGeDBjbVYwZFhKdUlHWjFibU4wYVc5dUtDa2dlMXh5WEc0dkx5QmNkRngwWTI5dWMzUWdZWEpuY3lBOUlFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaUzVqWVd4c0tHRnlaM1Z0Wlc1MGN5azdYSEpjYmk4dklGeDBYSFJ5WlhSMWNtNGdabTR1WVhCd2JIa29ZMjl1ZEdWNGRDd2djbVZ6ZEM1amIyNWpZWFFvWVhKbmN5a3BPMXh5WEc0dkx5QmNkSDFjY2x4dUx5OGdmVnh5WEc1Y2NseHVMeTh2THk4dkx5QkZVeUEyWEhKY2JpOHZJR1oxYm1OMGFXOXVJR0pwYm1Rb1ptNHNJR052Ym5SbGVIUXNJQzR1TG5KbGMzUXBJSHRjY2x4dUx5OGdYSFJ5WlhSMWNtNGdablZ1WTNScGIyNG9MaTR1WVhKbmN5a2dlMXh5WEc0dkx5QmNkRngwTHk4Z2NtVjBkWEp1SUdadUxtRndjR3g1S0dOdmJuUmxlSFFzSUhKbGMzUXVZMjl1WTJGMEtHRnlaM01wS1R0Y2NseHVMeThnWEhSY2RISmxkSFZ5YmlCbWJpNWpZV3hzS0dOdmJuUmxlSFFzSUM0dUxuSmxjM1F1WTI5dVkyRjBLR0Z5WjNNcEtUdGNjbHh1THk4Z1hIUjlYSEpjYmk4dklIMWNjbHh1WEhKY2JpOHZJR0pwYm1Rb2FXNW1ieXdnY0dWeWMyOXVLU2duTVRJek1USXpKeXdnSjNaQWJXRnBiQzV5ZFNjcE8xeHlYRzR2THlCaWFXNWtLR2x1Wm04c0lIQmxjbk52Yml3Z0p6RXlNekV5TXljcEtDQW5ka0J0WVdsc0xuSjFKeWs3WEhKY2JpOHZJR0pwYm1Rb2FXNW1ieXdnY0dWeWMyOXVMQ0FuTVRJek1USXpKeXdnSjNaQWJXRnBiQzV5ZFNjcEtDazdYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LSEJsY25OdmJpazdYSEpjYmk4dkwwTkJURXhjY2x4dUx5OGdablZ1WTNScGIyNGdZMkZzYkNobWJpd2dZMjl1ZEdWNGRDd2dMaTR1WVhKbmN5a2dlMXh5WEc0dkx5QmNkR052Ym5OMElIVnVhWEZKWkNBOUlFUmhkR1V1Ym05M0tDa3VkRzlUZEhKcGJtY29LVHRjY2x4dUx5OGdYSFJqYjI1MFpYaDBXM1Z1YVhGSlpGMGdQU0JtYmp0Y2NseHVMeThnWEhSamIyNXpkQ0J5WlhOMWJIUWdQU0JqYjI1MFpYaDBXM1Z1YVhGSlpGMG9MaTR1WVhKbmN5azdYSEpjYmk4dklGeDBaR1ZzWlhSbElHTnZiblJsZUhSYmRXNXBjVWxrWFR0Y2NseHVMeThnWEhSeVpYUjFjbTRnY21WemRXeDBPMXh5WEc1Y2NseHVMeThnZlZ4eVhHNWNjbHh1THk4Z1kyRnNiQ2hwYm1adkxDQndaWEp6YjI0c0lDY3hNak0wSnl3Z0oyTmhiR3hBWkdabkp5azdYSEpjYmk4dlFYQndiSGxjY2x4dUx5OGdablZ1WTNScGIyNGdZWEJ3Ykhrb1ptNHNJR052Ym5SbGVIUXNJR0Z5Y21GNUtTQjdYSEpjYmk4dklGeDBZMjl1YzNRZ2RXNXBjVWxrSUQwZ1JHRjBaUzV1YjNjb0tTNTBiMU4wY21sdVp5Z3BPMXh5WEc0dkx5QmNkR052Ym5SbGVIUmJkVzVwY1Vsa1hTQTlJR1p1TzF4eVhHNHZMeUJjZEdOdmJuTjBJSEpsYzNWc2RDQTlJR052Ym5SbGVIUmJkVzVwY1Vsa1hTZ3VMaTVoY25KaGVTazdYSEpjYmk4dklGeDBaR1ZzWlhSbElHTnZiblJsZUhSYmRXNXBjVWxrWFR0Y2NseHVMeThnWEhSeVpYUjFjbTRnY21WemRXeDBPMXh5WEc1Y2NseHVMeThnZlZ4eVhHNHZMeUJoY0hCc2VTaHBibVp2TENCd1pYSnpiMjRzSUZzbk1USXpNVEl6Snl3Z0ozZGxabVZtUUdabkoxMHBPMXh5WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dlhISmNiaTh2SUdOdmJuTjBJR05oYkdNZ1BTQmpjbVZoZEdWRFlXeGpSblZ1WTNScGIyNG9ORElwTzF4eVhHNHZMeUJqWVd4aktDazdYSEpjYmx4eVhHNHZMeUJtZFc1amRHbHZiaUJqY21WaGRHVkpibU55WlcxbGJuUnZjaWh1S1NCN1hISmNiaTh2SUZ4MGNtVjBkWEp1SUdaMWJtTjBhVzl1S0c1MWJTa2dlMXh5WEc0dkx5QmNkRngwY21WMGRYSnVJRzRnS3lCdWRXMDdYSEpjYmk4dklGeDBmVnh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeUJqYjI1emRDQmhaR1JQYm1VZ1BTQmpjbVZoZEdWSmJtTnlaVzFsYm5SdmNpZ3hLVHRjY2x4dUx5OGdZMjl1YzNRZ1lXUmtWR1Z1SUQwZ1kzSmxZWFJsU1c1amNtVnRaVzUwYjNJb01UQXBPMXh5WEc1Y2NseHVMeThnWTI5dWMyOXNaUzVzYjJjb1lXUmtUMjVsS0RFd0tTazdYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LR0ZrWkU5dVpTZzBNaWtwTzF4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnloaFpHUlVaVzRvTkRJcEtUdGNjbHh1WEhKY2JpOHZJR1oxYm1OMGFXOXVJSFZ5YkVkbGJtVnlZWFJ2Y2loa2IyMWhhVzRwSUh0Y2NseHVMeThnWEhSeVpYUjFjbTRnWm5WdVkzUnBiMjRvZFhKc0tTQjdYSEpjYmk4dklGeDBYSFJ5WlhSMWNtNGdZR2gwZEhCek9pOHZKSHQxY214OUxpUjdaRzl0WVdsdWZXQTdYSEpjYmk4dklGeDBmVnh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeUJqYjI1emRDQmpiMjFWY213Z1BTQjFjbXhIWlc1bGNtRjBiM0lvSjJOdmJTY3BPMXh5WEc0dkx5QmpiMjV6ZENCeWRWVnliQ0E5SUhWeWJFZGxibVZ5WVhSdmNpZ25jblVuS1R0Y2NseHVMeThnWTI5dWMyOXNaUzVzYjJjb1kyOXRWWEpzS0Nkd1pYUjVZU2NwS1R0Y2NseHVMeThnWTI5dWMyOXNaUzVzYjJjb2NuVlZjbXdvSjNCbGRIbGhKeWtwTzF4eVhHNWNjbHh1THk4Z1puVnVZM1JwYjI0Z1ltbHVaQ2hqYjI1MFpYaDBMQ0JtYmlrZ2UxeHlYRzR2THlCY2RISmxkSFZ5YmlCbWRXNWpkR2x2YmlndUxpNWhjbWR6S1NCN1hISmNiaTh2SUZ4MFhIUm1iaTVoY0hCc2VTaGpiMjUwWlhoMExDQmhjbWR6S1R0Y2NseHVMeThnWEhSOVhISmNiaTh2SUgxY2NseHVYSEpjYmk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEhKY2JpOHZJR052Ym5OMElIQmxjbk52YmlBOUlIdGNjbHh1THk4Z1hIUnVZVzFsT2lBblZtbDBZV3hwYVNkY2NseHVMeThnZlZ4eVhHNWNjbHh1THk4Z1puVnVZM1JwYjI0Z2FXNW1ieWh3YUc5dVpTd2daVzFoYVd3cElIdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWhnMEpqUXZOR1BPaUFrZTNSb2FYTXVibUZ0Wlgwc0lOR0MwTFhRdXpvZ0pIdHdhRzl1Wlgwc0lFVXRiV0ZwYkRvZ0pIdGxiV0ZwYkgxZ0tUdGNjbHh1THk4Z2ZWeHlYRzVjY2x4dUx5OGdNU0RRbjlHQTBMN1JnZEdDMEw3UXVWeHlYRzR2THlCbWRXNWpkR2x2YmlCaWFXNWtLR1p1TENCamIyNTBaWGgwTENBdUxpNXlaWE4wS1NCN1hISmNiaTh2SUZ4MGNtVjBkWEp1SUdadUxtSnBibVFvWTI5dWRHVjRkQ3dnTGk0dWNtVnpkQ2s3WEhKY2JpOHZJSDFjY2x4dVhISmNiaTh2TWlCM2FYUm9iM1YwSUdsdWJHbHVaU0J0WlhSb2IyUnpYSEpjYmk4dklHWjFibU4wYVc5dUlHSnBibVFvWm00c0lHTnZiblJsZUhRc0lDNHVMbkpsYzNRcElIdGNjbHh1THk4Z1hIUnlaWFIxY200Z1puVnVZM1JwYjI0b0xpNHVZWEpuY3lrZ2UxeHlYRzR2THlCY2RGeDBZMjl1YzNRZ2RXNXBjVWxrSUQwZ1JHRjBaUzV1YjNjb0tTNTBiMU4wY21sdVp5Z3BPMXh5WEc0dkx5QmNkRngwWTI5dWRHVjRkRnQxYm1seFNXUmRJRDBnWm00N1hISmNiaTh2SUZ4MFhIUmpiMjV6ZENCeVpYTjFiSFFnUFNCamIyNTBaWGgwVzNWdWFYRkpaRjBvTGk0dWNtVnpkQzVqYjI1allYUW9ZWEpuY3lrcE8xeHlYRzR2THlCY2RGeDBaR1ZzWlhSbElHTnZiblJsZUhSYmRXNXBjVWxrWFR0Y2NseHVMeThnWEhSY2RISmxkSFZ5YmlCeVpYTjFiSFE3WEhKY2JpOHZJRngwZlZ4eVhHNHZMeUI5WEhKY2JseHlYRzR2THpNZ1JWTWdOVnh5WEc0dkx5Qm1kVzVqZEdsdmJpQmlhVzVrS0dadUxDQmpiMjUwWlhoMEtTQjdYSEpjYmk4dklGeDBZMjl1YzNRZ2NtVnpkQ0E5SUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV6YkdsalpTNWpZV3hzS0dGeVozVnRaVzUwY3l3Z1lYSm5RWEp5WVhrZ01pazdYSEpjYmk4dklGeDBjbVYwZFhKdUlHWjFibU4wYVc5dUtDa2dlMXh5WEc0dkx5QmNkRngwY21WMGRYSnVJR1p1TG1Gd2NHeDVLR052Ym5SbGVIUXNJR0Z5WjNWdFpXNTBjeWs3WEhKY2JpOHZJRngwZlZ4eVhHNHZMeUI5WEhKY2JpOHZJR0pwYm1Rb2FXNW1ieXdnY0dWeWMyOXVLU2duTVRJeU16UTFKeXdnSjNaQWJXRnBiQzV5ZFNjcE8xeHlYRzR2THlCaWFXNWtLR2x1Wm04c0lIQmxjbk52Yml3Z0p6RXlNak0wTlNjcEtDZDJRRzFoYVd3dWNuVW5LVHRjY2x4dUx5OGdZbWx1WkNocGJtWnZMQ0J3WlhKemIyNHNJQ2N4TWpJek5EVW5MQ2QyUUcxaGFXd3VjblVuS1NncE8xeHlYRzR2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNjbHh1THk4Z2FXNW1ieTVpYVc1a0tIQmxjbk52Ymlrb0p6RXlNak0wTlNjc0lDZDJRRzFoYVd3dWNuVW5LVHRjY2x4dUx5OGdhVzVtYnk1aWFXNWtLSEJsY25OdmJpd2dKekV5TVRJek1pY3BLQ2QyUUcxaGFXd3VjblVuS1R0Y2NseHVMeThnYVc1bWJ5NWlhVzVrS0hCbGNuTnZiaXdnSnpFeU1USXpNaWNzSUNkMlFHMWhhV3d1Y25VbktTZ3BPMXh5WEc0dkx5Qm1kVzVqZEdsdmJpQm9aV3hzYnlncElIdGNjbHh1THk4Z1hIUmpiMjV6YjJ4bExteHZaeWduU0dWc2JHOG5MQ0IwYUdsektUdGNjbHh1THk4Z2ZWeHlYRzR2THlCb1pXeHNieWdwTzF4eVhHNWNjbHh1THk4Z1kyOXVjM1FnY0dWeWMyOXVJRDBnZTF4eVhHNHZMeUJjZEc1aGJXVTZJQ2RXYVhSaGJHbHBKeXhjY2x4dUx5OGdYSFJoWjJVNklESTJMRnh5WEc0dkx5QmNkSE5oZVVobGJHeHZPaUJvWld4c2J5eGNjbHh1THk4Z1hIUnpZWGxJWld4c2IxZHBibVJ2ZHpvZ2FHVnNiRzh1WW1sdVpDaDNhVzVrYjNjcExGeHlYRzR2THlCY2RHeHZaMGx1Wm04NklHWjFibU4wYVc5dUtHcHZZaXdnY0dodmJtVXBJSHRjY2x4dUx5OGdYSFJjZEdOdmJuTnZiR1V1WjNKdmRYQW9ZQ1I3ZEdocGN5NXVZVzFsZlNCcGJtWnZPaUJnS1Z4eVhHNHZMeUJjZEZ4MFkyOXVjMjlzWlM1c2IyY29ZRTVoYldVZ2FYTWdKSHQwYUdsekxtNWhiV1Y5SUdGdVpDQmhaMlVnYVhNZ0pIdDBhR2x6TG1GblpYMWdLVHRjY2x4dUx5OGdYSFJjZEdOdmJuTnZiR1V1Ykc5bktHQktiMklnYVhNZ0pIdHFiMko5WUNrN1hISmNiaTh2SUZ4MFhIUmpiMjV6YjJ4bExteHZaeWhnVUdodmJtVWdhWE1nSkh0d2FHOXVaWDFnS1R0Y2NseHVMeThnWEhSY2RHTnZibk52YkdVdVozSnZkWEJGYm1Rb0tUdGNjbHh1THk4Z1hIUjlYSEpjYmk4dklIMWNjbHh1WEhKY2JpOHZJR052Ym5OMElHeGxibUVnUFNCN1hISmNiaTh2SUZ4MGJtRnRaVG9nSjBWc1pXNWhKeXhjY2x4dUx5OGdYSFJoWjJVNklESXpYSEpjYmk4dklIMWNjbHh1WEhKY2JpOHZJQzh2SUhCbGNuTnZiaTVzYjJkSmJtWnZMbUpwYm1Rb2JHVnVZU3dnSjBaeWIyNTBaVzVrSnl3Z0p6ZzVPVEF6TWprMEp5a29LVHRjY2x4dVhISmNiaTh2SUM4dklIQmxjbk52Ymk1c2IyZEpibVp2TG1OaGJHd29iR1Z1WVN3Z0owWnliMjUwWlc1a0p5d2dKemc1T1RBek1qazBKeWs3WEhKY2JpOHZJSEJsY25OdmJpNXNiMmRKYm1adkxtRndjR3g1S0d4bGJtRXNJRnNuUm5KdmJuUmxibVFuTENBbk9EazVNRE15T1RRblhTazdYSEpjYmx4eVhHNHZMeUF2THowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNibHh5WEc0dkx5QmpiMjV6ZENCaGNuSmhlU0E5SUZzeExDQXlMQ0F6TENBMExDQTFYVHRjY2x4dUx5OGdMeThnWm5WdVkzUnBiMjRnYlhWc2RFSjVLR0Z5Y2l3Z2Jpa2dlMXh5WEc0dkx5QXZMeUJjZEhKbGRIVnliaUJoY25JdWJXRndLR1oxYm1OMGFXOXVLR2twSUh0Y2NseHVMeThnTHk4Z1hIUmNkSEpsZEhWeWJpQnBJQ29nYmp0Y2NseHVMeThnTHk4Z1hIUjlLVHRjY2x4dUx5OGdMeThnZlZ4eVhHNWNjbHh1THk4Z1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG0xMWJIUkNlU0E5SUdaMWJtTjBhVzl1S0c0cElIdGNjbHh1THk4Z1hIUnlaWFIxY200Z2RHaHBjeTV0WVhBb1puVnVZM1JwYjI0b2FTa2dlMXh5WEc0dkx5QmNkRngwY21WMGRYSnVJR2tnS2lCdU8xeHlYRzR2THlCY2RIMHBPMXh5WEc0dkx5QjlYSEpjYmx4eVhHNHZMeUJqYjI1emIyeGxMbXh2WnloaGNuSmhlUzV0ZFd4MFFua29NaWtwTzF4eVhHNHZMeUJqYjI1emRDQmhjbkl5SUQwZ1d6VXNJREV3TENBeE5WMDdYSEpjYmk4dklHTnZibk52YkdVdWJHOW5LR0Z5Y2pJdWJYVnNkRUo1S0RNcEtUc2lYWDA9In0=
