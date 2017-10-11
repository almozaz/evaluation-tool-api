const { populate } = require('feathers-hooks-common');

const studentSchema = {
  include: {
    service: 'students',
    nameAs: 'student',
    parentField: 'studentId',
    childField: '_id'
  }
};

const addToStudent = require('../../hooks/add-to-student');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      populate({ schema: studentSchema }),
    ],
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
