const express = require('express');
const serveIndex = require('serve-index');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const morganMid = require('@log/morgan');
const cacher = require('@utils/cache');
const { apiLimiter } = require('@auth/rateLimiter');

const testRoutes = require('@routes/test/test.routes');

const app = express();
app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(morganMid);
app.use(cacher);
app.use(apiLimiter);

// CORS pre-flight. Add before the rest of the routes.
app.options('*', (_, res) => {
    res.send(200);
});

app.use('/test', testRoutes);

module.exports = app;
