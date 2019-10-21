const hamburger = document.querySelector('.hamburger');
const homeList = document.querySelector('.home__list');
const links = document.querySelectorAll('.home__link');


hamburger.addEventListener('click', () => {
	homeList.classList.toggle('open');
	hamburger.classList.toggle('toggle');
});