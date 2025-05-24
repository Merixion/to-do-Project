/** @type {HTMLButtonElement} */
add = document.querySelector('#add');
/** @type {HTMLDivElement} */
toDo = document.querySelector('#to-do');
let columns = document.querySelectorAll('.column');

columns.forEach(column => {
	column.addEventListener('dragover', e => e.preventDefault());

	column.addEventListener('drop', event => {
		event.preventDefault();
		const cart = document.getElementById(event.dataTransfer.getData('text/plain'));
		column.appendChild(cart);
	});
});

add.addEventListener('click', () => {
	let problem = prompt('Введите задачу', ' ');
	let description = prompt('Введите описание', ' ');
	let htmlCart = `<div class="cart">
      <h1>Задача: ${problem}</h1>
      <p>Проблема: ${description}</p>
      <button class="del">Удалить</button>
      <button class="red">Редактировать</button>
     </div>`;
	let div = document.createElement('div');
	div.innerHTML = htmlCart;
	div.setAttribute('draggable', true);
	div.classList.toggle('style-carts', true);
	toDo.appendChild(div);
	div.id = 'cart-' + Date.now();
	div.addEventListener('dragstart', event => {
		event.dataTransfer.setData('text/plain', div.id);
		div.style.background = 'red';
	});

	div.addEventListener('dragend', () => {
		div.style.background = '#84c512';
	});
	const del = div.querySelector('.del');
	del.addEventListener('click', () => {
		div.remove();
	});
	const red = div.querySelector('.red');
	red.addEventListener('click', () => {
		const p = div.querySelector('p');
		const h1 = div.querySelector('h1');
		const problem = prompt(`Старая ${h1.textContent.toLowerCase()}`, ' ');
		const description = prompt(`Старая ${p.textContent.toLowerCase()}`, ' ');
		h1.textContent = `Задача: ${problem}`;
		p.textContent = `Проблема: ${description}`;
	});
});
