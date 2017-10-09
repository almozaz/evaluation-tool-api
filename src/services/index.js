const classes = require('./classes/classes.service.js');
const students = require('./students/students.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(classes);
  app.configure(students);
};
