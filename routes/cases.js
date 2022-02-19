const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');

// Route - /cases:case1:evidence1
router.get('/case1/evidence1', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'evidence1.html'));
});

// Route - /cases:case1
router.get('/case1', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'case1.html'));
});

// Route - /cases/add-evidence
router.get('/add-evidence', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'add-evidence.html'));
});

// Route - /cases/add-evidence
router.post('/add-evidence', (req, res, next) => {
      console.log("Post on add evidence");
      res.redirect('/');
    });

// Route - /cases
router.get('/', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'cases.html'));
});


module.exports = router;
