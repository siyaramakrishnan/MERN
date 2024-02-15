const express = require('express');
const { addTask } = require('../Controllers/taskController');
const router = express.Router();

router.route('/task/addTask').post(addTask);
module.exports = router;