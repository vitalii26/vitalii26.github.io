///////////////1/////////////////////////
let shoppingList = [
{name: 'Молоко', quantity: 2, buy: false},
{name: 'Сахар', quantity: 4, buy: false},
{name: 'Хлеб', quantity: 1, buy: true},
{name: 'Мясо', quantity: 4, buy: false},
];
let slShowBtn = document.querySelector('#slShowBtn');
let slAnswer = document.querySelector('#slAnswer');
slShowBtn.addEventListener('click', () => {
	showList();
})

function showList() {
	shoppingList.sort(function (element) {
		if (element.buy < 1) {
			return -1;
		}
	});
	let answer = '';
	shoppingList.forEach(element =>
		answer += `Продукт: ${element.name}, количество: ${element.quantity}, куплен: ${element.buy} <br>`
		)
	slAnswer.innerHTML = answer;
}
let addName = document.querySelector('#addName');
let addBtn = document.querySelector('#addBtn');
let addQty = document.querySelector('#addQty');
let addError = document.querySelector('#addError');
function checkProduct() {
	let check = 0;
	shoppingList.forEach((element) => {
		if (element.name === addName.value) {
			element.quantity = +element.quantity;
			element.quantity += +addQty.value;
			check++;
		}
	});
	return (check > 0) ? true : false;
}
addBtn.addEventListener('click', function() {
	if (addName.value.length > 0 && addQty.value.length > 0 && !isNaN(+addQty.value)) {
		if(!checkProduct()) {
			shoppingList.push({
				name: addName.value,
				quantity: addQty.value,
				buy: false,});
		}
		addError.innerText = ``;
		showList();
	} else {
		addError.innerText = `Введите корректное значение`;
	}
});

let buyBtn = document.querySelector('#buyBtn');
let buyNoBtn = document.querySelector('#buyNoBtn');
let buyName = document.querySelector('#buyName');
function buyProduct() {
	shoppingList.forEach((element) => {
		if(element.name.toUpperCase() == buyName.value.toUpperCase()) {
			element.buy = true;
		}
	});
}
function buyNoProduct() {
	shoppingList.forEach((element) => {
		if(element.name.toUpperCase() == buyName.value.toUpperCase()) {
			element.buy = false;
		}
	});
}
buyBtn.addEventListener('click', function() {
	buyProduct();
	showList();
});
buyNoBtn.addEventListener('click', function() {
	buyNoProduct();
	showList();
});
///////////////2/////////////////////////
let checkList = [
{name: 'Сыр', quantity: 1, price: 180},
{name: 'Колбаса', quantity: 2, price: 220},
{name: 'Балык', quantity: 1, price: 350},
{name: 'Мандарины', quantity: 1, price: 50},
{name: 'Шампанское', quantity: 5, price: 150},
];
let chShowBtn = document.querySelector('#chShowBtn');
let chExpensiveBtn = document.querySelector('#chExpensiveBtn');
let chSumBtn = document.querySelector('#chSumBtn');
let chAverageBtn = document.querySelector('#chAverageBtn');
let chAnswer = document.querySelector('#chAnswer');
function showCheckList() {
	let check = ``;
	checkList.forEach(element =>
		check += `Наименование: ${element.name}, количество: ${element.quantity}, цена: ${element.price} грн <br>`
		)
	chAnswer.innerHTML = check;
}
chShowBtn.addEventListener('click', () => {
	showCheckList();
});
function mostExpensive() {
	checkList.sort(function (a, b) {
		if (a.price*a.quantity > b.price*b.quantity) {
			return -1;
		}
	});
	chAnswer.innerHTML = `Самая дорогая покупка: ${checkList[0].name}, на сумму: ${checkList[0].price*checkList[0].quantity} грн`;
}
chExpensiveBtn.addEventListener('click', () => {
	mostExpensive()
});

function chSum() {
	let sum = 0;
	sum = checkList.reduce(function(a, b) {
		return a + (b.price*b.quantity);
	}, 0);
	chAnswer.innerHTML = `Сумма покупок: ${sum} грн`;
	return sum;
}
chSumBtn.addEventListener('click', () => {
	chSum();
});
function chAverage() {
	let qty = checkList.reduce(function(a, b) {
		return a + (b.quantity);
	}, 0)
	chAnswer.innerHTML = `Средняя стоимость товара в чеке: ${ chSum()/ qty} грн`;
}
chAverageBtn.addEventListener('click', () => {
	chAverage();
});
///////////////3/////////////////////////
var styleArray = [
{color: 'blue'},
{fontSize: '20px'},
{textAlign: 'center'},
{textTransform: 'capitalize'},
{textDecoration: 'line-through'},
{textShadow: '1px 1px 1px grey'},
];
let addTextBtn = document.querySelector('#addTextBtn');
addTextBtn.addEventListener('click', () => {
	let valueArray = [];
	styleArray.forEach(element => {
		valueArray.push(Object.values(element).toString());
		console.log(valueArray);
	});
	let textInput = document.querySelector('#textInput').value;
	let textAnswer = document.querySelector('#textAnswer');
	textAnswer.innerHTML = textInput;
	textAnswer.style.color = valueArray[0];
	textAnswer.style.fontSize = valueArray[1];
	textAnswer.style.textAlign = valueArray[2];
	textAnswer.style.textTransform = valueArray[3];
	textAnswer.style.textDecoration = valueArray[4];
	textAnswer.style.textShadow = valueArray[5];
	textAnswer.innerText = textInput;
});
///////////////4/////////////////////////
let classrooms = [
{name: '101', seats: 20, faculty: 'Technological'},
{name: '102', seats: 12, faculty: 'Technological'},
{name: '201', seats: 20, faculty: 'Constructional'},
{name: '202', seats: 13, faculty: 'Constructional'},
{name: '301', seats: 14, faculty: 'Mechanical'},
{name: '302', seats: 20, faculty: 'Mechanical'},
{name: '401', seats: 12, faculty: 'Architectural'},
{name: '402', seats: 20, faculty: 'Architectural'},
];
const crAnswer = document.querySelector('#crAnswer');
const roomShowBtn = document.querySelector('#roomShowBtn');
const facultyBtn = document.querySelector('#facultyBtn');
const groupBtn = document.querySelector('#groupBtn');
const seatsSortBtn = document.querySelector('#seatsSortBtn');
const alphabetSortBtn = document.querySelector('#alphabetSortBtn');
function showClassrooms() {
	let rooms = ``;
	classrooms.forEach(element =>
		rooms += `Аудитория: ${element.name}, количество мест: ${element.seats}, факультет: ${element.faculty} <br>`
		);
	crAnswer.innerHTML = rooms;
}
roomShowBtn.addEventListener('click', () => {
	showClassrooms();
});
function showFaculty() {
	let facultyName = document.querySelector('#facultyName').value;
	let faculty = '';
	classrooms.forEach(element => {
		if (facultyName === element.faculty) {
			faculty += `Аудитория: ${element.name}, количество мест: ${element.seats}, факультет: ${element.faculty} <br>`
		}
		crAnswer.innerHTML = faculty;
	});
}
facultyBtn.addEventListener('click', () => {
	showFaculty();
});
function showRoomforGroup() {
	let groupFaculty = document.querySelector('#groupFaculty').value;
	let groupName = document.querySelector('#groupName').value;
	let groupSeats = document.querySelector('#groupSeats').value;
	let faculty = `Нет подходящих аудиторий`
	if (groupName.length > 0 && groupSeats > 0 && groupSeats <= 20 && !isNaN(groupSeats)) {
		faculty = `Для вашей группы: ${groupName} из ${groupSeats} человек ${groupFaculty} факультета подходит: <br>`;
		classrooms.forEach(element => {
			if (groupFaculty === element.faculty && groupSeats <= element.seats) {
				faculty += `Аудитория: ${element.name}, количество мест: ${element.seats}, факультет: ${element.faculty} <br>`
			}

		});
	}
	crAnswer.innerHTML = faculty;
}
groupBtn.addEventListener('click', () => {
	showRoomforGroup();
});
seatsSortBtn.addEventListener('click', function () {
  classrooms.sort(function (a, b) {
    if (a.seats < b.seats) {
      return -1;
    }
  });
  showClassrooms();
});
alphabetSortBtn.addEventListener('click', function () {
  classrooms.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
  });
  showClassrooms();
});