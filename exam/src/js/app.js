import Storage from './storageHelper';
import {renderProducts} from './render';

//Owl carousel
$(document).ready(function(){
$('#carousel1').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:{
        0:{
            items:1,
            dots: false
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
});
//Header scroll
window.addEventListener('scroll', () => {
	const mainHeader = document.querySelector('.p__header-cart-bottom');
	const menuRight = document.querySelector('.p__menu-right');

	if(window.pageYOffset > 40) {
		mainHeader.classList.add('none');
		menuRight.style.paddingTop = '40px';
	} else {
		mainHeader.classList.remove('none');
		menuRight.style.paddingTop = '90px';
	}
});
//Burger toggle
const hamburger = document.querySelector('.p__menu-icon__burger');
const homeList = document.querySelector('.p__menu-right');


hamburger.addEventListener('click', () => {
	homeList.classList.toggle('open');
	hamburger.classList.toggle('toggle');
});
////////////JSON
const productsReadyEventName = 'products_ready';
let productsReadyEvent = new Event(productsReadyEventName);

fetch('https://my-json-server.typicode.com/vitalii26/fakeserver/pizza')
.then(
	function(response) {
		if (response.status !== 200) {
			console.log(`Looks like there was a problem. Status Code: ${response.status}`);
			return;
		}

		response.json()
		.then((products) => {
			Storage.set('products', products);
			document.dispatchEvent(productsReadyEvent);
		});
	}
	)
.catch(function(err) {
	console.log('Fetch Error :-S', err);
});

document.addEventListener(productsReadyEventName, () => {
	// const loader = document.querySelector('#cube-loader');
	renderProducts(Storage.get('products'),  'pizza');
	// getCartValue();
	// loader.classList.add('hidden');
});
