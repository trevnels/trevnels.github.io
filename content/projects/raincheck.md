+++
title = "Raincheck"
date = 2020-06-16
description = "Minimalist weather webapp powered by the OpenWeatherMap API."
[taxonomies]
tags = ["vue", "js"]
[extra]
featured = true
thumbnail = "/images/raincheck.png"
+++

{% figure(img=true, caption="Raincheck's main screen showing some precipitation.") %}
/images/raincheck.png
{% end %}

Raincheck is a minimal weather website I wrote over the summer of 2020. It uses the OpenWeatherMap API to query for conditions, along with NOAA radar data. I frequently used Dark Sky's weather webapp before it shut down, so I wanted to somewhat recreate that experience, but in my own style. I tried to reduce the amount of clutter by contextually hiding and showing elements depending if they are relevant to current conditions. I also made the site attempt geolocation by default, so there is no need to dig through settings. However, location can be manually selected along with units of measure and time formats.

Now that I've taken MEA 130 (Introduction to Meteorology) at NC State, I've learned a lot more about how weather works. Therefore, I'm planning on eventually building a version 2 of Raincheck that incorporates some of that knowledge about what many of the numbers being displayed actually mean.

