const clickBuy = document.querySelectorAll(".tour-buy-ticket");
const showModal = document.querySelector(".modal");
const clickClose = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal-container');

function buyTicket() {
  showModal.classList.add("modal-display");
}
for(const clickBuyBtn of clickBuy){
    clickBuyBtn.addEventListener('click', buyTicket);
}
function closeBuyTicket(){
    showModal.classList.remove('modal-display');
}
clickClose.addEventListener('click', closeBuyTicket);
showModal.addEventListener('click', closeBuyTicket);
modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})