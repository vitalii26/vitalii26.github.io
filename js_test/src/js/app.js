const requestUrl = 'https://jsonplaceholder.typicode.com/users';
//fetch///
function sendRequest(method, url, body = null) {
	const headers = {
		'Content-Type': 'application/json'
	}
	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers
	}).then(response => {
		if (response.ok) {
			return response.json();
		}
		return response.json().then(error => {
			const e = new Error('Shit!!');
			e.data = error;
			throw e;
		})
	})
}

// sendRequest('GET', requestUrl)
// .then(data => console.log(data))
// .catch(err => console.log(error))

const body = {
	name: 'Vladilen',
	age: '26'
};

sendRequest('POST', requestUrl, body)
.then(data => console.log(data))
.catch(err => console.log(err))

///XMLHttpRequests/////
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