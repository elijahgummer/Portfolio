var sidemenu = document.getElementById("sidemenu");

function toggleMenu() {
  if (window.innerWidth <= 600) {
    sidemenu.classList.toggle("active");
  } else {
    // Handle the logic for larger screens, if needed
  }
}
