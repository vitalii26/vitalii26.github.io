 let area = null;
 let view = document.getElementById('view');

 document.addEventListener('keydown', function(event) {
 	if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
 		editStart();
 		event.preventDefault();
 	}

 });

 function editStart() {
 	area = document.createElement('textarea');
 	area.className = 'event__edit-window';
 	area.value = view.innerHTML;

 	document.addEventListener('keydown', function(event) {
 		if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
 			editEnd();
 			event.preventDefault()
 		}
 	});

 	view.replaceWith(area);
 	area.focus();
 }

 function editEnd() {
 	view.innerHTML = area.value;
 	area.replaceWith(view);
 }
////////////////2////////////////////

const table = document.getElementById('table');
table.addEventListener('click', function(event) {
	if (event.target.tagName != 'TH') return;
	let th = event.target;
	sortGrid(th.cellIndex, th.dataset.type);
});

function sortGrid(colNum, type) {
	let tbody = table.querySelector('tbody');

	let rowsArray = Array.from(tbody.rows);
	let compare;

	switch (type) {
		case 'number':
		compare = function(rowA, rowB) {
			return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
		};
		break;
		case 'string':
		compare = function(rowA, rowB) {
			return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML? 1 : -1;
		};
		break;
	}

	rowsArray.sort(compare);

	tbody.append(...rowsArray);
}
////////////////3////////////////////
var element = document.querySelector('.event__element');
var resizer = document.createElement('div');
resizer.className = 'event__resizer';
element.appendChild(resizer);
resizer.addEventListener('mousedown', initResize);

function initResize(e) {
   window.addEventListener('mousemove', Resize);
   window.addEventListener('mouseup', stopResize);
}
function Resize(e) {
	if (e.clientX - element.offsetLeft > 1140) return;
   element.style.width = (e.clientX - element.offsetLeft) + 'px';
   element.style.height = (e.clientY - element.offsetTop) + 'px';
}
function stopResize(e) {
    window.removeEventListener('mousemove', Resize);
    window.removeEventListener('mouseup', stopResize);
}