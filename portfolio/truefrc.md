---
title: TrueFRC
subtitle: FIRST Robotics Competition statistical analysis
date: '2019-04-30'
thumb_image: images/truefrc_thumbnail.png
image: images/truefrc.jpg
layout: project
---

TrueFRC is a website I wrote during the 2019 FIRST Robotics Competition season to automatically analyze the performance of teams without the need for manual scouting. Using published match scores and Microsoft's TrueSkill rating algorithm, it can generate a relatively good means of ranking teams relative to each other at an event. It also computed subscores for each game element. A benefit to computing TrueSkill ratings is that it makes match predictions easy, as scores are already represented by normal curves, so I also implemented match prediction capabilities, which were >95% accurate.

Unfortunately, only using match scores cannot compare to manually collecting data on each robot in reliability and depth of data. Instead of deriving individual team performance from total scores with math, which is subject to large amounts of error, keeping track of each team during a match manually is the method we chose for the 2020 season, though we did keep TrueSkill for match predictions.