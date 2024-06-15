// Navigation
const dropdownItems = document.querySelectorAll(".dropdown-hover");

if (window.innerWidth < 1000) {
  const menuIcon = document.querySelector(".menu");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");

    if (!navbar.classList.contains("change")) {
      document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
        dropdown.style.left = "-20rem";
      });
    }
  });

  document.querySelectorAll(".show-dropdown").forEach((link) => {
    link.addEventListener("click", () => {
      link.nextElementSibling.style.left = "0";
    });
  });

  document.querySelectorAll(".dropdown-heading-link").forEach((headingLink) => {
    headingLink.addEventListener("click", () => {
      headingLink.parentElement.parentElement.style.left = "-20rem";
    });
  });
} else {
  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.addEventListener("mouseover", () => {
      dropdownItem.lastElementChild.style.cssText =
        "opacity: 1; visibility: visible";
    });
    dropdownItem.addEventListener("mouseout", () => {
      dropdownItem.lastElementChild.style.cssText =
        "opacity: 0; visibility: hidden";
    });
  });
}

window.addEventListener("resize", () => {
  window.location.reload();
});
// End of Navigation

// function openBusiness(businessName) {
//   let i;
//   let x = document.getElementsByClassName("business");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   document.getElementById(businessName).style.display = "flex";  
// }

function openBusiness(evt, businessName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("business");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(businessName).style.display = "flex";
  evt.currentTarget.className += " active";
}


