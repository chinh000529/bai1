const newsRouter = require('./news.router');
const siteRouter = require('./site.router');
const courseRouter = require('./course.router');
const meRouter = require('../routers/me.router');

function router(app) {

    app.use('/me', meRouter);

    app.use('/courses', courseRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = router;
