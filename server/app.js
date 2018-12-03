const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const userAccountRouter = require('./routes/useraccounts');
const itemRouter = require('./routes/items');
const categoriesRouter = require('./routes/categories');
const orderRouter = require('./routes/orders');
const productCategoriesRouter = require('./routes/productcategories');
const announcmentRouter = require('./routes/announcements');
const reviewRouter = require('./routes/reviews');

const app = express();

const stor = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({ storage: stor }).single('image'));
app.use('/images', express.static('images'));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/useraccounts', userAccountRouter);
app.use('/items', itemRouter);
app.use('/categories', categoriesRouter);
app.use('/orders', orderRouter);
app.use('/productcategories', productCategoriesRouter);
app.use('/announcements', announcmentRouter);
app.use('/reviews', reviewRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
