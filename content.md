---
title: "Content"
permalink: /content/
layout: single
author_profile: true
# Edit this list. `id` is the part of the URL after watch?v=
videos:
  - id: z78OhoviSds
    title: "Second Take: 2026 NFL Mock Draft"
  - id: -YMDqWnxhTY
    title: "Second Take: MLB Season Kick-Off"
  - id: ZtG_pvCwXY8
    title: "Second Take: MLB Season Predictions"
  - id: 451MWQsoUso
    title: "Second Take: NFL Free Agency Recap"
  - id: emDxZwmrsOQ
    title: "Second Take: Various Topics (WBC, NBA, NFL)"
  - id: o6xXsEVoMzQ
    title: "Second Take: NBA Tanking + USA 2028 Olympic Roster"
  - id: aAJxPFDficc
    title: "Second Take: NBA "Face of the Franchise, ROY Race"
  - id: ZXTjf35GItg
    title: "Second Take: Super Bowl + NBA Trade Deadline"
  - id: msCnSwyhzWM
    title: "Second Take: NFL Wild Card + Coaching Carousel"
  - id: Ib1zBM-5VAc
    title: "Second Take: NFL + NBA Takeaways"
  - id: wlYBbaJCYCE
    title: "Second Take: NFL Week 11"
  - id: hSzeShwCP28
    title: "Second Take: NFL/NBA + World Series"
  - id: weggO8d68HY
    title: "Second Take: NFL/NBA + World Series w. Guests"
  - id: ZdRjKVQzPk8
    title: "Second Take: Solo Host Episode w. Guests"
  - id: nW5WV36w3aQ
    title: "Second Take : NFL/NBA/MLB w. Guests"
  - id: hmWPQS6pV4
    title: "Second Take: NFL/NBA/MLB w. Guests"
  - id: 2Wrb0SgXt3U
    title: "Second Take: NFL + MLB Wild Card"
  - id: WtdbWWQRbxk
    title: "Second Take: NFL + MLB Playoff Predictions"
  - id: OZ3HCOzlNvE
    title: "Second Take: NFL + MLB Playoff Predictions (First Episode!)"
  - id: EoJMxM5sEU
    title: "Second Take: 2025 NFL Mock Draft"
  # ...add the rest of your ~20 here
---


Enjoy my personal content below, including my work with GW SBA's "Second Take" podcast (as well as my beloved co-host Casey Berger) and my personal projects on my TikTok page.

<style>
  .yt-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 1.25em;
    margin: 1.5em 0;
  }
  .yt-card {
    position: relative; display: block; width: 100%; padding: 0; border: 0;
    background: none; cursor: pointer; text-align: left; border-radius: 10px;
    overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.08);
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .yt-card:hover, .yt-card:focus-visible {
    transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,.18); outline: none;
  }
  .yt-thumb-wrap { position: relative; aspect-ratio: 16 / 9; background: #000; }
  .yt-thumb { width: 100%; height: 100%; object-fit: cover; display: block; }
  .yt-play {
    position: absolute; top: 50%; left: 50%; width: 68px; height: 48px;
    transform: translate(-50%,-50%); background: rgba(0,0,0,.55); border-radius: 12px;
    transition: background .18s ease;
  }
  .yt-card:hover .yt-play, .yt-card:focus-visible .yt-play { background: #f00; }
  .yt-play::after {
    content: ""; position: absolute; top: 50%; left: 52%; transform: translate(-50%,-50%);
    border-style: solid; border-width: 10px 0 10px 18px;
    border-color: transparent transparent transparent #fff;
  }
  .yt-title { display: block; padding: .6em .75em .75em; font-size: .95em; font-weight: 600; line-height: 1.3; }
  .yt-frame { width: 100%; aspect-ratio: 16 / 9; border: 0; display: block; }
</style>

<div class="yt-gallery">
  {% for v in page.videos %}
  <button type="button" class="yt-card" data-id="{{ v.id }}" aria-label="Play video: {{ v.title | escape }}">
    <span class="yt-thumb-wrap">
      <img class="yt-thumb" src="https://i.ytimg.com/vi/{{ v.id }}/hqdefault.jpg"
           alt="{{ v.title | escape }}" loading="lazy" width="480" height="360" />
      <span class="yt-play" aria-hidden="true"></span>
    </span>
    <span class="yt-title">{{ v.title }}</span>
  </button>
  {% endfor %}
</div>

<script>
  document.querySelectorAll(".yt-card").forEach(function (card) {
    card.addEventListener("click", function () {
      var id = card.getAttribute("data-id");
      var iframe = document.createElement("iframe");
      iframe.className = "yt-frame";
      iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      iframe.title = card.getAttribute("aria-label");
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      card.replaceChild(iframe, card.querySelector(".yt-thumb-wrap"));
    });
  });
</script>
