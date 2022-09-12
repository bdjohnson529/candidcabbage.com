---
layout: home
---
# Candid Cabbage

Hi, I'm Ben Johnson, a sales engineer at Retool. This site is a knowledge repository of things I have learned about building softare in Retool.

<div>
  <ul>
    {% for page in site.docs %}
      <li>
        <a href="{{page.url}}">{{ page.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
