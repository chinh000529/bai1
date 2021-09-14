const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:id/edit', courseController.edit);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.get('/', courseController.index);

router.post('/store', courseController.store);

router.put('/:id', courseController.update);

router.patch('/:id/restore', courseController.restore);

router.delete('/:id/force', courseController.forceDelete);
router.delete('/:id', courseController.delete);

module.exports = router;
