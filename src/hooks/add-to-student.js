// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addToStudent (hook) {
    const evaluationId = hook.result._id;
    const studentId = hook.result.studentId;
    // patch query passing the studentId
    return hook.app.service('students').patch(studentId,
      {$addToSet: {evaluations: evaluationId}
      })
      .then(() => {
        return hook; //take this out, see what happens
      });
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations

  };
};
