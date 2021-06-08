# Social Network API

## Summary
This project provides API endpoints for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Express.js is used for routing, with a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, a JavaScript Date object to format timestamps is also used.

## User Story
AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data  

## Acceptance Criteria
- GIVEN a social network API  
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia Core for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia Core
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Design Mock-Up
GET routes for all 'Users' and all 'Thoughts' 
![](assets/img/18-nosql-homework-demo-01.gif)  

GET routes for single user and single thought  
![](assets/img/18-nosql-homework-demo-02.gif)  

POST, PUT, and DELETE routes for users  
![](assets/img/18-nosql-homework-demo-03.gif)  

POST and DELETE routes for a user’s friend list  
![](assets/img/18-nosql-homework-demo-04.gif)  

## Github Repository
All files and changes made are located on github at the following location:  

https://github.com/htang2021/socialnet-api  

## Walk-Thru Video
Link to the walkthrough video that demonstrates the functionality of the social media API's:




End of README.md - updated by Hung Tang on 6/6/21
