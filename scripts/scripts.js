const closeButtonPopup = document.querySelector(".popup__cancel");
const openButtonPopup = document.querySelector(".button-open");
const authPopup = document.querySelector(".popup");

function togglePopup() {
    authPopup.classList.toggle("popup_opened")
}

openButtonPopup.addEventListener("click", togglePopup);
closeButtonPopup.addEventListener("click", togglePopup);