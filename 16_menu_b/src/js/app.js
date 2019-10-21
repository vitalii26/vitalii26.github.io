const selectElement = (element) => document.querySelector(element);
selectElement('.home__menu-icons').addEventListener('click', () => {
	selectElement('.home__menu').classList.toggle('active');
});