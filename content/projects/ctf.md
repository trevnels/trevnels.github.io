+++
title = "CTF Site"
date = 2018-05-16
description = "Python capture-the-flag website created to aid in teaching a summer camp."
[taxonomies]
tags = ["js", "python", "firebase"]
[extra]
thumbnail = "/images/ctf.png"

+++

{% figure(img=true, caption="A solved problem in the CTF site.") %}
/images/ctf.png
{% end %}

My former high school's Summer Hackathon camp teaches middle-schoolers basic cryptography and Python with a series of basic "Capture-the-Flag" challenges. I have worked at multiple sessions of this camp as an assistant to the instructor, my high school computer science teacher. 

I developed this website, which was an integral part of campers' experience, with a peer in about a month. It both provided campers with problems to solve and automatically graded their answers, freeing up us developers to roam the classroom to provide help or cryptic clues. We also embedded Python interpreters or code on each problem's page to allow them to work on problems without needing any external tools.

The backend of the site is written in Node.js, and is responsible for serving the site and authenticating users using Google's OAuth2. The backend was also responsible for grading problems to ensure curious campers didn't find answers in the page's source code. Camper scores were tracked in a Firebase database and tabulated into a scoreboard, which helped motivate campers to solve the increasingly challenging problems.