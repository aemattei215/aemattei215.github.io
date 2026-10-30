(function () {
  var hero = document.querySelector(".draft-hero");
  if (!hero) return;

  var audio = hero.querySelector(".draft-hero__audio");
  var button = hero.querySelector(".draft-hero__sound");
  var clip = hero.querySelector(".draft-card__clip");
  var still = hero.querySelector(".draft-card__still");
  if (!audio || !button) return;

  // Banner lands at 0.63s (0.25s delay + 0.38s slide). That is when the chime starts.
  // The card and the toss fade in together at 5.05s, after the banner leaves.
  var BANNER_DELAY_MS = 630;
  var REVEAL_MS = 5050;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var clipTimer;

  function useStill() {
    if (!clip || !still) return;
    clip.hidden = true;
    still.hidden = false;
  }

  function startClip(delay) {
    if (!clip || clip.hidden) return;
    clearTimeout(clipTimer);
    clip.pause();
    try { clip.currentTime = 0; } catch (err) {}
    clipTimer = setTimeout(function () {
      var attempt = clip.play();
      if (attempt) attempt.catch(function () {});
    }, delay);
  }

  if (clip) {
    clip.muted = true;
    clip.addEventListener("error", useStill);
    if (reduceMotion) startClip(0);
    else startClip(REVEAL_MS);
  }

  function playChime() {
    audio.currentTime = 0;
    var attempt = audio.play();
    if (attempt) attempt.catch(function () {});
  }

  audio.addEventListener("canplaythrough", function () {
    button.hidden = false;
  }, { once: true });

  if (!reduceMotion) setTimeout(playChime, BANNER_DELAY_MS);

  button.addEventListener("click", function () {
    if (hero.getAnimations) {
      hero.getAnimations({ subtree: true }).forEach(function (animation) {
        animation.cancel();
        animation.play();
      });
    }
    setTimeout(playChime, reduceMotion ? 0 : BANNER_DELAY_MS);
    startClip(reduceMotion ? 0 : REVEAL_MS);
  });
})();
