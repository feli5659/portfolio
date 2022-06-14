const navBar = document.querySelector(".main-nav");
const menuToggleBtn = document.querySelector(".menu-toggle");

menuToggleBtn.addEventListener("click", () => {

  menuToggleBtn.classList.toggle("active");
  navBar.classList.toggle("active");

  if (!navBar.classList.contains("active")) {
    menuToggleBtn.textContent = "MENU";
  } else {
    menuToggleBtn.textContent = "LUK";
  }
});
