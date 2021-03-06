
##  Angular Core Deep Dive (Video Course)

This repository contains the code of the [Angular Core Deep Dive](https://angular-university.io/course/angular-course).

This course repository is updated to Angular v9, and there is a  package-lock.json file available, for avoiding semantic versioning installation issues.

![Angular Core Deep Dive](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png)


# Installation pre-requisites

IMPORTANT: Please use the latest Node and especially NPM, to make sure the package-lock.json is used.

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)


# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-course.git

This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:

    cd angular-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

