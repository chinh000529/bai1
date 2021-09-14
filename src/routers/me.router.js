const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/store/courses', meController.storeCourse);
router.get('/trash/courses', meController.trashCourse);

module.exports = router;