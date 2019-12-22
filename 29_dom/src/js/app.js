///////////////1//////////////////
let playList = [{
	author: 'LED ZEPPELIN',
	song:'STAIRWAY TO HEAVEN'
},
{
	author: 'QUEEN',
	song:'BOHEMIAN RHAPSODY'
},
{
	author: 'LYNYRD SKYNYRD',
	song:'FREE BIRD'
},
{
	author: 'DEEP PURPLE',
	song:'SMOKE ON THE WATER'
},
{
	author: 'JIMI HENDRIX',
	song:'ALL ALONG THE WATCHTOWER'
},
{
	author: 'AC/DC',
	song:'BACK IN BLACK'
},
{
	author: 'QUEEN',
	song:'WE WILL ROCK YOU'
},
{
	author: 'METALLICA',
	song:'ENTER SANDMAN'
}];
const root = document.querySelector('#root');

const dom = document.createElement('div');
dom.classList.add('dom');
root.appendChild(dom);

const container = document.createElement('div');
container.classList.add('container');
dom.appendChild(container);

const ol = document.createElement('ol');
ol.classList.add('dom__list');
container.appendChild(ol);
playList.forEach(element => {
	const li = document.createElement('li');
	li.classList.add('dom__list-item');
	ol.appendChild(li);
	const p = document.createElement('p');
	p.classList.add('dom__list-text');
	p.textContent = `${element.author} - ${element.song}`;
	li.appendChild(p);
});
///////////////////2//////////////////////////////
const dom1 = document.createElement('div');
dom1.classList.add('dom');
root.appendChild(dom1);

const container1 = document.createElement('div');
container1.classList.add('container');
dom1.appendChild(container1);

const modalOpen = document.createElement('div');
modalOpen.classList.add('dom__modal-open');
container1.appendChild(modalOpen);

const openBtn = document.createElement('button');
openBtn.innerHTML = 'Открыть модальное окно';
openBtn.classList.add('dom__modal-open-btn');
modalOpen.appendChild(openBtn);

const modalInner = document.createElement('div');
modalInner.classList.add('dom__modal');
container1.appendChild(modalInner);

const modalWindow = document.createElement('div');
modalWindow.classList.add('dom__modal-inner');
modalInner.appendChild(modalWindow);

const modalWindowTitle = document.createElement('h4');
modalWindowTitle.classList.add('dom__modal-title');
modalWindowTitle.textContent = 'Модальное окно';
modalWindow.appendChild(modalWindowTitle);

const closeBtn = document.createElement('button');
closeBtn.innerHTML = 'Закрыть модальное окно';
closeBtn.classList.add('dom__modal-close-btn');
modalWindow.appendChild(closeBtn);

openBtn.addEventListener('click', () => {
	modalInner.classList.toggle('open');
	modalWindow.classList.toggle('open');
});
closeBtn.addEventListener('click', () => {
	modalInner.classList.toggle('open');
	modalWindow.classList.toggle('open');
});
//////////////////////3///////////////////////
const dom2 = document.createElement('div');
dom2.classList.add('dom');
root.appendChild(dom2);

const container2 = document.createElement('div');
container2.classList.add('container');
dom2.appendChild(container2);

const lights = document.createElement('div');
lights.classList.add('dom__lights');
container2.appendChild(lights);

const lightsInner = document.createElement('div');
lightsInner.classList.add('dom__lights-inner');
lights.appendChild(lightsInner);

const lightsInnerWrap = document.createElement('div');
lightsInnerWrap.classList.add('dom__lights-inner-wrap');
lightsInner.appendChild(lightsInnerWrap);

const lightsColorRed = document.createElement('div');
lightsColorRed.classList.add('dom__lights-color');
lightsColorRed.classList.add('red');
lightsInnerWrap.appendChild(lightsColorRed);

const lightsColorYellow = document.createElement('div');
lightsColorYellow.classList.add('dom__lights-color');
lightsColorYellow.classList.add('yellow');
lightsInnerWrap.appendChild(lightsColorYellow);

const lightsColorGreen = document.createElement('div');
lightsColorGreen.classList.add('dom__lights-color');
lightsColorGreen.classList.add('green');
lightsInnerWrap.appendChild(lightsColorGreen);

const lightsBtn = document.createElement('button');
lightsBtn.classList.add('dom__lights-btn');
lightsBtn.textContent = 'Переключить на другой цвет';
lightsInner.appendChild(lightsBtn);
const domLights = document.querySelectorAll('.dom__lights-color');

let i = domLights.length-1;
lightsBtn.addEventListener('click', () => {
	domLights[i].classList.remove("active");
	if(i == domLights.length-1) {
		i = 0;
	} else {
		i++;
	}
	domLights[i].classList.add("active");
});
