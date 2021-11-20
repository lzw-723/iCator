const app = require('./app');

app.listen(app.get('port'), function () {
    console.log('iCator started on http://localhost:' + app.get('port'));
});