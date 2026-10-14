document.querySelectorAll(".yt-card").forEach(function (card) {
  card.addEventListener("click", function () {
    var iframe = document.createElement("iframe");
    iframe.className = "yt-frame";
    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      card.getAttribute("data-id") +
      "?autoplay=1&rel=0";
    iframe.title = card.getAttribute("aria-label");
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    card.replaceChild(iframe, card.querySelector(".yt-thumb-wrap"));
  });
});
