let expandbtn = document.querySelector(".nav-menu");
let clickbtn = document.querySelector("#hidden-button");

// Check if elements exist to avoid errors
if (expandbtn && clickbtn) {
  clickbtn.addEventListener("click", () => {
    // Toggle the hidden-menu class
    expandbtn.classList.toggle("hidden-menu");

    // Update button text based on menu state
    if (expandbtn.classList.contains("hidden-menu")) {
      clickbtn.textContent = "expand ▽"; // Text when menu is hidden
    } else {
      clickbtn.textContent = "close ^"; // Text when menu is shown
    }
  });
} else {
  console.error("Could not find .nav-menu or .hidden-button elements");
}

//-------------------------------------------------------------------------------------------------------- ✅ Smooth Scroll for All Nav Links
// document.querySelectorAll(".nav-link").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetSection = document.querySelector(this.getAttribute("href"));
//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });
//----------------------------------------------------------------------------------------------------------------------now using event propagation  for scroll 
//event propagation is a technique involves two steps
//1- add event listener to the parent element of all the links inthis case to the ul tag of the navigation with class "nav-menu"

//2- select the target element on which we clicked and apply the event

document.querySelector(".nav-menu").addEventListener("click", function (e) {
  e.preventDefault();
  // e.target is the link on which we clicked
  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.getAttribute("href"));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});


