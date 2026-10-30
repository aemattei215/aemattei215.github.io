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

  // iPhone and Safari leave a blank box for a WebM that has transparency.
  // The animated WebP is the picture those browsers can actually show.
  function canPlayAlphaWebm(video) {
    var ua = navigator.userAgent || "";
    var iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    if (iOS) return false;
    var safari = /Safari\//.test(ua) && !/Chrome|Chromium|CriOS|Edg|OPR|Android/.test(ua);
    if (safari) return false;
    var support = video.canPlayType('video/webm; codecs="vp9"');
    return support === "probably" || support === "maybe";
  }

  function startClip(delay) {
    if (!clip || clip.hidden) return;
    clearTimeout(clipTimer);
    clip.pause();
    try { clip.currentTime = 0; } catch (err) {}
    clipTimer = setTimeout(function () {
      var attempt = clip.play();
      if (!attempt) return;
      attempt.then(function () {
        if (!clip.videoWidth) useStill();
      }).catch(function () {
        useStill();
      });
    }, delay);
  }

  if (clip) {
    clip.muted = true;
    clip.addEventListener("error", useStill);
    if (!canPlayAlphaWebm(clip)) useStill();
    else if (reduceMotion) startClip(0);
    else startClip(REVEAL_MS);
  }

  function playChime() {
    audio.currentTime = 0;
    var attempt = audio.play();
    if (attempt) attempt.catch(function () {});
  }

  // The button only appears once the mp3 is actually there.
  audio.addEventListener("canplaythrough", function () {
    button.hidden = false;
  }, { once: true });

  // Most browsers block sound until the visitor interacts with the page;
  // when they do, this fails silently and the button covers it.
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
