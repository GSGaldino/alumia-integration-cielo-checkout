const express = require('express');

const emojis = require('./emojis');
const cielo = require('./cielo');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/cielo', cielo.index);

module.exports = router;
