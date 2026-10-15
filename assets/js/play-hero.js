(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // CSS handles reduced motion for the drawn lines; the moving ball and Foles'
  // shift are SVG animations, so jump them straight to their final frame.
  function settle(svg) {
    if (reduceMotion && svg && svg.setCurrentTime) {
      svg.setCurrentTime(10);
      svg.pauseAnimations();
    }
  }

  document.querySelectorAll(".play-hero svg").forEach(settle);

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".ph-replay");
    if (!button) return;

    // A fresh clone restarts both the CSS animations and the SVG's own timeline.
    var hero = button.closest(".play-hero");
    var fresh = hero.cloneNode(true);
    hero.replaceWith(fresh);

    var svg = fresh.querySelector("svg");
    if (svg && svg.setCurrentTime) svg.setCurrentTime(0);
  });
})();
