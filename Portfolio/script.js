var sidemenu = document.getElementById("sidemenu");
var closeIcon = document.getElementById("closeIcon");

      function openmenu() {
        closeIcon.style.display = "block";
        console.log("hello");
      }

      function closemenu() {
        sidemenu.classList.remove("active");
      }