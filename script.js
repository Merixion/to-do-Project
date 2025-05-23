/** @type {HTMLButtonElement} */
add = document.querySelector('#add');
/** @type {HTMLDivElement} */
toDo = document.querySelector('.to-do');


add.addEventListener('click', ()=>{
  let problem = prompt('Введите задачу', '');
  let description = prompt('Введите описание', '');
  let htmlCart = `<div class="cart">
    <h1>${problem}</h1>
    <p>${description}</p>
    <button>Удалить</button>
    <button>Редактировать</button>
   </div>`;
  let div = document.createElement('div');
  div.innerHTML = htmlCart;
  toDo.appendChild(div);
});