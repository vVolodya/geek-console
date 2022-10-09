const express = require('express');
const path = require('path');
const logger = require('morgan');

require('dotenv').config({ path: 'variables.env' });

const PORT = process.env.PORT || 7777;

const connectionCheck = require('./src/db/connectionCheck');

// * Route files
const authRouter = require('./src/routes/authRouters');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.use(express.static(path.resolve('public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * Mount routers
app.use('/', authRouter);

app.get('/', (req, res) => {
  res.send('It works!');
});

app.listen(PORT, () => {
  connectionCheck();
  console.log(`Express running → PORT ${PORT}`);
});
