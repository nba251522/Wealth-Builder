![Site Langing Page](./client/src/assets/wealthbuilder-readme.png)

## Technology Used - This is a MERN API

<p float="left">
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white">
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white">
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E">
<img src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white">
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3Eh">
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
</p>

## Description

[Visit the Deployed "Wealth Builder" site](https://wealth-builder-d2d82a6766d2.herokuapp.com/) 👀

Many of us ask ourselves at the end of the month “Where’d all my money go?!”  Wealth Builder allows users to answer that question.  Wealth Builder creates a safe online accounting form to keep track of a user's money coming in and money going out during the course of a month. 

Wealth Builder also provides several points of encouragement to try and get users thinking about saving their money instead of just spending it. Wealth Builder does this by allowing the user to create savings goals with encouraging goal notifications such as “Great job you're almost there”!  Wealth Builders' use of real-time data showing stock prices and finance news gets a user thinking about how to use their money as an investment.


![Login And Modify](./public/images/images-for-readme/work-remote-login-view-all.gif)

## Table of Contents

- [How To Install](#how-to-install)
- [Usage & Features](#usage-and-features)
- [Code Examples](#code-examples)
- [Author Info](#author-info)
- [License](#license)

## How To Install

1. Copy this GitHub repository down to your local drive.
2. Open the folder where you placed the files from this repository on your local drive with your Git terminal. Make sure you can see the server.js file and also the package.json file.
3. Type "run npm init" this will install the necessary node.js modules.
4. Type “npm install” to install all the necessary dependencies that are called out in the package.json file.
5. Type “node server” If you have everything set up correctly you will see the message “now listening on http://localhost:3001” This means that your MySQL server database is up and ready to send and receive information from your browser.
6. Open your browser and go to http://localhost:3001 and you will be able to use your own instance of Work Remote.

## Usage and Features

### User Stories

![3 Types Of Users](./public/images/images-for-readme/3-user-stories.jpg)

#### Concerning Not Logged in Users:

All users can go to the site and are limited to viewing the 6 most recent project posts without being logged in. In order to see all the job posts or to make a job post a user must make an account by entering their user name, email, and password. This information is saved to the server. For security purposes, the user's password is made into a hash by using npm bcrypt and is stored on the server not as a raw password but as a hash.

When a user is a returning user (coming back to the site for a 2nd or more time) when they enter their username and password, bcrypt hashes the password they entered and then looks for a matching hash and username on the server. If a match is found they are logged in. Once logged in the users behavior defines if they are now a Client or Worker.

#### Concerning Client Users

Once logged in, a Client User can go to “My Job Listing” or “Post Job” if they would like to view and edit their existing job posts or make a new job post respectively. If a Client clicks on “My Job Listing” they are taken to a list of all of their current job posts. Once there, each job has the option to “Learn More” (Which shows the entirety of that job post as it is, and is not editable). “Edit” (Which shows the job in an editor where ALL of the job properties are editable. This is really nice if a user wants to modify the requirements of a job, maybe even change the type of job, and can of course modify their budget).

#### Concerning Worker Users

Once logged in, a Worker User can go to “See Jobs” and the entire list of all available jobs will be shown to them. At the same time, a drop-down sort function is given to them at the top of the page where they can select the jobs to be displayed to them by category, where only the category of job they choose will then be shown to them.

The Worker User can then select a job to view by clicking on “Learn More”. That will display for them the listing of the job with all of the details including a contact email at the bottom where if they are interested in the work they can email the job poster. If they click on the email button their e-mail editor will automatically open and the Clients email will be automatically populated.

### User Stories Converted To API Routes

![API Routes](./public/images/images-for-readme/user-stories-to-routes.jpg)

## Code Examples

We used Bootstrap as the basis of our framework, along with custom CSS

#### Here Is The Mobile Responsiveness

![Login And Modify](./public/images/images-for-readme/work-remote-mobile.gif)

### Models

Below is the project code for the User Model found in the User.js

![User Model](./public/images/images-for-readme/user-model.jpg)

Here are a couple interesting pieces of code from the project.

First, here is the route to the job board (the actual home route) JavaScript from home-routes.js showing the jobs available on the site. Limited to 6 if the user is not logged in, but will show all if the user is logged in.

![Login And Modify](./public/images/images-for-readme/job-list.jpg)

Second, here is code from the dashboard.handlebars useing Handlebars.js showing how it autogenerates the HTML for the dashboard.

![Login And Modify](./public/images/images-for-readme/handlebars-job-postings.png)

## Author Info

If you made it this far "thank you!" 😁🙏👍 We appreciate you taking such a thorough look at our work. If you would like to contact us or see more of our work please use the links below.

### Jorge Castro

<a href="mailto: jorgecastro619@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/jorge-castro-2a9545177/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/Jacastro619" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

### Nhi Hoang

<a href="mailto: evie.h0325@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/ynhihoang/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/eviehoang" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

### Steven Sills II

<a href="mailto: stevensills2@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/steven-sills-ii-90781b53/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/Apixa25" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.