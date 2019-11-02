document.querySelector('.cookie__button').addEventListener('click',
 function () {
	document.querySelector('.cookie').style.display ='none';
});
document.querySelector('.hire__button').addEventListener('click',
 function () {
	document.querySelector('.modal').style.display ='block';
});
document.querySelector('.modal__close').addEventListener('click',
 function () {
	document.querySelector('.modal').style.display ='none';
});
document.querySelector('.hire__btn').addEventListener('click',
 function () {
	document.querySelector('.modal').style.display ='block';
});
document.querySelector('.home__burger').addEventListener('click',
 function () {
	document.querySelector('.menu').style.display ='block';
});
document.querySelector('.menu__close').addEventListener('click',
 function () {
	document.querySelector('.menu').style.display ='none';
});

// const selectElement = (element) => document.querySelector(element);
// selectElement('.home__menu-icons').addEventListener('click', () => {
// 	selectElement('.home__menu').classList.toggle('active');
// });