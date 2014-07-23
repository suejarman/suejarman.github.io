---
layout: default
title: About
permalink: /about/
---

<div class="large-4 columns">
  {% for image in site.data.about_text.images %}
    <img src="{{ image.url }}">
  {% endfor %}
</div>

<div class="large-8 columns">
  <h1>{{ site.data.about_text.name }}</h1>
  
  {% for text in site.data.about_text.paragraphs %}
    <p>{{ text.paragraph }}</p>
  {% endfor %}
</div>