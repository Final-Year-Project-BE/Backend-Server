const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');


// Route - /officer/add-case
router.get('/officer/add-case', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'add-case.html'));
});

router.post('/officer/add-case', (req, res, next) => {
      console.log(req.body);
      res.redirect('/');
    });

// Route - /officer/view-requests
router.get('/view-requests', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'officer-view-requests.html'));
});

// Route - /officer/my-evidences
router.get('/my-evidences', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'my-evidences.html'));
});

// Route - /
router.get('/', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'my-evidences.html'));
});

module.exports = router;
