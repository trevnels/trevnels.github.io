+++
title = "iTrust2"
date = 2022-10-16
description = "Full-stack healthcare portal project for CSC326."
[taxonomies]
tags = ["js", "jvm"]
[extra]
thumbnail = "/images/itrust.png"
+++



iTrust2 is a mock healthcare portal developed as part of NCSU's Software Engineering course, done in a team of 6 students. We were provided a functioning application at the start of the project, and were tasked with adding new features to fulfill the given requirements while following Agile practices. The tech stack consisted of Java with Spring and Hibernate on the backend, AngularJS and Bootstrap on the frontend, and MySQL for the database.

The specific functionality we worked on was adding the role of 'Patient Advocate', which can be associated with patients by an administrator in a many-to-many fashion. Once associated, advocates can view certain information about their patients, such as office visit records, billing statements, and prescriptions. Permission to view each category of information can be granted or revoked by patients and administrators. 

{% figure(img=true, caption="Patient Advocate Screen from the Admin POV.") %}
/images/itrust.png
{% end %}

Although the many-to-many linking between users took some time to get working, we learned a lot about relational databases in the process and ended up with a working implementation in the end. I also set out to get some extra credit points by configuring the application to run inside a Docker container, which allowed us to spin up test servers very easily on our laptops without much manual configuration.