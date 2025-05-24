/** @type {HTMLButtonElement} */
add = document.querySelector('#add');
/** @type {HTMLDivElement} */
toDo = document.querySelector('.to-do');

add.addEventListener('click', () => {
	let problem = prompt('Введите задачу', '');
	let description = prompt('Введите описание', '');
	let htmlCart = `<div class="cart">
    <h1>${problem}</h1>
    <p>${description}</p>
    <button id="del">Удалить</button>
    <button id="red">Редактировать</button>
   </div>`;
	let div = document.createElement('div');
	div.innerHTML = htmlCart;
	div.classList.toggle('style-carts', true);
	toDo.appendChild(div);

	const del = div.querySelector('#del');
	del.addEventListener('click', () => {
		toDo.removeChild(div);
	});
  const red = div.querySelector('#red');
	red.addEventListener('click', () => {
    const problem = prompt('Введите задачу', '');
		const description = prompt('Введите описание', '');
    const h1 = div.querySelector('h1');
    h1.textContent = problem;
    const p = div.querySelector('p');
    p.textContent = description
	});
});
