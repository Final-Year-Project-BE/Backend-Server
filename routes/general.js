const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');

//  Route - /home
router.get('/home', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'home.html'));
    });

//  Route - /about-us
router.get('/about-us', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'about-us.html'));
    });    

//  Route - /sign-up
router.get('/sign-up', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'sign-up.html'));
    });  

//  Route - /sign-in
router.get('/sign-in', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'sign-in.html'));
    });  

//  Route - /sign-up
router.post('/sign-up', (req, res, next) => {
      console.log(req.body);
  res.redirect('/');
});  

//  Route - /sign-in
router.post('/sign-in', (req, res, next) => {
      console.log(req.body);
  res.redirect('/');
}); 

 //  Route - /    
router.get('/', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'home.html'));  
});

module.exports = router;
