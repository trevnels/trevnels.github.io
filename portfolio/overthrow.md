---
title: Overthrow
subtitle: A 2020 FIRST Robotics Competition robot.
date: '2019-05-10'
thumb_image: images/overthrow.webp
image: images/overthrow.webp
layout: project
---

>Under strict rules, limited time and resources, teams of [high school] students are challenged to raise funds, design a team "brand," hone teamwork skills, and build and program industrial-size robots to play a difficult field game against like-minded competitors. It’s as close to real-world engineering as a student can get. <cite>-- [firstinspires.org](https://www.firstinspires.org/robotics/frc)</cite>

Overthrow was FIRST Robotics Competition team 6502's robot for the 2020 season. As former software lead on the team, it was my responsibility to plan, develop, and test substantial amounts of the code running on the robot. Over the 2 month build season, I developed many features not possessed by most other North Carolina teams, mainly focusing on automation.

{% include youtube.html id="V2W0Gz72hI4" %}
*A video showing Overthrow in action.*

Notably, our turret could automatically aim and compute the trajectory and needed speed of balls as they were fired using computer vision, ensuring they would hit the goal without the driver needing to manually aim and potentially miss shots.

![Spinning demo](/images/overthrow_turn.gif){:width="100%"}
*A demonstration of the turret's automatic tracking capability.*

We also had one of the best 15-second autonomous routines in the state. We could fire three balls, back up to pick up 3 more, and return to fire those three as well. The robot used advanced algorithms, rotational encoders, and a gyroscope while driving along these paths so that if it were bumped or otherwise left the path, it could quickly steer itself back on track.

![Bump demo](/images/bumptest.webp){:width="100%"}
*A unit test output showing path reacquisition after a simulated collision.*