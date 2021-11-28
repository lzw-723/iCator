const express = require('express');
const morgan = require('morgan');
const router = require('./src/router')
const errorHandler = require('./src/middleware/error-handler');

const app = express();

app.use(morgan('dev'))
app.set('port', process.env.PORT || 3000);

app.use('/v1', router);
app.use(errorHandler());

app.get('/', (req, res) => {
    res.send('Hello Cats!');
});

// app.get('/api', (req, res) => {
//     let links = {
//     };
//     res.send(links);
// });

// 404
// app.use(function (req, res) {
//     res.type('text/plain');
//     res.status(404);
//     res.send('404 - Not Found');
// });

// 500
// app.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.type('text/plain');
//     res.status(500);
//     res.send('500 - Server Error');
// })

module.exports = app;

