// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const students = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    classId: { type: Schema.Types.ObjectId, ref: 'classes' },
    evaluations: [{ type: Schema.Types.ObjectId, ref: 'evaluations' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('students', students);
};
