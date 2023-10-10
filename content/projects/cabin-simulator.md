+++
title = "Cabin Simulator"
date = 2018-07-16
description = "A multiplayer sandbox game made with Unity."
[taxonomies]
tags = ["gamedev"]
[extra]
thumbnail = "/images/trucks.png"
featured = true
+++

Cabin Simulator is a multiplayer sandbox building game I made with the Unity game engine. The core gameplay loop is very simple - cut down trees to get wood, build something out of it, and repeat. 

{% aside(path="/images/world.png", caption="Looking at another player while testing multiplayer functionality.") %}
The multiplayer aspect also led to some interesting emergent social gameplay, since the game also featured weapons and vehicles -- my friends and I would often play 'factions,' where two teams would each build a base and try to sneak into the other team's base without being noticed. While the game was never released, I learned a lot about game development in the process of creating it, especially in the area of networked multiplayer.
{% end %}

## Building
{% figure(img=true, caption="An early prototype of the game's building system.") %}
/images/building.png
{% end %}
The building aspects of the game were inspired by similar mechanics in games like *Unturned* and *Fortnite*. The game offered a variety of pieces that snap to one another to create more complex structures. Floors, walls, and ceilings were some of the first additions, and I later added stairs, ramps, and half-walls to allow for more interesting verticality. I also added various decorative components like furniture, lamps to allow visibility at night, and the radio, which would play music for anyone nearby. All of these components were modeled in Blender and textured using Photoshop. I also baked ambient occlusion maps for each model using Blender to improve runtime rendering performance.

{% figure(img=true, caption="A decorated room at night, with lots of dynamic shadows.") %}
/images/room.png
{% end %}

## Procedural Terrain
{% figure(img=true, caption="An example of Cabin Simulator's terrain.") %}
/images/terrain.jpg
{% end %}
Each Cabin Simulator world consisted of procedurally generated terrain based on a Perlin noise heightmap. Height data was then converted into the vertices and triangles of a mesh within the Unity scene. Textures were also applied based on height to improve the look of the terrain, and additional decorations like trees and rocks were placed randomly across the world.

{% aside(path="/images/islands.png", caption='Some islands near the edge of the map, with a player-built bridge to one of them.') %}
While I wanted the terrain to be infinite, I never got around to implementing the chunking mechanism required for it. Instead, I tuned the generation parameters to create an 'archipelago' of islands in the center of the map, which naturally sunk into the surrounding ocean. This ocean boundary kept the playable space finite without a sharp edge the player could fall off of.
{% end %}

The level RNG seed was saved along with serialized structure and vehicle data, so the same terrain could be regenerated when the player loads their save file later, allowing them to pick up where they left off.

## Vehicles
Vehicles were one of the most challenging mechanics to implement, mainly due to multiplayer. I wanted vehicles to be able to carry multiple players who could move between seats, which took some serious effort to get working correctly with Unity's networking ownership system -- I ended up having to make the vehicle a hierarchical child of its driver, so they would have authority to control the physics of the vehicle for all players. Passenger player movement was then locked as they followed the position of their respective seats. Vehicle physics were handled by Unity's built-in physics engine, which had existing components to handle wheels and suspension.

{% figure(caption="An in-engine view of two players driving across the screen in a truck.") %}
![Truck driving across the screen](/videos/truck.gif)
{% end %}


{% aside(path="/images/trucks.png", caption="Two trucks with their lights off.") %}
I also added dynamic lights to the vehicles. Headlights turned on at night and illuminated the path ahead, while the tail lights turned on when the player pressed the brake or the vehicle was stopped.
{% end %}