const classes = require('./classes/classes.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(classes);
};
