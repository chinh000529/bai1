const newsRouter = require('./news.router');
const siteRouter = require('./site.router');
const courseRouter = require('./course.router');
const userRouter = require('../routers/user.router');

function router(app) {

    app.use('/user', userRouter);

    app.use('/courses', courseRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = router;
