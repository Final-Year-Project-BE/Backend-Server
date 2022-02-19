const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');

// Route - /admin/view-requests
router.get('/view-requests', (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'admin-view-requests.html'));
});

router.post('/view-requests', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'admin-view-requests.html'));
});

module.exports = router;
