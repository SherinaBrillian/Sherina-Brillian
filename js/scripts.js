// window.addEventListener("DOMContentLoaded", (event) => {
//   // Activate Bootstrap scrollspy on the main nav element
//   const mainNav = document.body.querySelector("#mainNav");
//   if (mainNav) {
//     new bootstrap.ScrollSpy(document.body, {
//       target: "#mainNav",
//       offset: 74,
//     });
//   }

//   // Collapse responsive navbar when toggler is visible
//   const navbarToggler = document.body.querySelector(".navbar-toggler");
//   const responsiveNavItems = [].slice.call(
//     document.querySelectorAll("#navbarResponsive .nav-link")
//   );
//   responsiveNavItems.map(function (responsiveNavItem) {
//     responsiveNavItem.addEventListener("click", () => {
//       if (window.getComputedStyle(navbarToggler).display !== "none") {
//         navbarToggler.click();
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const navbarItems = document.querySelectorAll("#navbarResponsive .nav-link");

  window.addEventListener("scroll", () => {
    navbarItems.forEach((item) => {
      const href = item.getAttribute("href").slice(1);
      const section = document.getElementById(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      }
    });
  });
});

function validateForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var message = document.getElementById("message");

  var nameInvalid = document.getElementById("name-invalid");
  var emailInvalid = document.getElementById("email-invalid");
  var phoneInvalid = document.getElementById("phone-invalid");
  var messageInvalid = document.getElementById("message-invalid");

  // cek yang invalid
  if (name.value == "") {
    name.focus();
    nameInvalid.style.display = "block";
    return false;
  }

  if (email.value == "") {
    email.focus();
    emailInvalid.style.display = "block";
    return false;
  }

  if (phone.value == "") {
    phone.focus();
    phoneInvalid.style.display = "block";
    return false;
  }

  if (message.value == "") {
    message.focus();
    messageInvalid.style.display = "block";
    return false;
  }
}
