# Technology Dashboard

## Thought process:
When I fist started thinking about the architechture of this application I knew I would need a multi module build since I needed to serve up my front end code 
as well as my express.js backend. I wired up google Firebase as my authentication system that I use for signing up and logging in users. Because I am using Firebase
authentication I can utilize a JWT for authentication. After wiring up basic login functionality I deployed my barebones application to Heroku to make sure 
deployement was successfull. Throughout development I would code a feature, push to github, and deploy to ensure things were working correctly and to adhere to 
an iterative process. My development process was to think about features and work vertically across the tech stack for implementation. For example, I would start 
with the UI to code up the functionailty for users. I would then move to my middleware logic which was implemented with Redux to determine nessessary actions or 
calls either to my auth (Firebase) system, or to my express.js backend. Then, I would implement my api routes which make calls to GitHub. Because of time constraints
and since this was my last feature, I was not able to set up a database to store votes for a specific technology and expose an API utilizing that data. 

## Getting started
Clone this repository to your local machine and cd into the `TechnologyDashboard` directory then run `npm install`.
Cd into the `client` directory and run `npm install`.
Cd back into `TechnologyDashboard` and run `npm run dev` to start the development server.
## Prerequisites
You must have `node` and `npm` installed on your machine.
## Installing
To install node go to https://nodejs.org/en or if you have homebrew run `brew install node`. Npm should automatically be installed with node but in case it did not you can go here and follow the installation instructions: https://docs.npmjs.com
## Built With (npm)
React, Redux, React-bootstrap, Firebase auth, Express, Deployed to Heroku: https://technologydashboard.herokuapp.com/
