const Course = require('../models/course.model');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        res.json(req.body);
    }

    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    //[GET] /courses/
    index(req, res, next) {
        // Course.find({}, (err, courses) => {
        //     if(!err) {
        //         res.json(courses);
        //     } else {
        //         res.status(400).json({ err: 'error !!!'})
        //     }
        // })

        Course.find({})
            .then((courses) => {
                res.render('courses/index', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
