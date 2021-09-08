const newsRouter = require('./news.router');
const siteRouter = require('./site.router');
const courseRouter = require('./course.router');

function router(app) {
    app.use('/courses', courseRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = router;
