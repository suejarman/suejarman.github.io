---
layout: default

title: Animation

desc: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

images:
  - url: /portfolio/
    th_url: /imgs/animation/title_thumb.jpg
  - url: /animations/logo/logo_animation.html
    th_url: /imgs/animation/logo.jpg
---

<div class="large-3 columns">
  {% include gallery_list.html %}
</div>

<div class="large-9 columns">
  <ul class="clearing-thumbs">
    {% for image in page.images %}
      <li><a href="{{ image.url }}"><img src="{{ image.th_url }}"/></a></li>
    {% endfor %}
  </ul>  
  
  <p>{{ page.desc }}</p>
</div>
