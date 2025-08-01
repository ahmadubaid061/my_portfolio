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
