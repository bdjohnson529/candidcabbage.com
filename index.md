---
layout: home
---
# Candid Cabbage

Hi, I'm Ben Johnson, a sales engineer at Retool. This site is a collection of articles about my experience building with Retool. Articles may be moved to the Retool website in the future.

<div>
  <ul>
    {% for page in site.docs %}
      <li>
        <a href="{{page.url}}">{{ page.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
