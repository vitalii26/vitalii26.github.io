let movies = [];
const submitBtn = document.querySelector('.film__form-submit');
const filmTitle = document.querySelector('#filmTitle');
const filmType = document.querySelector('#filmType');
const filmPaginationStatus = document.querySelector('.film__pagination-status');
const filmPaginationPrev = document.querySelector('.film__pagination-prev');
const filmPaginationNext = document.querySelector('.film__pagination-next');

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
const info = document.querySelector('.info');
const filmList = document.querySelector('#filmList');
function addMovies(title, type, id) {
	const filmListItem = generateElement('li', 'film__list-item');
	const filmListInner = generateElement('div', 'film__list-inner');
	const filmListTitle = generateElement('h3', 'film__list-item-title');
	const filmListText = generateElement('p', 'film__list-item-text');
	const filmListBtn = generateElement('button', 'film__list-item-btn');
	filmList.append(filmListItem);
	filmListItem.append(filmListInner);
	filmListBtn.setAttribute('data-id', id);
	filmListBtn.innerHTML = 'details';
	insertElementIntoParent([filmListTitle, filmListText, filmListBtn], filmListInner);
	filmListTitle.innerHTML = title;
	filmListText.innerHTML = type;
}

function addInfo(title, type, year, poster, genre, actors, country, rating) {
	const filmInfo = generateElement('div', 'film__info');
	const filmInfoImgWrap = generateElement('div', 'film__info-img-wrap');
	const filmInfoWrap = generateElement('div', 'film__info-wrap');
	const filmImg = generateElement('img', 'film__info-img');
	const filmInfoType = generateElement('p', 'film__info-type');
	const filmInfoGenre = generateElement('p', 'film__info-genre');
	const filmInfoActors = generateElement('p', 'film__info-actors');
	const filmInfoCountry = generateElement('p', 'film__info-country');
	const filmInfoRating = generateElement('p', 'film__info-rating');
	const filmInfoTitle = generateElement('h3', 'film__info-title');
	const filmInfoYear = generateElement('h4', 'film__info-year');
	filmInfoImgWrap.append(filmImg);
	info.append(filmInfo);
	insertElementIntoParent([filmInfoImgWrap, filmInfoWrap], filmInfo);
	insertElementIntoParent([filmInfoTitle, filmInfoYear, filmInfoType, filmInfoGenre, filmInfoActors, filmInfoCountry, filmInfoRating], filmInfoWrap);
	filmImg.setAttribute('src', poster);
	filmInfoType.innerHTML = `Type: ${type}`;
	filmInfoTitle.innerHTML = title;
	filmInfoYear.innerHTML = `Year: ${year}`;
	filmInfoGenre.innerHTML = `Genre: ${genre}`;
	filmInfoActors.innerHTML = `Actors: ${actors}`;
	filmInfoCountry.innerHTML = `Country: ${country}`;
	filmInfoRating.innerHTML = `IMDBRating: ${rating}`;
}
let page = 1;
let pages = 1;
submitBtn.addEventListener('click', (e) => {
	page = 1;
	let url = `http://www.omdbapi.com/?apikey=2a2c5021&s=${filmTitle.value}&type=${filmType.value}&page=${page}`;
	e.preventDefault();
	filmList.innerHTML = '';
	if (filmTitle.value) {
		fetch(url)
		.then((response) => {
			if (response.status !== 200) {
				console.log(`We have a problem. Status Code: ${response.status}`);
				return;
			} else {
				response.json()
				.then((data) => {
					if (data.Response === 'True') {
						console.log(data);
						pages = Math.ceil(data.totalResults/10);
						filmPaginationStatus.innerHTML = `${page} of ${pages}`;
						data.Search.forEach((element) => addMovies(element.Title, element.Type, element.imdbID));

					} else {
						filmList.innerHTML = data.Error;
					}

				})
			}
		})
		.catch((err) => {
			console.error(err);

		})
	}
});
filmList.addEventListener('click', (event) => {
	if (event.target.className == 'film__list-item-btn') {
		info.innerHTML = movies;
		let filmId = event.target.getAttribute('data-id');
		let url = `http://www.omdbapi.com/?apikey=2a2c5021&i=${filmId}`;
		fetch(url)
		.then((response) => {
			if (response.status !== 200) {
				console.log(`We have a problem. Status Code: ${response.status}`);
				return;
			} else {
				response.json()
				.then((data) => {
					if (data.Response === 'True') {
						addInfo(data.Title, data.Type, data.Year, data.Poster, data.Genre, data.Actors, data.Country, data.imdbRating);
					} else {
						filmList.innerHTML = data.Error;
					}

				})
			}
		})
		.catch((err) => {
			console.error(err);

		})
	}
});

filmPaginationPrev.addEventListener('click', () => {
	if(page > 1) {
		page--;
	} else {
		page = 1;
	}
	let url = `http://www.omdbapi.com/?apikey=2a2c5021&s=${filmTitle.value}&type=${filmType.value}&page=${page}`;
	filmList.innerHTML = '';
	if (filmTitle.value) {
		fetch(url)
		.then((response) => {
			if (response.status !== 200) {
				console.log(`We have a problem. Status Code: ${response.status}`);
				return;
			} else {
				response.json()
				.then((data) => {
					if (data.Response === 'True') {
						console.log(data);
						let pages = Math.ceil(data.totalResults/10);
						filmPaginationStatus.innerHTML = `${page} of ${pages}`;
						data.Search.forEach((element) => addMovies(element.Title, element.Type, element.imdbID));

					} else {
						filmList.innerHTML = data.Error;
					}

				})
			}
		})
		.catch((err) => {
			console.error(err);

		})
	}
});
filmPaginationNext.addEventListener('click', () => {
		if (page < pages) {
			page++;
		} else {
			page = pages;
		}
	let url = `http://www.omdbapi.com/?apikey=2a2c5021&s=${filmTitle.value}&type=${filmType.value}&page=${page}`;
	filmList.innerHTML = '';
	if (filmTitle.value) {
		fetch(url)
		.then((response) => {
			if (response.status !== 200) {
				console.log(`We have a problem. Status Code: ${response.status}`);
				return;
			} else {
				response.json()
				.then((data) => {
					if (data.Response === 'True') {
						console.log(data);
						pages = Math.ceil(data.totalResults/10);
						filmPaginationStatus.innerHTML = `${page} of ${pages}`;
						data.Search.forEach((element) => addMovies(element.Title, element.Type, element.imdbID));

					} else {
						filmList.innerHTML = data.Error;
					}

				})
			}
		})
		.catch((err) => {
			console.error(err);

		})
	}
});

