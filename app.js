// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const button = document.querySelector('.modal-btn');
const close = document.querySelector('.close-btn');
const overlay = document.querySelector('.modal-overlay');


function open(){
 overlay.classList.add('open-modal');
}

function closeBtn(){
    overlay.classList.remove('open-modal')
}

button.addEventListener('click', open)
close.addEventListener('click', closeBtn);