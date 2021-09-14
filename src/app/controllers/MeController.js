const Course = require('../models/course.model');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose'); 

class MeController {

    //[GET] /me/store/courses
    storeCourse(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => res.render('me/storeCourse', {
                deletedCount, 
                courses: multipleMongooseToObject(courses),
            }))
            .catch(next);
    }

    //[GET] /me/trash/courses
    trashCourse(req, res, next) {
        const courses = Course.findDeleted({})
            .then( courses => res.render('me/trashCourse', {
                courses: multipleMongooseToObject(courses),
            }))
            .catch(next);
    }
}

module.exports = new MeController();