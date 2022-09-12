---
layout: blog
title: Sales Notes
---
Notes from sales books and experience in the field.

<div>
  <ul>
    {% for page in site.sales %}
      {% unless page.path contains "index.md" %}
        <li>
            <a href="{{page.url}}">{{ page.title }}</a>
        </li>
      {% endunless %}
    {% endfor %}
  </ul>
</div>