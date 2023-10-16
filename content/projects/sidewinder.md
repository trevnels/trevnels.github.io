+++
title = "Sidewinder"
date = 2021-11-13
description = "Antweight combat robot built for BattleBots @ NC State."
[taxonomies]
tags = ["robotics", "cad"]
[extra]
# featured = true
thumbnail = "/images/sidewinder.jpg"
+++

{% figure(img=true, caption="Test fit of Sidewinder's components, with a few parts still missing.") %}
/images/sidewinder.jpg
{% end %}

## Overview
Sidewinder is an antweight combat robot I built with a team of two other students for BattleBots @ NC State 2021.

Sidewinder's primary weapon is a horizontal spinner machined from titanium, which is directly driven by an outrunner brushless motor. This weapon is designed to spin very quickly and deliver a lot of energy to opponents -- the titanium plate accounts for a significant portion of the robot's weight. 

Most of Sidewinder's chassis was 3D-printed with carbon-fiber-infused nylon filament. This is sandwiched between two carbon fiber plates, which protect the robot's top and bottom. We also designed a 3D-printed rear wedge and two wheel guards to mount to the core chassis. Because these parts were most likely to take a hit, we designed them to be easily replaceable. The chassis was also designed to be vertically symmetric, so its wheels protrude from the top and bottom -- this ensures that if the robot is flipped, it can continue driving as usual. The interior of the chassis houses a standard RC control system, LiPo battery, and ESCs for each of the robot's three motors.

## Design Process
Our team used Onshape to design Sidewinder digitally before manufacture. I focused on the core chassis, while my teammates focused on the weapon and its hub.

{% figure(img=true, caption="Sidewinder's main assembly as seen in Onshape.") %}
/images/sidewinder-cad.png
{% end %}

We also took extra care to configure the materials and densities of each part, allowing us to know where we stood in terms of weight during the design process. Because the weight limit for antweight robots is only 1 pound, we were a little nervous given our use of titanium and aluminum. While the Onshape estimate was right at the limit, the robot thankfully turned out to be a few grams underweight once assembled.

## Manufacturing
{% aside(path="/videos/sidewinder-drive.gif", caption="Initial testing of Sidewinder's drivetrain.") %}
We were able to 3D print many of the chassis parts ourselves, which helped us iterate quickly and test fit components. We also machined the aluminum weapon hub using a CNC mill on campus. However, the more exotic materials (the titanium and carbon fiber plates) were ordered from an online vendor.

Sidewinder's final assembly took place in the D.H. Hill Library Makerspace and a lab in the basement of EB3, where we also performed some final testing in the days leading up to the competition.
{% end %}

## Competition

{% figure(caption="Sidewinder swiftly dispatches its first opponent.") %}
![Sidewinder swiftly dispatches its first opponent.](/videos/sidewinder-arena.gif)
{% end %}

I was offered the opportunity to drive Sidewinder in the competition, which was very nerve-wracking, given I had never driven a combat robot before. Thankfully, it was very easy to drive, even as the robot got flipped over on multiple occasions. We also took a few hits, though none dealt any significant damage to our robot thanks to its sturdy construction.

We ended up winning the first two of our matches in the bracket, which was enough to secure us a spot in the finals. After a particularly precarious final match in which both robots seemed to be on the verge of death, we were able to win the final match and secure the win for Sidewinder.