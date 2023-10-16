+++
title = "Backfire"
date = 2019-02-16
description = "Robot for the 2019 FIRST Robotics Competition season."
[taxonomies]
tags = ["robotics","jvm"]
[extra]
thumbnail = "/images/backfire.jpg"
+++

{% figure(img=true, caption="Backfire holding a hatch panel on stop build day, shortly before our first competition.") %}
/images/backfire.jpg
{% end %}

Backfire was my team's robot for the 2019 FIRST Robotics Competition season. It was designed to play the 2019 FIRST Robotics Competition game, Destination: Deep Space, which required robots to cover holes in field elements with 'hatch panels' and place 'cargo' (large rubber balls) behind them. Backfire was designed to handle both of these tasks, using a pneumatic hook to pick up and place hatch panels and a roller mechanism to handle cargo. Both of these mechanisms were mounted on a two-stage elevator, allowing the robot to lift game pieces to higher levels of the field for more points.

{% figure(caption="Backfire's season recap video.") %}
{{ youtube(id="iq3zyDOJJp4") }}
{% end %}

2019 was also my first year as DARC SIDE's software lead, so I had a much more active role in implementing the robot's software than in previous years. One of the changes I made for 2019 was to use Kotlin instead of Java for the robot's code, which brought benefits like null safety and less verbose syntax. Kotlin still allowed us to interoperate with Java libraries like WPILib, so we could continue to interface with the robot's hardware in the same way as before.

One of the most difficult parts of the software was controlling the elevator, since it needed to consistently go to many heights depending on what game piece the robot had and where we wanted to place it. I solved this problem using a state machine which determined the elevator's target position. The elevator state transitioned automatically based on the robot's actions -- for example, picking up a hatch panel would move the elevator to the correct height to place it at level 1 of the field, and placing it would put the elevator back in the pickup position. The elevator's state could also be controlled by touchscreen on the driver station laptop, which allowed me to manually intervene during a match if necessary. Height values from the state machine were then fed into a PID controller, which kept the elevator at the desired height using feedback from an encoder.

{% figure(img=true, caption="Driver station POV of Backfire during a match. Notice the dashboard with elevator state indicators. (Recorded at THOR, an off-season event.)") %}
/images/backfire-field.jpg
{% end %}

This season was also unique in that there was no autonomous component. Instead, the driver station was obstructed by a curtain for the first 15 seconds of the match. This meant that we relied on a camera feed from the robot to drive during this period. We also used this camera for computer vision, which detected the reflective tape on the field and automatically aligned the robot to the target as it approached. This was especially useful for placing hatch panels, since the robot had to be very precisely aligned for their hook-and-loop tape to attach to the field.