+++
title = "About"
template = "project-page.html"
+++

{% aside(path="/images/me.jpg", caption='') %}
    I'm a senior studying Computer Science at North Carolina State University.
{% end %}


## About this Site
Most of this site's content (including this page!) is written in Markdown. At build-time, pages are converted to HTML using [Zola](https://www.getzola.org/), a static site generator written in Rust. The HTML templates populated by Zola are written by yours truly and are styled using [Tailwind CSS](https://tailwindcss.com/). As new content is pushed, the site is automatically rebuilt/redeployed by GitHub Actions.

The code is open source, but you probably don't want to look at it. You've been warned.

