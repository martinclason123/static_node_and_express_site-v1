//const { response } = require('express');
const express = require('express');
const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))


const app = express();

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');

const routes = require('./routes');

app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Page Not Found');
    err.status = 404;

    //pass error to the next matching route.
    next(err);
});

// handle error, print stacktrace
app.use(function(err, req, res, next) {
    //res.status(err.status || 500);
    if (err.status == 404){
        res.render('page-not-found', {
            message: err.message,
            error: err
        });
    } else {
    res.render('error', {
        message: err.message,
        error: err
    });
    }
});


app.listen(3000, () => {
    console.log('listening on port 3000...')
});