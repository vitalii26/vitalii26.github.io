
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
		this.employees.forEach(element => {
			this.name = element.name;
			this.age = element.age;
			this.position = element.position;
			this.experience = element.experience;
			const li = document.createElement('li');
			li.classList.add('ar__list-item');
			const p = document.createElement('p');
			p.classList.add('ar__list-text');
			p.textContent = `Имя: ${this.name}, возраст: ${this.age}, должность: ${this.position}, стаж: ${this.experience} лет`;
			document.querySelector(`#listAnswer`).appendChild(li);
			li.appendChild(p);
		});
	}
}
console.log(employees1);
let vit = new EmpTable (employees1);
vit.getHTML();
