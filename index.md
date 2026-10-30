---
layout: single
title: "Welcome to My Portfolio"
author_profile: true
classes: has-cover-hero
header:
  og_image: /assets/images/githubpfp.jpg
  image: /assets/images/githubpfp.jpg
  cover: draft
---

<section id="about" class="portfolio-section" markdown="1">

## About Me

Hello, I'm Alex! I'm a junior currently pursuing a double Bachelor of Science in Statistics and Data Science at George Washington University, where I serve as the president of GW Sports Business Association, a student analytics manager for GW Baseball, and a peer tutor in the Academic Commons. I am deeply passionate about data analytics, specifically as it pertains to player evaluation, developing, and modeling in football, baseball, basketball, and soccer.

I'm an analytically-driven individual searching for entry level internships and roles that jointly leverage my comprehensive knowledge of sports, rigorous education in statistics/data science, and passion for leadership. This portfolio is a testament to the above traits, which you can view in the form of various projects, short and long form content, and much more. I hope you enjoy!

</section>

<section id="projects" class="portfolio-section" markdown="1">

## Projects

Data visualization and analysis notebooks from my coursework and personal work.

{% include project-grid.html limit=4 %}

{% if site.data.projects.size > 4 %}
<p class="section-more"><a href="{{ '/dataviz/' | relative_url }}" class="btn btn--primary">See all {{ site.data.projects.size }} projects &rarr;</a></p>
{% endif %}

</section>

<section id="content" class="portfolio-section" markdown="1">

## Content

The latest episodes of GW SBA's "Second Take" podcast, which I co-hosted with Casey Berger. More of my short-form research lives on [TikTok](https://www.tiktok.com/@ludis.sports).

{% include video-grid.html limit=4 %}

<p class="section-more"><a href="{{ '/content/' | relative_url }}" class="btn btn--primary">See all {{ site.data.videos.size }} episodes &rarr;</a></p>

{% if site.data.tiktoks.size > 0 %}
### Short-Form Research

Also, some selected analytical clips from my TikTok, [@ludis.sports](https://www.tiktok.com/@ludis.sports).

Note: some of these videos are a bit old and may contain unfunny humor and slight profanity.

{% include tiktok-grid.html limit=6 %}

<p class="section-more"><a href="https://www.tiktok.com/@ludis.sports" class="btn btn--primary" target="_blank" rel="noopener">More on TikTok &rarr;</a></p>
{% endif %}

</section>

<section id="contact" class="portfolio-section" markdown="1">

## Contact

Thank you for taking the time to read this! Please feel free to reach out at [alexmattei215@gmail.com](mailto:alexmattei215@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/alexander-mattei-813221284) if you have any questions.

</section>
