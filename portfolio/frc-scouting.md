---
title: FRC Scouting
subtitle: 2018-2020
date: '2019-04-10'
thumb_image: images/ossus_collection.png
image: images/scouting.jpg
layout: project
---
I've done a variety of FIRST Robotics Competition scouting projects over the years. Highlights include:
 - Ossus, my FRC team's scouting system for 2020 and one of my most complex web projects to date
 - TrueFRC, an experiment using Microsoft's TrueSkill algorithm to rank teams
 - NPredictor, an early test of using normal curves to predict match results

 Each of these projects is detailed below.

# What is FRC scouting?
In the FIRST Robotics Competition, events are broken into two stages. Qualification matches, the first stage, are 3v3 matches where each team, or alliance, is selected near-randomly. These qualification matches are used to rank teams solely based on win/loss ratio (and some other things, depending on the year.) The second stage is the Elimination matches, which works like a traditional bracket of eight 3-team alliances. The winning alliance of this bracket wins the event. After Qualification matches, the top 8 qualification-ranked teams are elimination alliance captains, and go through a complex procedure of picking other teams at the event to join their alliances.

> Simple! The alliance captains just choose the highest available qualification-ranked teams!

Not so fast. Basing one's choices on win/loss ratio doesn't really show the full picture of the teams at the event due to the randomness of qualification matches. For example, a bad team may luck out and be paired with good teams every single qualification match, artifically inflating their qualification rank. They may enter alliance selection with a high rank, but they may not be the best choice. This is where scouting comes in.

During the qualification matches, most teams will have scouts in the stands recording quantitative data on each and every team that plays. This data is not only critical for making informed alliance selection picks, but also for making predictions about our future matches and analyzing our opponents' weaknesses.

Recording all that data and crunching the numbers can get very tedious for the scouts, and even somewhat tedious for an Excel sheet. Therefore, I've spent a lot of time during my FRC career trying to improve scouting, both in terms of accessibility to the scouts and in accuracy and usefulness of data.

# Ossus
Ossus, my FRC team's 2020 scouting system, is likely my most complex web project to date. Ossus was built on a node.js and MongoDB backend, with a Vue.js frontend. A main concern during event scouting is network connectivity, since WiFi is banned due to field interference and cell signal can be very weak. Therefore, I built Ossus on a REST API for data transit, while keeping the webpage itself cached locally using a service worker to minimize bandwidth requirements. The server does the majority of network-intensive computations requiring data from other API sources. Scouts sign in to Ossus with credentials of their choosing from iPads in the stands connected to a cellular hotspot via Ethernet and a network switch. The Ossus server and database run on an Ubuntu virtual machine hosted by my high school's web servers.

An early version of Ossus was beta-tested at a 2019 off-season event, and I used feedback and feature requests from that test to upgrade almost every part of the system. However, the final 2020 version used was still missing some desired features due to time constraints. I would've liked to include graphs showing change in team performance over the course of an event, as well as automatically fetching images of team robots from online sources.

The name Ossus is a reference to the *Star Wars* universe, where a planet by the same name is home to the Great Jedi Library.

## Schema
Each FRC game (year) is defined by a JSON file called the schema. All of the Ossus UI is procedurally created based on this to minimize future developent time. Here's a small snippet of `2020.json`:
```json
...
"objectives": {
    "powercell_lower": {
      "name": "Lower",
      "icon": "rectangle-outline",
      "color": "#E6CF5C",
      "type": "shoot",
      "destinations": [
        "Lower"
      ],
      "separateAuto": true,
      "pointValues": [
        1
      ],
      "autoMultiplier": 2
    },
    "powercell_upper": {
      "name": "Upper",
      "icon": "hexagon-outline",
      "color": "#E6CF5C",
      "type": "shoot",
      "destinations": [
        "Outer",
        "Inner"
      ],
      "separateAuto": true,
      "pointValues": [
        2,3
      ],
      "autoMultiplier": 2
...
```
I tried to abstract all the historical FRC game pieces into a handful of "types" which all share common properties in terms of data and the means of recording it. For example, the `pickplace` type defines a game piece which can be picked up and placed at other locations for set point values. The schema also defines iconography and colors seen throughout the webapp to make buttons more identifiable.

