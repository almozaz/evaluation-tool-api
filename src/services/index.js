const classes = require('./classes/classes.service.js');
const students = require('./students/students.service.js');
const evaluations = require('./evaluations/evaluations.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(classes);
  app.configure(students);
  app.configure(evaluations);
};
