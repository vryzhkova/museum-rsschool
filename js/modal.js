const ticketButton = document.querySelector(".ticket__button");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".close-button");

ticketButton.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal-show");
});

modalCloseButton.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("modal-show");
});