## Data Collection
![Ossus Data Collection](/images/ossus_collection.png)
*The 2020 data collection screen during a match.*

Data is collected with a touch-optimized interface designed for the scout iPads. Scouts simply tap what their assigned robot does, and the screen will update with new options. For instance, a pressing endgame would switch to buttons of different possible endgame states. All of these buttons are created based on the provided schema - nothing is hardcoded. Effectively, the data collection interface is a finite state machine of all states a robot could be in, and transitions between these states are triggered by buttons and counted behind the scenes. This data is sent to the server and recorded in MongoDB once the scout hits submit and adds any qualitative notes.

The design of this interface was primarily driven by complaints from scouts about our previous data entry method. Before 2020, we used a Google Form feeding a complex spreadsheet for scouting data. This worked, but the Google Form did not facilitate sequential data entry the same way the Ossus data collection interface does. Having to scroll up and down in a form and manually incrementing values in text boxes quickly wore out our scouts.

## Data Analysis
![Ossus Data Analysis](/images/ossus_data.gif)
*Weighing data from a 2019 event.*

The primary presentation of data in Ossus is via the table above. The left-hand weights menu is used to dynamically sort the table based on a variety of statistics determined by the game schema. This is not just a basic sort, however. Every statistic can be prioritized or penalized with a weight, sorting the table based on how well a team satisfies these weights. For example, I could sort the table by teams who are good at game piece A and game piece B, but A is preferred, and I do not want teams who do game piece C, all by adjusting a few sliders. All of these calculations are performed on the server using scout data recorded in  MongoDB. Again, none of this is hardcoded, everything down to the table heading is procedurally generated.

The "horizontal bar charts" on the table, as I like to call them, are rendered by my own chart library which uses SVG instead of HTML canvas. I found that popular HTML canvas chart libraries had extreme performance penalties when dealing with hundreds of charts on a page moving around dynamically, so I wrote my own chart library specific to the project's needs. Each chart can be clicked to flip the bar labels to percentages/values for more in-depth data if needed by the scouts.

## Predictions
![Ossus Data Prediction](/images/ossus_predict.png)
*An Ossus match prediction compared to the actual outcome of that match.*

Ossus can also do match predictions based on collected scout data. Above, you can see the prediction algorithm's output. It computes a win percentage for each alliance, and also computes a breakdown by field element, predicting each alliance's points obtained from each. It also shows a breakdown of which teams are projected to contribute what to each game piece point total. However, teams will typically change behavior by match based on who they are playing against, so these breakdowns are just estimates. Above, they hold mostly true when compared to the actual outcome, but there are still some conflicts. 

Being able to simulate matches between two alliances who have never played together is also critical for alliance selections. We can substitute various teams into an alliance to see which gives the best chance of victory. The breakdowns also help us determine who should assume what role on an alliance based on strengths.

The prediction algorithm works by generating normal curves for each team's contribution to their alliance's score, adding them up to total alliance score curves, then subtracting them to generate a score difference curve. From this curve, we use a cumulative density function to get the percentage of this curve that exceeds or falls below zero, with zero meaning a tie. These percentages are the probabilities of one team's score exceeding the other.

# TrueFRC
![TrueFRC](/images/truefrc.jpg)

TrueFRC is a website I wrote during the 2019 FIRST Robotics Competition season to automatically analyze the performance of teams without the need for manual scouting. Using published match scores and Microsoft's TrueSkill rating algorithm, it can generate a relatively good means of ranking teams relative to each other at an event. It also computed subscores for each game element. A benefit to computing TrueSkill ratings is that it makes match predictions easy, as ratings are represented by normal curves, so I also implemented match prediction capabilities, which were >95% accurate.

Unfortunately, only using match scores cannot compare to manually collecting data on each robot in reliability and depth of data. Instead of deriving individual team performance from total scores with math, which is subject to large amounts of error, we decided to use manual data collection, so I developed Ossus for the 2020 season.

# NPredictor
![NPredictor](/images/npredictor.png)
NPredictor was a more rudimentary version of the afformentioned TrueFRC prediction algorithm. Instead of TrueSkill, I used OPR, a statistical measure already calculated by publicly available FRC match databases.
