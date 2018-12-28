var link = document.querySelector(".categories__list-link");
var popup = document.querySelector(".categories__list-wrapper");




link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add(".categories__modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains(".categories__modal-show")) {
      popup.classList.remove(".categories__modal-show");
    }
  }
});
