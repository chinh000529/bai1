const newsRouter = require('./news.router');
const siteRouter = require('./site.router');

function router(app) {

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = router;