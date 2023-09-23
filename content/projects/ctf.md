+++
title = "CTF Site"
date = 2018-05-16
description = "Python capture-the-flag website created to aid in teaching a summer camp."
[taxonomies]
tags = ["js", "python", "firebase"]
[extra]
thumbnail_icon = "nf-md-language_python"
thumbnail_color = "oklch(69.64% 0.196 89.5)"

+++

My high school's Summer Hackathon camp teaches middle-schoolers basic cryptography and Python with a series of basic "Capture-the-Flag" challenges. I have worked at multiple sessions of this camp as an assistant to the instructor, my high school computer science teacher. I developed this website for the camp with a peer in about a month.

The website was an integral part of campers' experience, providing them with problems to solve and automatically grading their answers. We also embedded Python interpreters or code on each problem's page. Camper scores are stored in a Firebase database and tabulated into a scoreboard, which helped motivate campers through challenging problems. The node.js server graded all problems to ensure curious campers don't find answers in the page's source code, and campers sign in with Google to ensure their progress persists throughout the entire week.