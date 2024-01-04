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

Overthrow was FIRST Robotics Competition team 6502's robot for the 2020 season. As former software lead on the team, it was my responsibility to plan, develop, and test substantial amounts of the code running on the robot. Over the 2-month build season, I developed many unique features, giving us a competitive edge over many other North Carolina teams.

Notably, our turret could automatically aim at the goal using computer vision, ensuring that balls would make it to their target without the driver needing to manually aim and potentially miss shots:

{% figure(caption="A demonstration of the turret's automatic tracking capability.") %}
<img src="/videos/overthrow_turn.gif" draggable="false"/>
{% end %}

Computer vision also controlled the hood angle and flywheel speed of the shooter, so all the driver had to do to score points was pull the trigger. I also implemented many checks which must pass before allowing the shooter to fire. For example, the robot will not fire if the turret is aimed away from the goal, if the flywheel is not at the correct speed, or if the robot is too far away for shots to reliably hit their target. This status information is both indicated by LEDs on the robot and indicators on the dashboard to ensure the drivers are aware of any problems that may arise.

Having such seamless automation on our turret also let us have one of the best 15-second autonomous routines in the state. We could fire three balls, back up to pick up three more, and return to the goal to fire again, for a total of six:

{% figure(caption="Physical end-to-end test of the 6-cell autonomous routine.  
Notice that the turret hesitates before the last shot to correct its aim!") %}
<video controls class="rounded-md shadow-lg">
    <source src="/videos/overthrow_firing.webm" type="video/webm; codecs=vp9,vorbis">
    <source src="/videos/overthrow_firing.mp4" type="video/mp4">
</video>
{% end %}

{% aside(caption="Path following unit test output, simulating the robot being bumped.", path="/images/bumptest.png") %}
During the autonomous period, the robot used the Ramsete path following algorithm to smoothly drive along preprogrammed splines. This meant that if our robot got bumped or otherwise left the path, it could quickly steer itself back on track using input from rotational encoders and an IMU -- this was very useful because the drivers were not allowed to take over during this period if the robot went off its path.
{% end %}

