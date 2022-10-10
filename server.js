const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config({ path: 'variables.env' });

const {
  PORT, NODE_ENV, SESSION_SECRET, BOOKS_API,
} = process.env;

const connectionCheck = require('./src/db/connectionCheck');
const errorHandlers = require('./src/middlewares/errorHandlers');

// * Route files
const indexRouter = require('./src/routes/indexRouters');
const authRouter = require('./src/routes/authRouters');

const app = express();

const sessionConfig = {
  name: 'session',
  store: new FileStore(),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

// * Middlewares
if (NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.use(express.static(path.resolve('public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

// * Mount routers
app.use('/', indexRouter);
app.use('/', authRouter);

app.use(errorHandlers.notFound);

if (NODE_ENV === 'development') {
  app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

app.listen(PORT, () => {
  connectionCheck();
  console.log(`Express running → PORT ${PORT}`);
});
