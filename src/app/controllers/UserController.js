const Course = require('../models/course.model');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose'); 

class UserController {

    //[GET] /user/index
    index(req, res, next) {
        const courses = Course.find({})
            .then( courses => res.render('user/index', {
                courses: multipleMongooseToObject(courses),
            }))
            .catch(next);
    }
}

module.exports = new UserController();