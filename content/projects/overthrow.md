+++
title = "Overthrow"
date = 2020-02-16
description = "Robot for the 2020 FIRST Robotics Competition season."
[taxonomies]
tags = ["robotics", "jvm"]
[extra]
featured = true
thumbnail = "/images/overthrow.jpg"
+++
{% figure(caption="A video showing Overthrow in action.") %}
{{youtube(id="V2W0Gz72hI4")}}
{% end %}

>"Under strict rules and limited time and resources, teams of high school students are challenged to build industrial-size robots to play a difficult field game in alliance with other teams, while also fundraising to meet their goals, designing a team "brand," and advancing respect and appreciation for STEM within the local community."
><cite>[firstinspires.org](https://www.firstinspires.org/robotics/frc)</cite>

Overthrow was FIRST Robotics Competition team 6502's robot for the 2020 season. As former software lead on the team, it was my responsibility to plan, develop, and test substantial amounts of the code running on the robot. Over the 2-month build season, I developed many features not possessed by most other North Carolina teams, mainly focusing on automation.



Notably, our turret could automatically aim and compute the trajectory and needed speed of balls as they were fired using computer vision, ensuring they would hit the goal without the driver needing to manually aim and potentially miss shots.

{% figure(caption="A demonstration of the turret's automatic tracking capability.") %}
<img src="/videos/overthrow_turn.gif" draggable="false"/>
{% end %}

{% aside(caption="Path following unit test output.", path="/images/bumptest.png") %}
We also had one of the best 15-second autonomous routines in the state. We could fire three balls, back up to pick up 3 more, and return to fire those three as well. The robot used advanced algorithms, rotational encoders, and a gyroscope while driving along these paths so that if it were bumped or otherwise left the path, it could quickly steer itself back on track.
{% end %}

{% figure(caption="Physical end-to-end test of the 6-cell autonomous routine.  
Notice that the turret hesitates before the last shot to correct its aim!") %}
<video src="/videos/overthrow_firing.webm" controls class="rounded-md shadow-lg"></video>
{% end %}