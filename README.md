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


![Login And Modify](./client/src/assets/wealth-builder.gif)

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
5. Type “npm run start” If you have everything set up correctly you can open http://localhost:3000” (it should open for you automatically) And you will see the site Wealth Builder.

## Usage and Features

### User Stories

![3 Types Of Users](./client/src/assets/user-stories.png)

### User Stories Converted To GraphQL Queries and Mutations

![API Routes](./client/src/assets/queries-mutations.png)



We used Bootstrap as the basis of our framework, along with custom CSS

#### Here Is The Mobile Responsiveness

![Login And Modify](./client/src/assets/mobile-responsiveness.gif)

## Code Examples

### How A Feature Was Developed Using GraphQL and React

![User Model](./client/src/assets/1-how-it-works.png)

We started in the back end by modeling out how we wanted a data set to look.  Here is the Model and Seed for a Transaction

![Login And Modify](./client/src/assets/2-model-and-seed.png)

Then we made the GraphQL Resolver to add the Transaction to the MongoDB

![Login And Modify](./client/src/assets/3-mutation-example.png)

Then on the front end we used React to build a Transaction Component

![Login And Modify](./client/src/assets/4-react-component.png)

Then we made the GraphQL Mutation to move the Transaction into the MongoDB from the front end (When the User enters it in)

![Login And Modify](./client/src/assets/5-front-end-mutation.png)


## Author Info

If you made it this far "thank you!" 😁🙏👍 We appreciate you taking such a thorough look at our work. If you would like to contact us or see more of our work please use the links below.

### Aaron Torres

<a href="mailto: aaront080@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/aaron-torres-003672b1/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/aaront080" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

### Christina Larsen

<a href="mailto: clarsen31782@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="http://www.linkedin.com/in/clarsen1782" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/Clarsen1782" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

### Ryan England

<a href="mailto: me@rengland.org" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="http://www.linkedin.com/in/ryandengland" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/stellyes" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

### Steven Sills II

<a href="mailto: stevensills2@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/steven-sills-ii-90781b53/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/Apixa25" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

### Thomas Er

<a href="mailto: inquister12345678@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/thomas-er-9b77321b9/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/nba251522" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

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