const generateElement = (tagName, className = '') => {
	const el = document.createElement(tagName);
	if (className) {
		el.classList.add(className);
	}

	return el;
}

const insertElementIntoParent = (elements, parentElement) => {
	elements.forEach(element => {
		parentElement.appendChild(element);
	})
}

const createProductItem = ({ id, title, description, price, weight, size, img_url }) => {

	const col = generateElement('div', 'col-lg-4');
	col.classList.add('col-12');
	col.classList.add('col-md-6');
	const itemInner = generateElement('div', 'p__item-inner');
	const itemPhotoWrap = generateElement('div', 'p__item-photo-wrap');
	const itemPhoto = generateElement('img', 'p__item-photo');
	const itemDescriptionWrapper = generateElement('div', 'p__item-description__wrapper');
	const itemTitle = generateElement('a', 'p__item-title');
	const itemWeight = generateElement('p', 'p__item-weight');
	const itemDescription = generateElement('p', 'p__item-description');
	const itemSize = generateElement('p', 'p__item-size');
	const itemPrice = generateElement('span', 'p__item-price');
	const itemButton = generateElement('button', 'p__item-btn');

	itemButton.innerText = 'В коробку';

	itemPhoto.setAttribute('src', img_url);
	itemPhoto.setAttribute('alt', title);
	itemButton.setAttribute('data-id', id);
	itemTitle.innerText = title;
	itemSize.innerText = `Диаметр: ${size} см`;
	itemPrice.innerText = `${price} грн`;
	itemWeight.innerText = `${weight}г`;
	itemDescription.innerText = description;

	col.appendChild(itemInner);

	const wrappedGrid = [itemPhotoWrap, itemPrice, itemButton];
	const wrappedImageWrap = [itemPhoto, itemDescriptionWrapper];
	const wrappedContent = [itemTitle, itemWeight, itemDescription, itemSize];

	insertElementIntoParent(wrappedGrid, itemInner);
	insertElementIntoParent(wrappedImageWrap, itemPhotoWrap);
	insertElementIntoParent(wrappedContent, itemDescriptionWrapper);

	return col;
}

export const renderProducts = (products) => {
	const grid = document.getElementById('pizzaRow');

	products.forEach(product => {
		grid.appendChild(createProductItem(product));
	})
}