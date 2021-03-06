var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/*app.post('/test', (req, res, next) => {
  const Joi = require('@hapi/joi');
  const data = req.body;
  const schema = Joi.object().keys({
    email : Joi.string().email().required(),
    phone : Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
  });
  Joi.validate(data, schema, (err, value) => {
    const id = Math.ceil(Math.random()*999999);
    if(err) {
      res.status(422).json({
        status: 'error',
        message: 'Invalid request data',
        data : data
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Valid data',
      });
    }
  });
});*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
