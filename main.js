const modal = document.querySelector(".modal");
const cartButton = document.querySelector(".cart-button");
cartButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});
