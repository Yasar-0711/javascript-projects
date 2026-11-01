
const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {

  panel.addEventListener("click", function () {
    // remove .active class from all panels
    panels.forEach((p) => p.classList.remove("active"));

    // add .active class to the selected panel
    panel.classList.add("active");
  })
})