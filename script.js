const mainMenue =document.querySelector('.mainMenu');
const closeMenu =document.querySelector('.closeMenu');
const openMenue =document.querySelector('.openMenu');


openMenue.addEventListener('click',show);
openMenue.addEventListener('click',close);

function show() {
   mainMenue.getElementsByClassName.display = 'flex';
   mainMenue.getElementsByClassName.top ='0'
}

function close() {
    mainMenue.style.top ='-100%'
 }


