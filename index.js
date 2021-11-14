const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

// 404
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// 500
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
})

app.listen(app.get('port'), function () {
    console.log('express started on http://localhost:' + app.get('port'));
});


// app.get('/', (req, res) => {
//     res.send('Hello Cats!');
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });