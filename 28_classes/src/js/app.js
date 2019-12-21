
class Circle {
	constructor (radius) {
		this._radius = radius;
	}

	get radius () {
		return this._radius;
	}

	set radius (a) {
		if (!isNaN(+a) && +a > 0) {
			this._radius = a;
		} else {
			return;
		}
	}

	get diameter () {
		return this.radius * 2;
	}

	circleArea () {
		return Math.round(Math.pow(this.radius, 2) * Math.PI);
	}

	circleLength () {
		return Math.round(2 * this.radius * Math.PI);
	}
}

let circle1 = new Circle (12);
circle1.radius = 'fds';
let circleAnswer = document.querySelector('#circleAnswer');
document.querySelector('#getRadiusBtn').addEventListener('click', () => {
	circleAnswer.textContent = `Радиус окружности: ${circle1.radius}`;
});

document.querySelector('#setRadiusBtn').addEventListener('click', () => {
	circle1.radius = document.querySelector('#setRadius').value;
	circleAnswer.textContent = `Радиус окружности: ${circle1.radius}`;
});

document.querySelector('#getDiameterBtn').addEventListener('click', () => {
	circleAnswer.textContent = `Диаметр окружности: ${circle1.diameter}`;
});

document.querySelector('#circleAreaBtn').addEventListener('click', () => {
	circleAnswer.textContent = `Площадь окружности: ${circle1.circleArea()}`;
});

document.querySelector('#circleLengthBtn').addEventListener('click', () => {
	circleAnswer.textContent = `Длинна окружности: ${circle1.circleLength()}`;
});
//////////2///////////////
class Marker {
	constructor (color, qtyInPercents) {
		this.color = color;
		this.qtyInPercents = qtyInPercents;
	}

	print (text, element) {
		if ((text.match(/[^\s]/g).length * 0.5) <= this.qtyInPercents && (text.match(/[^\s]/g).length * 0.5) > 0) {
			element.textContent = text;
			element.style.color = `${this.color}`;
			this.qtyInPercents = +this.qtyInPercents - (text.match(/[^\s]/g).length * 0.5);

		}
	}
}

class RefuelingMarker extends Marker {
	constructor(color, qtyInPercents) {
		super (color, qtyInPercents);
	}

	addFuel (fuel) {
		if (!isNaN(+fuel) && ((this.qtyInPercents + +fuel) <= 100) && ((this.qtyInPercents + +fuel) >= 0) && +fuel > 0) {
			this.qtyInPercents += +fuel;
		} else {
			return this.qtyInPercents;
		}
	}
}
let marker2 = new RefuelingMarker('red', 10);
marker2.addFuel(91);
console.log(marker2);

let markerAnswer = document.querySelector('#markerAnswer');
document.querySelector('#markerInfoBtn').addEventListener('click', () => {
	markerAnswer.textContent = `Цвет маркера: ${marker2.color}, осталось ${marker2.qtyInPercents} %.`;
});

document.querySelector('#getTextBtn').addEventListener('click', () => {
	let text = document.querySelector('#setText').value;
	marker2.print (text, markerAnswer);
});

document.querySelector('#addFuelBtn').addEventListener('click', () => {
	let fuelValue = document.querySelector('#fuelValue').value;
	marker2.addFuel (fuelValue);
	markerAnswer.textContent = `Осталось ${marker2.qtyInPercents} %.`;
});
//////////3///////////////
class Employee {
	constructor (name, age, position, experience) {
		this.name = name;
		this.age = age;
		this.position = position;
		this.experience = experience;
	}
}
const employees1 = [
new Employee('Dom', 56, 'Director', 15),
new Employee('Jeff', 24, 'Operator', 2),
new Employee('Tiffany', 37, 'Cashier', 7),
new Employee('Nick', 42, 'Сollector', 10)
];

class EmpTable {
	constructor (employees) {
		this.employees = employees;
	}
	getHTML () {
		const table = document.createElement('table');
		table.classList.add('ar__table');
		document.querySelector(`#listAnswer`).appendChild(table);
		const tr = document.createElement('tr');
		tr.classList.add('ar__table-tr');
		table.appendChild(tr);
		const th1 = document.createElement('th');
		th1.classList.add('ar__table-header');
		th1.textContent = 'Имя';
		tr.appendChild(th1);
		const th2 = document.createElement('th');
		th2.classList.add('ar__table-header');
		th2.textContent = 'Возраст';
		tr.appendChild(th2);
		const th3 = document.createElement('th');
		th3.classList.add('ar__table-header');
		th3.textContent = 'Должность';
		tr.appendChild(th3);
		const th4 = document.createElement('th');
		th4.classList.add('ar__table-header');
		th4.textContent = 'Опыт';
		tr.appendChild(th4);

		this.employees.forEach(element => {
			this.name = element.name;
			this.age = element.age;
			this.position = element.position;
			this.experience = element.experience;
			const tr = document.createElement('tr');
			tr.classList.add('ar__table-tr');
			table.appendChild(tr);
			const td1 = document.createElement('td');
			td1.classList.add('ar__table-cell');
			td1.textContent = `${this.name}`;
			tr.appendChild(td1);
			const td2 = document.createElement('td');
			td2.classList.add('ar__table-cell');
			td2.textContent = `${this.age}`;
			tr.appendChild(td2);
			const td3 = document.createElement('td');
			td3.classList.add('ar__table-cell');
			td3.textContent = `${this.position}`;
			tr.appendChild(td3);
			const td4 = document.createElement('td');
			td4.classList.add('ar__table-cell');
			td4.textContent = `${this.experience}`;
			tr.appendChild(td4);
		});
	}
}
console.log(employees1);
let vit = new EmpTable (employees1);
vit.getHTML();
