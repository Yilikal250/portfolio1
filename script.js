const popup =document.querySelector('.popup');
const closeMenu =document.querySelector('.closeMenu');
const openMenu =document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show() {
    popup.style.display = 'flex';
}

function close() {
    popup.style.top ='-100%'
 }
