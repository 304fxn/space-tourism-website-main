// home js index

// top-bar navigation menu for mobile/tablet
const hamburgerBtn = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");
const primaryNav = document.getElementById("primary-nav");
const navLinksSpan = document.querySelector(".number-of-item-nav");

hamburgerBtn.addEventListener("click", function () {
  const visibility = navigation.getAttribute("data-visible");
  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    hamburgerBtn.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navigation.setAttribute("data-visible", false);
    hamburgerBtn.setAttribute("aria-expanded", false);
  }
});
// end navigation menu for mobile/tablet
