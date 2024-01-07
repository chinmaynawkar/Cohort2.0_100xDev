const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};  //Clear the counts every second
}, 1000)

const rateLimmiter = (req,res,next) => {
  const userId = req.header('user-id');
  
  //Check for userId exist or not 
  if(!userId) {
    //if no user id exists , skip rate limiting
    return next();
  }
  
  if(!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 1;
  } else {
    numberOfRequestsForUser[userId]++;
  
  if(numberOfRequestsForUser[userId] > 5) {
     return res.status(404).json({error : 'YOU HAVE EXCEEDED RATE LIMIT'});
  }
}

  next(); // move to next one 
};
  app.use(rateLimmiter);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;