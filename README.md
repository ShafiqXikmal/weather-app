# Weather App Project
Hi Jack! This is my Final project for the GA JavaScript development bootcamp!

# Overview of idea
My idea is just a simple weather app where when the user search certain location, the app will give the temperatue, description of the weather, humidity and the windspeed of the location.

# Walkthrough of code
gitbash
mkdir weather-app-project -> npm init -> npm install --save-dev parcel -> npm install react react-dom
- adding react for internal work and react-dom for browser work
- adding parcel functions as a bundler
im using gitbash also to push the code into github:
- create .gitignore and add nodu_modules, dist, parcel-cache, .env
- update and push code into github to see the changes
- git add . => git commit -m "message" => git push => git status (to check for any unupdated file)

vs code
- adding type=module in index.html (to use export/import function)
- adding div id=app as DOM manupulation
- Adding package json=> add "start" under script... (tell parcel to run things in index)

components
- adding the component files that require for the app
- adding weather and app files in the component 
- adding all the code neccesary to build and run the app in the components folder
- adding component code across and export it so that other file can require it
- set module.exports so that other files can access to it as well

index.js
- adding require for react, reactDOM, app
- it requires all code that react package exports save it into react variable
- let target = #app
- set ReactDom render App, target => component to load, where to show it

Function & method
- using useState for the user change or updating the data
- using fetch & GET method to get the Api data from the servers
