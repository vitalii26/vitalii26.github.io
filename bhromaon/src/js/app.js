const hamburger = document.querySelector('.bh-header__menu-burger');
const homeList = document.querySelector('.bh-header__menu-list');
const links = document.querySelectorAll('.home__link');

hamburger.addEventListener('click', () => {
	homeList.classList.toggle('open');
	hamburger.classList.toggle('toggle');
})