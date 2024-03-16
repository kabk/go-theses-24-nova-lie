document.addEventListener("DOMContentLoaded", function () {
  // When the user scrolls down 20px from the top of the document, show the button
  window.addEventListener("scroll", function () {
    var button = document.getElementById("myBtn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // Attach click event listener to the button
  const button = document.getElementById("myBtn");
  button.addEventListener("click", topFunction);

  // Smooth scroll to target element
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").substr(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var windowHeight = window.innerHeight;
        var elementOffsetTop = targetElement.offsetTop;
        var scrollPosition =
          elementOffsetTop - windowHeight / 2 + targetElement.offsetHeight / 2;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
