const express = require('express');
const router = express.Router();
// const annyang = https://cdnjs.cloudflare.com/ajax/libs/annyang/2.5.0/annyang.min.js;

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/nextpage', function (req, res, next) {
  res.render('next');
});

router.get('/test', function (req, res) {
  res.json({
    message: 'It worked!'
  });
});

module.exports = router;
