// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addToClass (hook) {
    const studentId = hook.result._id;
    const classId = hook.result.classId;
    // patch query passing the studentId
    return hook.app.service('classes').patch(classId,
      {$addToSet: {students: studentId}
      })
      .then(() => {
        return hook; //take this out, see what happens
      });
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations

  };
};
