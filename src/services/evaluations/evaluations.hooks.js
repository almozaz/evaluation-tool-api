const { populate } = require('feathers-hooks-common');
const { authenticate } = require('feathers-authentication').hooks;
const { restrictToAuthenticated } = require('feathers-authentication-hooks');

const studentSchema = {
  include: {
    service: 'students',
    nameAs: 'student',
    parentField: 'studentId',
    childField: '_id'
  }
};

const addToStudent = require('../../hooks/add-to-student');

const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];

module.exports = {
  before: {
    all: [...restrict],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addToStudent()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
