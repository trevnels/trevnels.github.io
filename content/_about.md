+++
title = "About"
template = "post.html"
+++

{% aside(path="/images/me.jpg", caption='') %}
Hi, I'm Trevor! I'm a senior studying Computer Science at North Carolina State University. I have a wide range of software development experience from personal and school projects, internships, and four years of the [FIRST Robotics Competition](https://www.firstinspires.org/robotics/frc) in high school.

I'm particularly interested in front-end development and design, with a goal of creating systems that are enjoyable for people to use, especially on the web. I'm also a big fan of Linux and open-source software. I started using Linux on the desktop on-and-off in 2018, and I made the switch to using it full-time in 2021. I also became a regular member of NC State's [Linux Users' Group](https://lug.ncsu.edu/) around that time.

{% end %}

## Some History
As a kid, I loved Scratch and LEGO Mindstorms, though I would often push the limits of what they could do. Toying with sending messages over Bluetooth between my (multiple) LEGO Mindstorms sets or building a 2D Minecraft clone in Scratch were some of the things that really got me interested in programming.

In middle school, I learned Java, which was my first experience with a "real" programming language (apart from an unsuccessful attempt to learn Perl when I was in 1st grade -- I could barely spell at that point, let alone grasp the concept of a "formal language" with "syntax" and "rules.") Middle school was also around the time I started working with HTML and CSS, making random websites for no particular purpose apart from fun.

High school saw the continuation of my web development hobby, along with a renewed interest in game development. Around this time, I learned Unity and C#, using them to build various games, such as [Cabin Simulator](@/projects/cabin-simulator.md). I also combined these two interests by building a few ".io" style games using Node.js, Socket.io, and HTML canvas, which classmates would play during lunch on a development server I hosted on my laptop.

### FIRST Robotics Competition
Robotics also made a return in high school, no longer in the form of plastic bricks, but rather 120 pound metal robots as part of the [FIRST Robotics Competition](https://www.firstinspires.org/robotics/frc). As a freshman, I was a founding member of my high school's robotics team, DARC SIDE. While I mainly focused on programming, I also got involved with the media and branding side of the team. During the 2019 and 2020 seasons, I served as the team's software lead, and was also a captain for the (unfortunately curtailed) 2020 season.

{% aside(path="/images/thor.jpg", caption='Trying to juggle my drive team and media duties at THOR, a 2019 off-season event.') %}
I was also part of the drive team for the 2019 and 2020 seasons, which meant that I played a very active role during matches. Being 'behind the glass' at competition has probably been one of the most stressful experiences of my life, bar none. However, it was also very rewarding in that it helped me learn how to work under pressure -- there's nothing quite like having 30 seconds to fix a bug before the robot needs to be on the field, all while *YMCA* blares over the loudspeakers.
{% end %}

During my time as a student, I helped design, build, and program 4 robots: Bracket Buster (2017), [Dropkick](@/projects/dropkick.md) (2018), [Backfire](@/projects/backfire.md) (2019), and [Overthrow](@/projects/overthrow.md) (2020). I also worked on various web projects such as [Ossus](@/projects/ossus.md), a web app for scouting and data analysis. I'm still involved with the team as a mentor today, where I help with programming and project management. Overall, FRC consumed much of my time in high school and most definitely played a large role in shaping who I am today.

## About this Site
Most of this site's content (including this page!) is written in Markdown. At build-time, pages are converted to HTML using [Zola](https://www.getzola.org/), a static site generator written in Rust. The HTML templates Zola consumes are written by yours truly and are styled using [Tailwind CSS](https://tailwindcss.com/). The font used is [Cantarell](https://gitlab.gnome.org/GNOME/cantarell-fonts/), which is licensed under the SIL Open Font License. As new content is pushed, the site is automatically rebuilt/redeployed by GitHub Actions. The source code is available in [this repository](https://github.com/trevnels/trevnels.github.io), though keep in mind that some parts of it are still a work in progress and/or messy.