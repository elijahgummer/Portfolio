const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
};
cancelBtn.onclick = () => {
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

const imageContainers = document.querySelectorAll(
  "#projects .container .content-container .card .image-container"
);

imageContainers.forEach((container) => {
  const img = container.querySelector("img");
  container.addEventListener("mouseenter", () => {
    img.style.transform = "translateY(-100%)";
  });
  container.addEventListener("mouseleave", () => {
    img.style.transform = "translateY(0)";
  });
});
