const cardButton = document.querySelector("#cart-button"),
         modal = document.querySelector(".modal"),
        close = document.querySelector(".close");
console.log(modal);


cardButton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
}

new WOW().init();