document.addEventListener("DOMContentLoaded", function () {
    if (!hasTouch()) document.body.className += ' hasHover';
});

function clickMotion() {
    // Add a short delay to revert the :active state
    setTimeout(function () {
      var elems = document.querySelectorAll(".active");
      [].forEach.call(elems, function (el) {
        el.classList.remove("active");
      });
    }, 90);
}

function hasTouch() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}