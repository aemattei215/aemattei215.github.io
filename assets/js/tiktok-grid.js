(function () {
  var cards = document.querySelectorAll(".tt-card");
  if (!cards.length) return;

  function load(card) {
    var url = card.getAttribute("data-url");
    fetch("https://www.tiktok.com/oembed?url=" + encodeURIComponent(url))
      .then(function (response) { return response.json(); })
      .then(function (data) {
        if (!card.getAttribute("data-id") && data.embed_product_id) {
          card.setAttribute("data-id", data.embed_product_id);
        }

        var title = card.querySelector(".tt-title");
        if (!title.textContent.trim() && data.title) {
          title.textContent = data.title;
          card.setAttribute("aria-label", "Play TikTok: " + data.title);
        }

        if (data.thumbnail_url) {
          var img = card.querySelector(".tt-thumb");
          img.onload = function () { card.classList.add("has-thumb"); };
          img.alt = title.textContent;
          img.src = data.thumbnail_url;
        }
      })
      .catch(function () {
        // Keep the placeholder card; clicking still opens the video.
      });
  }

  // Only ask TikTok for a thumbnail once a card is about to scroll into view.
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          load(entry.target);
        }
      });
    }, { rootMargin: "300px" });
    cards.forEach(function (card) { observer.observe(card); });
  } else {
    cards.forEach(load);
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      var id = card.getAttribute("data-id");
      if (!id) {
        window.open(card.getAttribute("data-url"), "_blank", "noopener");
        return;
      }
      var iframe = document.createElement("iframe");
      iframe.className = "tt-frame";
      iframe.src =
        "https://www.tiktok.com/player/v1/" + id +
        "?autoplay=1&rel=0&music_info=0&description=0";
      iframe.title = card.getAttribute("aria-label");
      iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
      iframe.allowFullscreen = true;
      card.replaceChild(iframe, card.querySelector(".tt-thumb-wrap"));
      card.classList.add("is-playing");
    });
  });
})();
