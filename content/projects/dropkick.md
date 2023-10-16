+++
title = "Dropkick"
date = 2018-03-16
description = "Robot for the 2018 FIRST Robotics Competition season"
[taxonomies]
tags = ["robotics", "jvm"]
[extra]
thumbnail = "/images/dropkick.jpg"
+++

{% figure(img=true, caption="Dropkick on the field at the UNC Asheville event. Photo by [Danny Levenson](http://dannylevenson.com/FIRST/index.html).") %}
/images/dropkick.jpg
{% end %}

Dropkick was the robot I worked on as part of DARC SIDE for the 2018 FIRST Robotics Competition season. It was designed to play the 2018 FIRST Robotics Competition game, Power Up, which involved picking up and placing cubes on balancing platforms to tip them in your alliance's favor. Dropkick was designed to place cubes in the switch and exchange, as well as to launch cubes over 6 feet into the air to reach the scale using a set of pneumatic cylinders fed by eight air tanks. A set of compliant wheels, two more pneumatic cylinders, and an IR distance sensor also allowed the robot to automatically grab cubes as it drove into them.

{% figure(caption="Dropkick's reveal video.") %}
{{ youtube(id="JIfnJEgSKBE") }}
{% end %}

Dropkick was also DARC SIDE's programming team's first experience with autonomous path following. We spent hours dialing in the paths that the robot would follow to place cubes in the switch or on the scale during the autonomous period. Unlike [Overthrow](@/projects/overthrow.md), Dropkick was not able to correct for natural drift from its route, so it took a lot of trial and error to get the paths just right. As the season progressed, Dropkick could eventually autonomously launch a cube onto the scale, grab another cube, and launch it as well, all in the span of 15 seconds. This routine gave us an early advantage on the scale in many matches, eventually leading to us qualifying for the world championship in Houston for the second year in a row.

While Dropkick was a very simple robot, it was also one of my team's most successful, winning the Asheville district event as well as receiving both the Quality and Innovation in Control awards over the course of the season. We were also finalists at the state championship and the 8th alliance captain on our division at the world championship.