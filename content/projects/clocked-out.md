+++
title = "Clocked Out"
date = 2023-04-16
description = "Top-down puzzle game for CSC281."
[taxonomies]
tags = ["gamedev"]
[extra]
thumbnail = "/images/clocked-out.jpg"
+++

{% figure(img=true, caption="") %}
/images/clocked-out.jpg
{% end %}

Clocked Out is a top-down puzzle game developed for my Foundations of Interactive Game Design final project at NC State. In Clocked Out, the player wakes up in an empty yet familiar office building, and they must solve various puzzles to find items around the building. These items can be used to upgrade a tool held by the player, which is used to open up more areas of the building as the player progresses. The player is eventually able to restore power to the building and escape through an elevator. The game was made in the Godot engine with a team of 2 other people. I was responsible for much of the programming, along with the sound design. In terms of art, we drew heavy inspiration from the "liminal space" aesthetic, while also adopting a top-down pixel art style, since it was the most feasible for our small team with limited art experience.

{% figure(caption="A montage of progression through the first level of the game.") %}
![A montage of progression through the first level of the game.](/videos/crafting_montage.gif)
{% end %}

## Procedural Generation
One of my contributions to Clocked Out that I'm particularly proud of is its procedural generation system, which makes each playthrough of the game unique. The game has 4 different levels, each with a different layout and different objects to find. The first three have three different versions each, while the final level is always the same, but its puzzle randomizes each time. When gameplay starts, level doors are linked together at random, providing a different path through the game each time. This was especially challenging to implement given the non-linear ordering of levels -- we designed the game to require some backtracking and to have multiple routes between each level. Because of this, I had to make sure that cycles in the graph were consistent with one another, so the player wouldn't be able to get into different versions of the same level by going in circles. 

{% figure(img=true, caption="In-engine graph visualization of possible level connections.") %}
/images/clocked-out-graph.png
{% end %}
