/////////////////1//////////////////
let shoppingList = [];
if (localStorage.getItem('sList') != undefined) ? JSON.parse(localStorage.getItem('sList')) : [];
showProducts(shoppingList);

function generateElement(tagName, className = '') {
	const el = document.createElement(tagName);
	if (className) {
		el.classList.add(className);
	}

	return el;
}

function insertElementIntoParent(elements, parentElement) {
	elements.forEach(element => {
		parentElement.appendChild(element);
	})
}

function createProductItem(name, quantity, check) {
	const slList = document.getElementById('sl-list');
	const slListItem = generateElement('li', 'sl__list-item');
	const slListProduct = generateElement('div', 'sl__list-product');
	const slProductName = generateElement('h4', 'sl__list-product-name');
	const slProductQuantity = generateElement('p', 'sl__list__product-quantity');
	const slProductCheck = generateElement('p', 'sl__list__product-check');

	slProductName.innerText = name;
	slProductQuantity.innerText = `Количество: ${quantity}`;
	slProductCheck.innerText = `Куплен: ${check}`;

	const productDescription = [slProductName, slProductQuantity, slProductCheck];
	slList.appendChild(slListItem);
	slListItem.appendChild(slListProduct);
	insertElementIntoParent(productDescription, slListProduct);
}
function addProductItem(a, quantity) {
	let temp = {};
	temp.name = a;
	temp.quantity = quantity;
	temp.check = false;
	shoppingList.push(temp);
}
function showProducts(array) {
	array.sort(function (element) {
		if (element.check === false) {
			return -1;
		}
	});
	array.forEach((element) {
		createProductItem(element.name, element.quantity, element.check);
	});

}


function  buyProduct(name) {
	shoppingList.forEach((element) => {
		if (element.name === name) {
			element.check = true;
		}
	});
}
function  buyNoProduct(name) {
	shoppingList.forEach((element) => {
		if (element.name === name) {
			element.check = false;
		}
	});
}
// const checkProduct = (name, quantity) => {
// 	shoppingList.forEach((element) => {
// 		if (element.name === name) {
// 			element.check += check;
// 			localStorage.setItem('sList', JSON.stringify(shoppingList));
// 		} else {
// 			addProductItem(name, quantity);
// 			createProductItem(name, quantity, false);
// 			localStorage.setItem('sList', JSON.stringify(shoppingList));
// 		}
// 	});
// }
document.querySelector('#addBtn').addEventListener('click', () => {
	let addName = document.querySelector('#addName').value;
	let addQuantity = document.querySelector('#addQuantity').value;
	addProductItem(addName, addQuantity);
	createProductItem(addName, addQuantity, false);
	localStorage.setItem('sList', JSON.stringify(shoppingList));
});
document.querySelector('#buyBtn').addEventListener('click', () => {
	let buyName = document.querySelector('#buyName').value;
	buyProduct(buyName);
	localStorage.setItem('sList', JSON.stringify(shoppingList));
});
document.querySelector('#buyNoBtn').addEventListener('click', () => {
	let buyName = document.querySelector('#buyName').value;
	buyNoProduct(buyName);
	localStorage.setItem('sList', JSON.stringify(shoppingList));
});
// showProducts(JSON.parse(localStorage.getItem('sList')));

