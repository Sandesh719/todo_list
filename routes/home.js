const express = require('express');
const { HomePage } = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(HomePage)


module.exports = router;