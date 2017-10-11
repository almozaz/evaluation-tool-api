const { populate } = require('feathers-hooks-common');

const batchSchema = {
  include: {
    service: 'classes',
    nameAs: 'batch',
    parentField: 'classId',
    childField: '_id'
  }
};

const addToClass = require('../../hooks/add-to-class');

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
      populate({ schema: batchSchema }),             // <----------------- Add the hook HERE!
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
