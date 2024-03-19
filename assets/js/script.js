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

        window.scrollTo({
          top:
            elementOffsetTop -
            windowHeight / 2 +
            targetElement.offsetHeight / 2 +
            0,
          behavior: "instant",
        });
      }
    });
  });
});
