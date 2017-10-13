const { populate } = require('feathers-hooks-common');
const { authenticate } = require('feathers-authentication').hooks;
const { restrictToAuthenticated } = require('feathers-authentication-hooks');


const batchSchema = {
  include: {
    service: 'classes',
    nameAs: 'batch',
    parentField: 'classId',
    childField: '_id'
  }
};

const evaluationsSchema = {
  include: {
    service: 'evaluations',
    nameAs: 'evaluations',
    parentField: 'evaluations',
    childField: '_id'
  }
};

const addToClass = require('../../hooks/add-to-class');

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
    all: [
      populate({ schema: batchSchema }),
      populate({ schema: evaluationsSchema }),
    ],
    find: [],
    get: [],
    create: [addToClass()],
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
